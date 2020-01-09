<template>
<div>
    <el-row >
      <el-button type="success" @click="test1">参考按钮1</el-button>
      <el-button type="primary" @click="test2">参考按钮2</el-button>
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
        width="120">
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
<!--  <el-row >-->
<!--    <el-button type="success" @click="dialogVisible = true">添加</el-button>-->
<!--    <el-upload-->
<!--      action=""-->
<!--      class="inline"-->
<!--      :multiple="false"-->
<!--      accept=".xlsx, .xls"-->
<!--      :on-change="handleFileChange"-->
<!--      :on-preview="handleFilePreview"-->
<!--      :auto-upload="false"-->
<!--    >-->
<!--      <el-button type="success">批量添加</el-button>-->
<!--    </el-upload>-->
<!--    <el-button @click="delAll" type="danger">批量删除</el-button>-->
<!--&lt;!&ndash;    <el-button @click="deleteFileOrDirectory(sels)" :disabled="this.sels.length === 0">批量删除</el-button>&ndash;&gt;-->
<!--  </el-row>-->
<!--  <el-table :data="tableData"-->
<!--            :header-cell-style="{background:'#1ca291',color:'#ffffff'}"-->
<!--            border highlight-current-row style="width: 100%;margin-top:20px;"-->
<!--            ref="multipleTable" @selection-change="selsChange"-->
<!--  >-->
<!--&lt;!&ndash;    <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;      width="55"&ndash;&gt;-->
<!--&lt;!&ndash;      fixed="left">&ndash;&gt;-->
<!--&lt;!&ndash;      <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;        <el-checkbox v-model="checked">备选项</el-checkbox>&ndash;&gt;-->
<!--&lt;!&ndash;      </template>&ndash;&gt;-->
<!--&lt;!&ndash;    </el-table-column>&ndash;&gt;-->
<!--    <el-table-column  type="selection" width="55"></el-table-column>-->

<!--    <el-table-column v-for='item of tableHeader' :prop="item" :label="item" :key='item.id'>-->
<!--    </el-table-column>-->
<!--    <el-table-column-->
<!--      fixed="right"-->
<!--      label="操作"-->
<!--      width="120">-->
<!--      <template slot-scope="scope">-->
<!--        <el-button-->
<!--          @click.native.prevent="deleteAlert(scope.$index, tableData)"-->
<!--          type="danger"-->
<!--          size="small">-->
<!--          移除-->
<!--        </el-button>-->
<!--      </template>-->
<!--    </el-table-column>-->
<!--  </el-table>-->
<!--  <el-dialog title="添加用户" :visible.sync="dialogVisible" width="30%">-->
<!--&lt;!&ndash;    <el-form ref="form" :model="form" label-width="80px">&ndash;&gt;-->
<!--&lt;!&ndash;      <el-form-item label="">&ndash;&gt;-->
<!--&lt;!&ndash;        <el-radio-group v-model="form.resource">&ndash;&gt;-->
<!--&lt;!&ndash;          <el-radio label="员工"></el-radio>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-radio label="经理"></el-radio>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-radio label="负责人"></el-radio>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-radio-group>&ndash;&gt;-->
<!--&lt;!&ndash;      </el-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;    </el-form>&ndash;&gt;-->
<!--    <el-form ref="form" :rules="rules" :model="form" label-width="50px">-->
<!--      <el-form-item label="姓名" prop="username">-->
<!--        <el-input style="width:230px" v-model="form.username"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="密码" prop="password">-->
<!--        <el-input style="width:230px" type="password" v-model="form.password"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="手机" prop="phonenum">-->
<!--        <el-input style="width:230px" v-model="form.phonenum"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item-->
<!--        label="类型"-->
<!--        prop="type"-->
<!--      >-->
<!--        <el-select-->
<!--          @change="setDisabled"-->
<!--          v-model="form.type"-->
<!--          filterable-->
<!--          allow-create-->
<!--          placeholder="请选择标签">-->
<!--          <el-option-->
<!--            v-for="item in typeList"-->
<!--            :key="item.type"-->
<!--            :label="item.label"-->
<!--            :value="item.type">-->
<!--          </el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--        <el-form-item-->
<!--          label="企业">-->
<!--          <el-select-->
<!--            :disabled="notType"-->
<!--            v-model="form.company"-->
<!--            filterable-->
<!--            allow-create-->
<!--            placeholder="请选择标签">-->
<!--            <el-option-->
<!--              v-for="item in companyList"-->
<!--              :key="item.enterpriseId"-->
<!--              :label="item.enterpriseName"-->
<!--              :value="item.enterpriseId">-->
<!--            </el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item-->
<!--          label=" 角色">-->
<!--          <el-select-->
<!--            v-model="form.role"-->
<!--            :disabled="notType"-->
<!--            clearable-->
<!--            filterable-->
<!--            allow-create-->
<!--            placeholder="请选择标签">-->
<!--            <el-option-->
<!--              v-for="item in positionList"-->
<!--              :key="item.positionId"-->
<!--              :label="item.label"-->
<!--              :value="item.positionId">-->
<!--            </el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--    </el-form>-->
<!--    <span slot="footer" class="dialog-footer">-->
<!--        <el-button @click="dialogVisible=false">取 消</el-button>-->
<!--        <el-button type="primary" @click="renderAddRow">确 定</el-button>-->
<!--      </span>-->
<!--  </el-dialog>-->
</div>
</template>
<style>
  .inline{
    display:inline-block;
  }
  .el-upload-list{
    display:none;
  }
