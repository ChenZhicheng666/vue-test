<template>
  <div>
    <el-row>
      <el-button @click="openSel" >批量分配</el-button>
    </el-row>
    <el-table :data="tableData"
              :header-cell-style="{background:'#1ca291',color:'#ffffff'}"
              border highlight-current-row style="width: 100%;margin-top:20px;"
              ref="multipleTable" @selection-change="selsChange"
    >
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
        width="200">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteAlert(scope.$index, tableData)"
            type="danger"
            size="small">
            移除
          </el-button>
          <el-button size="small" @click="openForm(scope.$index, tableData)">分配角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="分配角色" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="">
          <el-radio-group v-model="form.resource">
            <el-radio label="员工" prop="0"></el-radio>
            <el-radio label="经理"></el-radio>
            <el-radio label="负责人"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="setPosition">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="分配角色" :visible.sync="dialogVisible1" width="30%">
      <el-form ref="form1" :model="form1" label-width="80px">
        <el-form-item label="">
          <el-radio-group v-model="form1.resource">
            <el-radio label="员工" prop="0"></el-radio>
            <el-radio label="经理"></el-radio>
            <el-radio label="负责人"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="setAll">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  import axios from 'axios';
  import {limitCheckout} from '../../api/limit'

  axios.defaults.withCredentials = true
  import XLSX from 'xlsx'
  import crypto from 'crypto'
  export default {
    data() {
      return {
        sels: [],//选中显示的值
        multipleSelection: [],
        dialogVisible: false,
        dialogVisible1: false,
        form: {},
        form1: {},
        companyList:[],
        positionList:[{positionId:0,label:'员工'},{positionId:1,label:'经理'},{positionId:2,label:'负责人'}],
        typeList:[
          {type:0,label:'管理部门'},
          {type:1,label:'消费者'},
          {type:2,label:'农户'},
          {type:3,label:'企业'},
          {type:4,label:'科研机构'},
          {type:5,label:'行业协会'},
          {type:6,label:'其他产业链'}
        ],
        tableData: [],
        tableHeader:['姓名', '手机', '企业', '角色'],
        idCard:'',
      }
    },
    mounted:function(){
      var Table=this.tableData;

    },
    methods:{
      selsChange(sels) {
        //被选中的行组成数组
        this.sels = sels;
      },
      openSel(){
        this.dialogVisible1 = true;
      }
    }
  }
</script>
