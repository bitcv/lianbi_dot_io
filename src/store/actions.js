import axios from 'axios'

const handleErr = (msg) => {
  alert(msg)
}

export const reLogin = ({ commit }) => {
  commit('cleanUserInfo')
}

const resolveResponse = ({ errcode, data, errmsg = '' }) => {
  switch (errcode) {
    case 0: return data
    case 302:
      reLogin()
      return Promise.reject(errmsg)
    default:
      handleErr(errmsg)
      return Promise.reject(errmsg)
  }
}

const post = (url, params) => {
  return axios.post(url, params).then(res => resolveResponse(res.data))
}

// 获取项目列表
export const getProList = (store, params) => {
  return post('/api/getProjList', params)
}

// 获取项目详情
export const getProDetail = (store, params) => {
  return post('/api/getProjDetail', params)
}

// 获取资讯列表
export const getNewsList = (store, params) => {
  return post('/api/getNewsList', params)
}

// 获取筛选条件
export const getFilterParams = (store, params) => {
  return post('/api/getProjTagList', params)
}

// 获取英文筛选条件
export const getEnFilterParams = (store, params) => {
  return post('/api/getEnProjTagList', params)
}

// 获取日语筛选条件
export const getJpFilterParams = (store, params) => {
  return post('/api/getJpProjTagList', params)
}

// 获取TOP10
export const getTop10 = (store, params) => {
  return post('/api/getProjTopList', params)
}

// 浏览项目
export const viewProject = (store, params) => {
  return post('/api/viewProject', params)
}

// 关注|取消关注
export const updateFocus = (store, params) => {
  return post('/api/toggleFocus', params)
}

// 获取BV指数
export const getScore = (store, params) => {
  return post('/api/getAverageScore', params)
}

// 获取余币宝计划列表
export const getCandyList = (store, params) => {
  return post('/api/getDepositBoxList', params)
}

// 获取用户余币宝列表
export const getUserDepositBoxList = (store, params) => {
  return post('/api/getUserDepositBoxList', params)
}

// 获取用户余币宝资产
export const getUserDepositAsset = (store, params) => {
  return post('/api/getUserDepositAsset', params)
}

// 获取用户余币宝资产明细列表
export const getUserDepositFinanceList = (store, params) => {
  return post('/api/getUserDepositFinanceList', params)
}

// 获取用户余币宝收益列表
export const getUserDepositProfitList = (store, params) => {
  return post('/api/getUserDepositProfitList', params)
}

// 提交充值订单
export const postCandyOrder = (store, params) => {
  return post('/api/addDepositOrder', params)
}

// 获取订单详情
export const getOrderDetail = (store, params) => {
  return post('/api/getOrderDetail', params)
}

// 获取确认订单列表
export const getOrderTxRecordList = (store, params) => {
  return post('/api/getOrderTxRecordList', params)
}

// 确认记录完成
export const confirmDepositTx = (store, params) => {
  return post('/api/confirmDepositTx', params)
}

// 获取用户订单列表
export const getUserOrderList = (store, params) => {
  return post('/api/getUserOrderList', params)
}

// 取消订单
export const cancelDepositOrder = (store, params) => {
  return post('/api/cancelDepositOrder', params)
}

// 添加用户代发宝资产
export const addUserDispenseAsset = (store, params) => {
  return post('/api/addUserDispenseAsset', params)
}

// 获取代发宝钱包信息
export const getDispenseWallet = (store, params) => {
  return post('/api/getDispenseWallet', params)
}

// 获取代发宝账户余额
export const getDispenseBalance = (store, params) => {
  return post('/api/getDispenseBalance', params)
}

// 获取通证信息
export const getTokenInfo = (store, params) => {
  return post('/api/getTokenInfo', params)
}

// 获取通证信息
export const getTokenBySymbol = (store, params) => {
  return post('/api/getTokenBySymbol', params)
}

// 获取费用信息
export const getDispenseFee = (store, params) => {
  return post('/api/getDispenseFee', params)
}

// 确定代发
export const confirmDispense = (store, params) => {
  return post('/api/confirmDispense', params)
}

// 确定代发交易记录
export const getDispenseFinance = (store, params) => {
  return post('/api/getDispenseFinance', params)
}

// 获取代发状态
export const getDispenseList = (store, params) => {
  return post('/api/getDispenseList', params)
}

// 获取用户任务列表
export const getUserTaskList = (store, params) => {
  return post('/api/getUserTaskList', params)
}

// 获取币威指数
export const getIndexBcv = (store, params) => {
  return post('/api/getIndexBcv', params)
}
export const toProject = (store, params) => {
  return post('/api/toProject', params)
}

// 获取币威指数成分币列表
export const getIndexCoins = (store, params) => {
  return post('/api/getIndexCoins', params)
}
