<template>
  <nav class="navbar navbar-inverse navbar-static-top">
    <div class="container">
      <div class="switchlang" style="float: right;line-height: 50px;padding-left: 10px;"><span :class="{ activeaa : language === 'cn' }" @click="changeLan('cn')">CN</span>・<span :class="{ activeaa : language === 'en' }" @click="changeLan('en')">EN</span>・<span :class="{ activeaa : language === 'jp' }" @click="changeLan('jp')">JP</span></div>
      <!--<a href="javascrpt:''" @click="toggleLang" style="position:absolute;right:280px;top:15px;color:#FFF">{{ $t('label.lang') }}</a>-->

      <div class="dropdown navbar-right" :class="{open: showDropdown}" @mouseenter="onMouseenter" @mouseleave="onMouseleave" style="margin-right:0">
        <a
          href="javascript:;"
          class="dropdown-toggle"
          :class="{'hidden-md': !hasToken, 'hidden-lg': !hasToken}"
          @click="dropdownToggle"
        >
          <img :src="avatar" class="img-circle">
          <span>{{ mobile }}</span>
        </a>
        <ul v-if="hasToken" class="dropdown-menu">

          <li><router-link to="/wallet" @click.native="dimissMenu">{{ $t('label.assets') }}</router-link></li>
          <li><router-link to="/candyRoom/candyMyData" @click.native="dimissMenu">{{ $t('label.order') }}</router-link></li>
          <li><a href="javascript:;" @click="$emit('signout')">{{ $t('label.logout') }}</a></li>

        </ul>
        <ul v-else class="dropdown-menu hidden-md hidden-lg">
          <li><router-link to="/signin" @click.native="dimissMenu">{{ $t('label.login') }}</router-link></li>
          <li><router-link to="/signup" @click.native="dimissMenu">{{ $t('label.registered') }}</router-link></li>
        </ul>
      </div>

      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{collapsed: !showSide}" @click="navbarToggle">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <router-link to="/" class="navbar-brand">
          <img src="/static/img/brand.png" alt="BitCV" height="30" class="hidden-xs hidden-sm">
          <img src="/static/img/brand-mobile.png" alt="BitCV" height="30" class="hidden-md hidden-lg">
        </router-link>
      </div>

      <div v-if="!hasToken" class="navbar-right hidden-sm hidden-xs" style="margin-right:0;">
        <router-link class="btn navbar-btn btn-default btn-outline" to="/signup">{{ $t('label.registered') }}</router-link>

        <span>&nbsp;&nbsp;</span>
        <router-link class="btn navbar-btn btn-default btn-outline" to="/signin">{{ $t('label.login') }}</router-link>
      </div>

      <div class="collapse navbar-collapse" :class="{'in': showSide}">
        <ul class="nav navbar-nav">
          <router-link tag="li" active-class="active" exact to="/" @click.native="dimissMenu"><a href="javascript:;">{{$t('label.home')}}</a></router-link>
          <router-link tag="li" active-class="active" to="/discover" @click.native="dimissMenu"><a href="javascript:;">{{$t('label.discover')}}</a></router-link>
          <router-link tag="li" active-class="active" to="/candyRoom" @click.native="dimissMenu"><a href="javascript:;">{{$t('label.ybb')}}</a></router-link>
          <router-link tag="li" active-class="active" to="/acting" @click.native="dimissMenu"><a href="javascript:;">{{$t('label.dfb')}}</a></router-link>
          <li><a href="https://main.bitcv.net/" target="_blank">{{$t('label.block_explorer')}}</a></li>
          <li><a href="https://bitcv.app" target="_blank">{{$t('label.bcv_wallet')}}</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapState} from 'vuex'
import ClickOutside from '@/directives/click-outside'

