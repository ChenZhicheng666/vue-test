<template>
  <el-menu
    class="top-navbar"
    mode="horizontal"
    text-color="#fff"
    active-text-color="#fff">

    <router-link to="/home" style="display: table;">
      <div index="1" style="font-size: 30px; color: white; " class="title-name"><span style="font-size: 30px; color: white;  position: absolute;top:30%">&nbsp;&nbsp;&nbsp;环境监理动态管控系统</span></div>
    </router-link>
    <el-dropdown class="avatar-container center" trigger="click">

      <el-dropdown-menu class="center">
        <el-dropdown-item @click.native="logout">
          <span  style="display:block;">{{$t('navbar.logOut')}}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

<!--    <el-tooltip effect="dark" class="right-menu-item" :content="$t('navbar.screenfull')" placement="bottom">-->
<!--      <screenfull class="screenfull "></screenfull>-->
<!--    </el-tooltip>-->
    <el-link style="color:white" class="rightItem0">关于我们</el-link>
    <el-link style="color:white" class="rightItem1"><i class="el-icon-chat-dot-round"></i>&nbsp;反馈</el-link>
    <el-link style="color:white" class="rightItem2" @click="onlogout"><i class="el-icon-switch-button"></i>&nbsp;退出</el-link>
  </el-menu>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';
  import LangSelect from '@/components/lang-select';
  import Screenfull from '@/components/screenfull';
  import ChangeTheme from '@/components/theme';
  import Cookies from 'js-cookie';
  import axios from 'axios';
  axios.defaults.withCredentials = true
  import crypto from 'crypto'
  export default {
    name: '',
    components: {
      LangSelect,
      Screenfull,
      ChangeTheme
    },
    data() {
      return {
        imageUrl: 'http://120.79.185.173:8080/agriculture/'+Cookies.get('imgUrl'),
        userName: Cookies.get('Name')
      }
    },
    methods: {
      ...mapActions({
        userLogout: 'logout'
      }),
      onlogout() {
        this.$confirm('此操作退出系统, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          Cookies.set('userId','')
          Cookies.set('userType','')
          Cookies.set('user','')
          this.$router.push({path: '/'})
          location.reload()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });
        });
      },
      logout() {
        Cookies.set('userId','')
        Cookies.set('userType','')
        Cookies.set('user','')
        Cookies.set('limit','')
        this.$router.push({path: '/'})
        location.reload()
      }
    },

  }

</script>
<style lang="stylus">
  .center{
    width:120px;
    position:absolute;
    left:50%;
  }
.top-navbar {
  margin-top -10px
  margin-left -10px
  position fixed
  width 100%
  z-index 10
  border-bottom none !important

  background-image -webkit-gradient(linear, left top, right top, from(#06a2a0), to(#0ecacf))
  background-image -webkit-linear-gradient(45deg, #24b9cf, #24b9cf 50%, #24b9cf)
  background-image -moz-linear-gradient(45deg, #24b9cf, #24b9cf 50%, #24b9cf)
  background-image linear-gradient(45deg, #24b9cf, #24b9cf 50%, #24b9cf)
}
.top-navbar /deep/ .el-menu-item {
  font-size 20px
  .el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: #26af8b00!important;

  }
  &:hover {
    background: rgba(0, 0, 0, 0.2) none repeat scroll !important;/* rgba(0, 0, 0, 0.2) 前三个确定颜色，最后0.2确定透明度 */
    /*实现FireFox背景透明，文字不透明*/
    background: #ffffff;
    filter: Alpha(opacity=20);
    /*实现IE背景透明,文字不透明*/
  }
  &:focus {
    background: rgba(0, 0, 0, 0.2) none repeat scroll !important;/* rgba(0, 0, 0, 0.2) 前三个确定颜色，最后0.2确定透明度 */
    /*实现FireFox背景透明，文字不透明*/
    background: #ffffff;
    filter: Alpha(opacity=20);
    /*实现IE背景透明,文字不透明*/
  }
}
.theme-container {
  position absolute
  top 15px
  right 150px
  color #fff
  font-size 24px
  cursor pointer
  // background-image linear-gradient(red, blue)
}
.top-navbar /deep/ .screenfull {
  position: absolute;
  top: 20px;
  right: 100px;
}

  .rightItem0 {
    position: absolute;
    top: 40%;
    right: 200px;
    color: #fff;
  }
  .rightItem1 {
    position: absolute;
    top: 40%;
    right: 120px;
    color: #fff;
  }
.rightItem2 {
  position: absolute;
  top: 40%;
  right: 50px;
  color: #fff;
}
.avatar-container {
  position: absolute;
  width:200px;
  top: 15px;
  right: 40px;
  color: #fff;
  .avatar-wrapper {
    cursor: pointer;
    .user-avatar {
      margin-top 5px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .username-wrapper {
      display: inline-block;
      height: 50px;
      line-height: 50px;
    }
  }
}
</style>
