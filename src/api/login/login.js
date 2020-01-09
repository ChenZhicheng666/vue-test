import axios from 'axios'
axios.defaults.withCredentials = true
const host = 'http://120.79.185.173:8080/agriculture/'
import cookie from 'js-cookie'
import {COOKIE_KEY} from "@/base/constants";
import config from '../config.js'
// import Mock from 'mockjs'
function openLogin() {
  console.log(config.rootURL);
  var useId= cookie.get(COOKIE_KEY.USER_ID);
  console.log(userId)

}

export { openLogin }