export default {
  props: {
    hasToken: Boolean
  },
  data () {
    return {
      showSide: false,
      showDropdown: false
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    }),
    avatar () {
      if (this.userInfo && this.userInfo.avatarUrl) {
        return this.userInfo.avatarUrl
      }

      return '/static/img/avatar.png'
    },
    mobile () {
      if (this.userInfo) {
        const {mobile} = this.userInfo

        const list = `${mobile}`.split('')
        list.splice(2, 7, '**')

        return list.join('')
      }

      return ''
    },
    language () {
      return this.$i18n.locale
    }
  },
  directives: {
    'click-outside': ClickOutside
  },
  watch: {
    showSide: 'onToggleMenu',
    showDropdown: 'onToggleMenu'
  },
  methods: {
    toggleLang () {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'cn' : 'en'
    },
    dropdownToggle () {
      this.showSide = false
      this.showDropdown = !this.showDropdown
    },
    navbarToggle () {
      this.showSide = !this.showSide
      this.showDropdown = false
    },
    onMouseenter () {
      this.showSide = false
      if (this.__timer) {
        clearTimeout(this.__timer)
        this.__timer = null
      }

      // this.showDropdown = true
    },
    onMouseleave () {
      if (this.__timer) {
        clearTimeout(this.__timer)
        this.__timer = null
      }

      this.__timer = setTimeout(() => {
        this.showDropdown = false
      }, 150)
    },
    onClickOutside () {
      if (this.showSide) {
        this.showSide = false
      }
    },
    onToggleMenu () {
      if (this.showSide || this.showDropdown) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    dimissMenu () {
      if (this.showSide) {
        this.showSide = false
      }
      if (this.showDropdown) {
        this.showDropdown = false
      }
    },
    changeLan (params) {
      this.$i18n.locale = params
    }
  },
  mounted () {
    this.showSide = false
    this.showDropdown = false
  }
}
</script>

<style lang="scss">
@import '~@/styles/variables';

.navbar-inverse {
  background-color: #656565;
  border-color: #555;
  .navbar-toggle {
    padding: 7px 10px;
    margin-top: 5px;
    margin-bottom: 5px;

    &, &:hover, &:focus {
      border-color: transparent;
      background-color: transparent;
    }

    .icon-bar {
      position: relative;
      width: 24px;
      height: 3px;
      &:before {
        position: absolute;
        content: '';
        width: 3px;
        height: 3px;
        left: -5px;
        background-color: #fff;
        border-radius: 1px;
      }
    }
  }
  .navbar-brand {
    padding-top: 10px;
    padding-bottom: 10px;
    > img {
      display: block;
    }
  }
  .dropdown-toggle {
    display: block;
    padding: 5px;
    color: $primary-color;
    > img {
      width: 40px;
      height: 40px;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .btn-outline {
    color: $gray;
    &:hover, &:focus {
      color: #fff;
    }
  }
  .switchlang {
    color: #9d9d9d;
    cursor: pointer;
  }
  .switchlang .activeaa {
    color: #fdb76e;
  }
}
@media (max-width: 767px) {
  .navbar-header {
    .navbar-brand {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .navbar-inverse .dropdown-toggle {
    float: right;
  }

  .navbar-collapse {
    position: fixed;
    left: 0;
    right: 0;
    top: 51px;
    background-color: #656565;
    box-shadow: 0 1px 5px rgba(0, 0, 0, .35);

    .navbar-nav {
      > li {
        > a {
          color: #fff;
          text-align: center;
        }

        &.active > a,
        &.active > a:hover,
        &.active > a:focus {
          background-color: $primary-color;
        }
      }
    }
  }

  .navbar-inverse .dropdown-menu {
    position: fixed;
    top: 51px;
    left: 0;
    right: 0;
    margin-top: 0;
    text-align: center;
    border: 0;
    border-radius: 0;
    background-color: #656565;

    > li {
      > a {
        padding: 10px 15px;
        color: #fff;
        line-height: 20px;

        &:hover, &:focus {
          color: #fff;
          background-color: transparent;
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .navbar-header {
    // display: flex;

    .navbar-toggle {
      margin-left: 15px;
      float: left;
    }
  }
}
@media (min-width: 768px) {
  .navbar-inverse .navbar-nav {
    margin-left: 10%;

    > li {
      > a {
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 13px;
        font-size: 16px;
        border-bottom: 2px solid transparent;
      }

      & + li {
        margin-left: 30px;
      }

      &.active > a,
      &.active > a:hover,
      &.active > a:focus {
        color: $primary-color;
        background-color: transparent;
        border-bottom-color: $primary-color;
      }
    }
  }
}
@media (min-width: 992px) {
  .navbar-inverse .navbar-nav {
    margin-left: 4%;
  }
}
</style>
