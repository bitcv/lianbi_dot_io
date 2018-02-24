function getComponent (path) {
  return () => import(`@/components/${path}.vue`)
}

function getViews (path) {
  return () => import(`@/views/${path}.vue`)
}

export default [{
  path: '/',
  component: getComponent('home/Home')
}, {
  path: '/projList',
  component: getComponent('projList/ProjList')
}, {
  path: '/candyRoom',
  redirect: '/candyRoom/candyList',
  component: getComponent('candyRoom/CandyRoom'),
  children: [{
    path: 'candyList',
    component: getComponent('candyRoom/CandyList')
  }, {
    path: 'candyBuy',
    component: getComponent('candyRoom/CandyBuy'),
    props: true
  }, {
    path: 'candyOrder',
    component: getComponent('candyRoom/CandyOrder')
  }, {
    path: 'candyOrderDetail/:id',
    component: getComponent('candyRoom/CandyOrderDetail')
  }, {
    path: 'candyOrderConfirm/:id',
    component: getComponent('candyRoom/CandyOrderConfirm')
  }, {
    path: 'myCandyOrder',
    component: getComponent('candyRoom/MyCandyOrder')
  }]
}, {
  path: '/projDetail/:id',
  component: getComponent('projDetail/ProjDetail'),
  redirect: '/projDetail/info/:id',
  children: [{
    path: '/projDetail/info/:id',
    component: getComponent('projDetail/ProjDetailPanel')
  }, {
    path: '/projDetail/dynamic/:id',
    component: getComponent('projDetail/ProjDynamicPanel')
  }]
}, {
  path: '/signin',
  component: getComponent('sign/Signin')
}, {
  path: '/signup',
  component: getComponent('sign/Signup')
}, {
  path: '/share',
  component: getComponent('share/Share')
}, {
  path: '/protocol',
  component: getComponent('sign/Protocol')
}, {
  path: '/findpwd',
  component: getComponent('sign/FindPwd')
}, {
  path: '/resetpwd/:mobile',
  component: getComponent('sign/ResetPwd')
}, {
  path: '/newList',
  component: getComponent('news/NewList')
}, {
  path: '/newDetail/:id',
  component: getComponent('news/NewDetail')
}, {
  path: '/apply',
  component: getComponent('apply/Apply')
}, {
  path: '/address',
  component: getViews('user/address')
}, {
  path: '/records',
  component: getViews('user/records')
}]
