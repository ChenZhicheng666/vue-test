<template>
  <el-tabs type="border-card">
    <el-tab-pane label="组织信息">
      <el-row>
        <el-button type="danger" @click="enterprisedelAll">批量删除</el-button>
      </el-row>
      <el-table
        :data="tableData"
        :header-cell-style="{background:'#1ca291',color:'#ffffff'}"
        border
        highlight-current-row
        style="width: 100%;margin-top:20px;"
        ref="multipleTable" @selection-change="selsChange"
      >
        <el-table-column  type="selection" width="55"></el-table-column>
        <el-table-column  type="index" label="#" width="55"></el-table-column>
        <el-table-column v-for='item of tableHeader1' :prop="item" :label="item" :key='item.id'>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="状态"
          width="120">
          <template slot-scope="scope">
            <el-button type="danger"
                       @click="deleteAlert(scope.$index, tableData)"
            >移除</el-button>
          </template>
        </el-table-column>
<!--        <el-table-column label="状态" width="150"><el-tag type="success" icon="el-icon-check"><i class="el-icon-check" ></i>审核通过</el-tag></el-table-column>-->
      </el-table>
      <div class="pager">
        <el-pagination background
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-sizes="[5,10, 50, 100, 200]"
                       :page-size="pageSize"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="total">
        </el-pagination>
      </div>
    </el-tab-pane>
    <el-tab-pane label="组织开设">
      <el-form ref="form" :rules="rules" :model="form" label-width="150px">
        <el-form-item
          label="组织名称"
          prop="name">
          <el-input v-model.number="form.name" style="width:500px"></el-input>
        </el-form-item>
        <el-form-item
          label="统一社会信用代码"
          prop="creditCode"
        >
          <el-input style="width:500px" v-model.number="form.creditCode"></el-input>
        </el-form-item>
        <el-form-item
          prop="address"
          label="地址">
          <el-input style="width:500px" v-model.number="form.address"></el-input>
        </el-form-item>
        <el-form-item
          prop="industry"
          label="所属行业">
          <el-input style="width:500px" v-model.number="form.industry"></el-input>
        </el-form-item>
        <el-form-item
          prop="mainProduct"
          label="主要经营品种">
          <el-input style="width:500px" v-model.number="form.mainProduct"></el-input>
        </el-form-item>
        <el-form-item
          prop="owner"
          label="企业负责人">
          <el-select
            v-model="form.owner"
            filterable
            allow-create
            placeholder="请选择标签">
            <el-option
              v-for="item in userList"
              :key="item.userId"
              :label="item.username"
              :value="item.username">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          prop="validCertificate"
          label="企业有效证件">
          <el-upload
            action=""
            list-type="picture-card"
            :file-list="fileList"
            :on-preview="handlePictureCardPreview"
            :auto-upload="false"
            :on-remove="handleRemove"
            :on-change="show"
            :limit="1"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="logVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>

        <el-form-item>
          <el-button @click="initCompany">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="组织审核">
      <div>
        <el-row>
          <el-button @click="checkAll">批量审核</el-button>
        </el-row>
        <el-table
          :data="tableData1"
          :header-cell-style="{background:'#1ca291',color:'#ffffff'}"
          border
          highlight-current-row
          style="width: 100%;margin-top:20px;"
          ref="multipleTable" @selection-change="selsChange"
        >
          <el-table-column  type="selection" width="55"></el-table-column>
          <el-table-column  type="index" label="#" width="55"></el-table-column>
          <el-table-column v-for='item of tableHeader1' :prop="item" :label="item" :key='item.id'>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button
                @click="check(scope.$index, tableData1)"
                size="small">
                审核
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import axios from 'axios'
  import { limitCheckout,limitPush } from '@/api/limit'
  axios.defaults.withCredentials = true
  import Cookies from 'js-cookie'
  export default {

    data() {
      return {
        sels: [],//选中显示的值
        fileList:[],
        imgList:[],
        dialogImageUrl: '',
        logVisible: false,
        currentPage: 1,
        pageSize: 10,
        total:80,
        userList:[],
        imageUri:'',
        tableData: [],
        tableData1:[],
        tableHeader1: ['企业名称', '地址','所属行业','主要经营品种'],
        form: {},
        rules:{
          name:[
            { required: true, message: '输入不能为空'},
          ],
          creditCode: [
            { required: true, message: '输入不能为空'},
            { type: 'number', message: '输入必须为数字值'}
            //{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          owner:[
            { required: true, message: '输入不能为空'}
          ],
          validCertificate:[
            { required: true, message: '输入不能为空'}
          ]
        }
      }
    },
    mounted:function (){},
    methods: {
      selsChange(sels) {
        //被选中的行组成数组
        this.sels = sels;
      },
      enterprisedelAll() {

      },
      checkAll() {

      },
      deleteAlert(index,rows){

      },
      test(){
        // console.log(this.imgList)
      },
      show(file, fileList){


      },
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      handlePictureCardPreview(file) {

      },
      handleSizeChange(val) {
        this.pageSize = val;

      },
      handleCurrentChange(val) {

      },
      initCompany() {
      }
    }
  }
</script>
<style>
  .el-table{
    text-align: center;
  }
  .pager{
    display:flex;
    justify-content: center;
  }
</style>
