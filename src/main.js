import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// animate动画库
import 'animate.css'
import crypto from 'crypto'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import axios from 'axios'
axios.defaults.withCredentials = true
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.prototype.$http=axios

Vue.use(VueResource);

// 自定义的全局组件
import Notification from '@/components/notification'

// 国际化
import i18n from './lang'
// 全局权限检查
//import './permission'
// 全局图标
import './icons'
// // 全局 Mock 接口
// import './mock'
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.min.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.min.js'
import VueUeditorWrap from 'vue-ueditor-wrap'
Vue.use(ElementUI, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(Notification)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
