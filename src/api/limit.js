import Cookies from 'js-cookie'
// import Mock from 'mockjs'

const TokenKey = 'Vue-cms'

function limitCheckout(name) {
  return (
    name===
    "紫金县紫龙农业开发有限公司"||
    name===
    "广东黄花现代农业发展有限公司"||
    name===
    "河源市且珍壹佰农家茶有限公司"||
    name===
    "紫金县禾发种养农民专业合作社"||
    name===
    "紫金县金丰号农业发展有限公司"||
    name===
    "紫金县金山茶业科技发展有限公司"||
    name===
    "紫金县蜜香茶养生有限公司"||
    name===
    "紫金县南叶生态茶业科技发展有限公司"||
    name===
    "紫金县农联惠农业科技发展有限公司"||
    name===
    "紫金县天元茶业农民专业合作社"||
    name===
    "紫金县兆达农庄"||
    name===
    "紫金县承龙嶂龙王绿茶业有限公司")
}

function limitPush() {
  console.log(6666666666777777666)
}

function setToken(token) {
  return Cookies.set(TokenKey, token)
}

function removeToken() {
  return Cookies.remove(TokenKey)
}



export { limitCheckout,limitPush }
