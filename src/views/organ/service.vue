<template>
  <div>
    <el-row>
      <el-button @click="dialogVisible = true">修改服务</el-button>
      <el-button @click="dialogVisible = true">批量修改</el-button>
    </el-row>
    <el-table :data="tableData"
              :header-cell-style="{background:'#1ca291',color:'#ffffff'}"
              border highlight-current-row style="width: 100%;margin-top:20px;">
      <!--    <el-table-column-->
      <!--      width="55"-->
      <!--      fixed="left">-->
      <!--      <template slot-scope="scope">-->
      <!--        <el-checkbox v-model="checked">备选项</el-checkbox>-->
      <!--      </template>-->
      <!--    </el-table-column>-->
      <el-table-column  type="selection" width="55"></el-table-column>

      <el-table-column v-for='item of tableHeader' :prop="item" :label="item" :key='item.id'>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click="dialogVisible=true"
            size="small">
            修改服务
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改服务" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="30px">
        <el-form-item >
          <div id="box">
            <div>
              <el-checkbox v-model="checked1" label="农资档案" border></el-checkbox>
            </div>
            <div>
              <el-checkbox v-model="checked2" label="农产品生产加工日志管理" border></el-checkbox>
            </div>
            <div>
              <el-checkbox v-model="checked3" label="农产品回溯" border></el-checkbox>
            </div>
            <div>
              <el-checkbox v-model="checked4" label="进销存管理系统" border></el-checkbox>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style>
  #box{
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:space-between;
    align-items:center;
  }
  #box div{
    margin-top: 10px;
  }
</style>
<script>
  import Cookies from 'js-cookie'
  import {limitCheckout} from '../../api/limit'
  import axios from 'axios'
  axios.defaults.withCredentials = true
  export default {
    data() {
      return {
        selVisible: false,
        dialogVisible: false,
        form: {},
        tableData: [],
        tableHeader: ['姓名', '手机', '企业', '角色','拥有服务'],
        checked1:false,
        checked2:false,
        checked3:false,
        checked4:false
      }
    },
    methods: {
      open() {
        this.$alert('<strong>这是修改服务窗口</strong>', '修改服务', {
          dangerouslyUseHTMLString: true
        })
      }
    },

    mounted:function(){}
  }
</script>
