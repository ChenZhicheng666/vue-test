<template>
  <div style="height:680px;">
    <el-select
      v-model="value"
      placeholder="请输入关键词搜索">
    </el-select>
  <el-table
    :data="tableData"
    border
    style="width: 100%"

    :header-cell-style="{background:'#1ca291',color:'#ffffff'}">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="name"
      label="企业名称/个人种植户"
      width="185">
    </el-table-column>
    <el-table-column
      prop="拥有服务"
      label="拥有服务">
      <template slot-scope="scope">
        <el-tag

          :key="tag"

          v-for="tag in dynamicTags"

          closable

          :disable-transitions="false">

          {{tag}}

        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="185">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="dialogVisible = true">修改</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="del">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-dialog title="修改服务" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="30px">
        <el-form-item>
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
              <el-checkbox v-model="checked4" label="农产品进销存管理" border></el-checkbox>
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
  .el-tag + .el-tag {

    margin-left: 10px;

  }

  .button-new-tag {

    margin-left: 10px;

    height: 32px;

    line-height: 30px;

    padding-top: 0;

    padding-bottom: 0;

  }

  .input-new-tag {

    width: 90px;

    margin-left: 10px;

    vertical-align: bottom;

  }
</style>
<script>
  import axios from 'axios'
  axios.defaults.withCredentials = true
  export default {

    methods: {},
    mounted(){},
    data() {
      return {
        value:'',
        selVisible: false,
        dialogVisible: false,
        dynamicTags: ['农资档案子系统', '产品加工管理系统', '产品回溯系统','进销存管理系统'],
        form: {},
        tableData: [],
        checked1:false,
        checked2:false,
        checked3:false,
        checked4:false
      }
    }
  }
</script>