</style>
<script>
  import Cookies from 'js-cookie'
  import axios from 'axios';
  axios.defaults.withCredentials = true
  import {limitCheckout} from '../../api/limit'
  import XLSX from 'xlsx'
  import crypto from 'crypto'
  export default {
    data() {
      const validatePhonenum = (rule, value, callback) => {
        if (value.length < 11) {
          callback(new Error('请输入正确的手机号码'))
        } else {
          callback()
        }
      }


      return {
        sels: [],//选中显示的值
        rules:{
          username:[
            { required: true, message: '输入不能为空'}
          ],
          password:[
            { required: true, message: '输入不能为空'}
          ],
          type:[
            { required: true, message: '输入不能为空'}
          ],
          phonenum: [
            { required: true, message: '输入不能为空'},
            { required: true, trigger: 'blur' ,validator: validatePhonenum},
            { required: true, trigger: 'change',validator: validatePhonenum }
            //{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        },
        notType:true,
        firstId0:[],
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
        test:false,
        selVisible: false,
        dialogVisible: false,
        form: {},
        tableData: [],
        tableHeader: ['姓名', '手机', '企业', '角色'],
          list:[
            {
              a:"aaa",
              b:"bbb",
              c:"bbb",
              d:"bbb"
            },
            {
              a:"222",
              b:"222",
              c:"222",
              d:"222"
            },
            {
              a:"333",
              b:"333",
              c:"333",
              d:"333"
            }
          ]
      }
    },
    mounted:function(){
      var Table=this.tableData;
      for(var i=0;i<this.list.length;i++){
        var newValue={
          姓名:this.list[i].a,
          手机:this.list[i].b,
          企业:this.list[i].c,
          角色:this.list[i].d,
        }
        this.tableData.push(newValue)
      }

      // axios.post('http://120.79.185.173:8080/agriculture/backend/user/usersGet.do',{pageSize:1000}).then(res => {
      //   console.log(res.data);
      //   for(var i=0;i<res.data.data.list.length;i++){
      //     if(res.data.data.list[i].relationships.length>0){
      //       for(var j=0;j<res.data.data.list[i].relationships.length;j++){
      //         var newValue={
      //           姓名:res.data.data.list[i].username,
      //           手机:res.data.data.list[i].phonenum,
      //           企业:res.data.data.list[i].relationships[j].enterpriseName,
      //           角色:res.data.data.list[i].relationships[j].position,
      //           userId:res.data.data.list[i].userId
      //         }
      //         this.tableData.push(newValue)
      //       }
      //     } else{
      //       var newValue={
      //         姓名:res.data.data.list[i].username,
      //         手机:res.data.data.list[i].phonenum,
      //         企业:'个人种植户',
      //         userId:res.data.data.list[i].userId
      //       }
      //       this.tableData.push(newValue)
      //     }
      //   }
      // }).catch(() => {
      //   console.log("error");
      // });
    },
    methods: {
      test1(){
        this.tableData=[];
        for(var i=0;i<this.list.length;i++){
            if(this.list[i].a==='222'){
              var newValue={
                姓名:this.list[i].a,
                手机:this.list[i].b,
                企业:this.list[i].c,
                角色:this.list[i].d
              }
              this.tableData.push(newValue);
          }
        }
      },
      test2(){
        this.tableData=[];
      }
    }
  }
</script>
