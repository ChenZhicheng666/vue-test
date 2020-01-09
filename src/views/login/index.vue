<template>


  <el-container class="login-container">
    <el-scrollbar style="height: 100% ;width:100%">
    <el-main>
    <el-card class="animated flipInY">

      <div slot="header" class="el-card-header">

      </div>
      <el-form :rules="rules" :model="loginForm" ref="loginForm" label-width="60px">
        <el-form-item :label="$t('login.account')" prop="username" style="position:relative">
          <el-input type="text" v-model="loginForm.username" @keyup.enter.native="goToPwdInput"></el-input>
          <span class="svg-container svg-container_user">
            <svg-icon icon-class="user" />
          </span>
        </el-form-item>
        <el-form-item :label="$t('login.password')" prop="pwd">
          <el-input type="password" v-model="loginForm.pwd" @keyup.enter.native="onLogin" ref="pwd"></el-input>
          <span class="svg-container svg-container_password">
            <svg-icon icon-class="password" />
          </span>
        </el-form-item>
        <el-form-item :label="$t('login.remember')" label-width="80px">
          <el-switch v-model="remember"></el-switch>
        </el-form-item>
        <el-button type="primary" @click="onLogin('loginForm')" :loading="loading">{{$t('login.login')}}</el-button>
        </el-form>
    </el-card>
    <!-- particles.js container -->
    <div id="particles"></div>
    </el-main>
  </el-scrollbar>
  </el-container>

</template>
<script>
  import config from '@/api/config'
  import Cookies from 'js-cookie'
  import axios from 'axios';
  axios.defaults.withCredentials = true
  import LangSelect from '@/components/lang-select'
  // import { saveToLocal, loadFromLocal } from '@/common/local-storage'
  import { mapActions } from 'vuex'
  import crypto from 'crypto'
  /* eslint-disable*/
  import particles from 'particles.js'

  export default {
    components: {
      LangSelect
    },
    data() {
      // username 验证
      const validateUsername = (rule, value, callback) => {
        if (value.length < 0) {
          callback(new Error('请输入正确的帐号'))
        } else {
          callback()
        }
      }
      // pwd 验证
      const validatePwd = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'))
        } else {
          callback()
        }
      }
      return {
        // 粒子开关
        toggleParticles: false,
        loginForm: {
          username: '',
          pwd: ''
        },
        remember: false,
        loading: false,
        /**
         * 出错提示
         *
         * */
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { required: true, trigger: 'blur' ,validator: validateUsername},
            { required: true, trigger: 'change',validator: validateUsername }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { required: true, trigger: 'blur', validator: validatePwd },
            { required: true, trigger: 'change', validator: validatePwd }
          ]
        }
      }
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      // 用户名输入框回车后切换到密码输入框
      goToPwdInput() {
        this.$refs.pwd.$el.getElementsByTagName('input')[0].focus()
      },
      // 登录操作
      onLogin() {
        if(this.loginForm.pwd=='123456' && this.loginForm.username=='admin'){
          this.$message({
            type: 'success',
            message:'登陆成功, 欢迎使用XX系统!'
          });
          this.$router.push({ path: '/home' });
        }
        else{
          this.$message({
            type: 'warning',
            message:'账号或密码错误!'
          });
        }


        /**
         *后台验证
         *

        var that=this;
        var md5 = crypto.createHash("md5");
        md5.update( this.loginForm.pwd)//对密码进行md5加密
        const PSW=md5.digest('hex')
        var param = {
          phonenum: this.loginForm.username,
          password: PSW,
        }
        // console.log(param)
        axios.defaults.withCredentials = true
        axios.post(config.rootURL+'portal/user/login.do',param,{withCredentials: true})
          .then((res) => {
            // console.log(res.data)
            if(res.data.status===0){
              Cookies.set('imgUrl',res.data.data.image)
              Cookies.set('Name',res.data.data.username)
              Cookies.set('userId',res.data.data.userId)
              Cookies.set('userType',res.data.data.type)
              Cookies.set('user',res.data.data)
              //console.log(res.data.data)
              if(res.data.data.username==='紫金茶叶产业园'){
                this.$message({
                  type: 'success',
                  message:'登陆成功, 欢迎使用产业园帐号!'
                });
                Cookies.set('limit',1)//管理员权限
                this.$router.push({ path: '/home' });
              }
              else if(res.data.data.type===0){
                this.$message({
                  type: 'success',
                  message:'登陆成功, 欢迎使用管理员帐号!'
                });
                Cookies.set('limit',0)//管理员权限
                this.$router.push({ path: '/home' });
              }
            else{
                this.$message({
                  type: 'warning',
                  message:"非管理人员或产业园管理帐号无法登录！"
                });
              }
            } else{
              this.$message({
                type: 'warning',
                message:res.data.msg
              });
            }
          })
          .catch((error) =>{
            console.log("error");
          })

         */
      },
    }
  }
</script>
<style scoped lang="stylus">
  .el-header {
    text-align: left;
    font-size: 30px;
    background-color: #409EFF;
    color: #ffffff;
    line-height: 60px;
  }
  .login-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #07ccd4;
    background-size: cover;
    overflow: hidden;
    .show-account {
      position: absolute;
      left: 15px;
      bottom: 20px;
      color: red;
    }
    .el-card {
      border-radius 15px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -200px 0 0 -200px;
      width: 400px;
      height: 300px;
      background: rgba(255,255,255,0.8);
      .el-card-header {
        text-align: center
        .lang-select {
          float right
        }
      }
      .login-title {
        margin: 0;
        text-align: center;
      }
      .el-input /deep/ .el-input__inner {
        text-indent: 12px;
      }
      .svg-container {
        position: absolute;
        top: 0;
        left: 5px;
        color: #889aa4;
        &_user {
          font-size: 20px;
        }
        &_password {
          left: 7px;
          font-size: 16px;
        }
      }

      .el-button--primary {
        width: 100%;
        height:50px;
        top:10%;
        //background-color #00b67f
      }
    }
  }
    .main-item{
      position: absolute;
      top: 39%;
      left: 46.5%;
      margin: -200px 0 0 -200px;
      display:flex;
      justify-content:space-between;
      flex-direction:column;
    }
  #particles {
    width: 100%;
    height: 100%;
    /*background-color: #b61924;*/
    /*background-color: #23ae88;*/
    background-color: transparent;
    // background-image: url('/static/image/login-bg.jpg');
    /*background-image: url('../img/bg_particles.png');*/
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

</style>
