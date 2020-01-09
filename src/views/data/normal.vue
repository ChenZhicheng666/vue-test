<template>
  <el-tabs type="border-card">
    <el-tab-pane label="农资">
      <div>
        <el-row >
          <el-button type="success" @click="dialogVisible0 = true">添加</el-button>
          <el-upload
            action=""
            class="inline"
            :multiple="false"
            accept=".xlsx, .xls"
            :on-change="handleFileChange"
            :on-preview="handleFilePreview"
            :auto-upload="false"
          >
            <el-button type="success">批量添加</el-button>
          </el-upload>
<!--          @click="deleteFileOrDirectory(sels)"-->
          <el-button type="danger" @click="getDataCount">批量删除</el-button>
        </el-row>
        <el-table @selection-change="selsChange" :data="tableData" :header-cell-style="{background:'#1ca291',color:'#ffffff'}" border highlight-current-row style="width: 100%;margin-top:20px;">
          <el-table-column  type="selection" width="55"></el-table-column>

          <el-table-column v-for="item in tableHeader" :prop="item" :label="item" :key='item.id'>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteAlert0(scope.$index, tableData)"
                type="danger"
                size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog title="添加农资" :visible.sync="dialogVisible0" width="30%">
          <el-form ref="form" :model="form">
            <el-form-item label="农资一类">
            <el-select
              v-model="form.first0"
              filterable
              allow-create
              placeholder="请选择标签">
              <el-option
                v-for="item in firstId0"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="农资二类">
              <el-select
                v-model="form.second0"
                filterable
                allow-create
                placeholder="请选择标签">
                <el-option
                  v-for="item in secondId0"
                  :key="item.id"
                  :label="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible0 = false">取 消</el-button>
        <el-button type="primary" @click="renderAddRow0">确 定</el-button>
      </span>
        </el-dialog>
        <div class="pager">
          <el-pagination background
                         @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage"
                         :page-sizes="[10, 50, 100, 200]"
                         :page-size="pageSize"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="length0">
          </el-pagination>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="农作物">
      <div>
        <el-row >
          <el-button type="success" @click="dialogVisible1 = true">添加</el-button>
          <el-upload
            action=""
            class="inline"
            :multiple="false"
            accept=".xlsx, .xls"
            :on-change="handleFileChange"
            :on-preview="handleFilePreview"
            :auto-upload="false"
          >
            <el-button type="success">批量添加</el-button>
          </el-upload>
          <!--          @click="deleteFileOrDirectory(sels)"-->
          <el-button type="danger"  :disabled="this.sels.length === 0">批量删除</el-button>
        </el-row>
        <el-table @selection-change="selsChange" :data="tableData1" :header-cell-style="{background:'#1ca291',color:'#ffffff'}" border highlight-current-row style="width: 100%;margin-top:20px;">
          <el-table-column  type="selection" width="55"></el-table-column>

          <el-table-column v-for='item of tableHeader1' :prop="item" :label="item" :key='item.id'>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteAlert1(scope.$index, tableData1)"
                type="danger"
                size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pager">
          <el-pagination background
                         @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage"
                         :page-sizes="[5,10, 50, 100, 200]"
                         :page-size="pageSize"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="length1">
          </el-pagination>
        </div>
        <el-dialog title="添加农作物" :visible.sync="dialogVisible1" width="30%">
          <el-form ref="form" :model="form">
            <el-form-item label="农作物一类">
              <el-select
                v-model="form.first1"
                filterable
                allow-create
                default-first-option
                placeholder="请选择标签">
                <el-option
                  v-for="item in firstId1"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="农作物二类">
              <el-select
                v-model="form.second1"
                filterable
                allow-create
                default-first-option
                placeholder="请选择标签">
                <el-option
                  v-for="item in secondId1"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="农作物三类">
              <el-select
                v-model="form.third1"
                filterable
                allow-create
                default-first-option
                placeholder="请选择标签">
                <el-option
                  v-for="item in thirdId1"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
            </el-form-item>

          </el-form>
          <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="renderAddRow1">确 定</el-button>
      </span>
        </el-dialog>
      </div>
    </el-tab-pane>
    <el-tab-pane label="农产品">
      <div>
        <el-row >
          <el-button type="success" @click="dialogVisible2 = true">添加</el-button>
          <el-upload
            action=""
            class="inline"
            :multiple="false"
            accept=".xlsx, .xls"
            :on-change="handleFileChange"
            :on-preview="handleFilePreview"
            :auto-upload="false"
          >
            <el-button type="success">批量添加</el-button>
          </el-upload>
          <!--          @click="deleteFileOrDirectory(sels)"-->
          <el-button type="danger"  :disabled="this.sels.length === 0">批量删除</el-button>
        </el-row>
        <el-table @selection-change="selsChange"
                  :data="tableData2"
                  :header-cell-style="{background:'#1ca291',color:'#ffffff'}"
                  border highlight-current-row style="width: 100%;margin-top:20px;">
          <el-table-column  type="selection" width="55"></el-table-column>

          <el-table-column v-for='item of tableHeader2' :prop="item" :label="item" :key='item.id'>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteAlert2(scope.$index, tableData2)"
                type="danger"
                size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog title="添加农产品" :visible.sync="dialogVisible2" width="30%">
          <el-form ref="form" :model="form">
            <el-form-item label="农产品一类">
              <el-select
                v-model="form.first2"
                filterable
                allow-create
                default-first-option
                placeholder="请选择标签">
                <el-option
                  v-for="item in firstId2"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="农产品二类">
              <el-select
                v-model="form.second2"
                filterable
                allow-create
                default-first-option
                placeholder="请选择标签">
                <el-option
                  v-for="item in secondId2"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="农产品三类">
              <el-select
                v-model="form.third2"
                filterable
                allow-create
                default-first-option
                placeholder="请选择标签">
                <el-option
                  v-for="item in thirdId2"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2=false">取 消</el-button>
        <el-button type="primary" @click="renderAddRow2">确 定</el-button>
      </span>
        </el-dialog>
      </div>
      <div class="pager">
        <el-pagination background
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-sizes="[5,10, 50, 100, 200]"
                       :page-size="pageSize"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="length2">
        </el-pagination>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<style>
  .inline{
    display:inline-block;
  }
  .el-upload-list{
    display:none;
  }
  .pager{
    display:flex;
    justify-content: center;
  }
</style>
<script>
  import axios from 'axios'
  import config from '@/api/config'
  axios.defaults.withCredentials = true
  import XLSX from 'xlsx'
  export default {
    data() {
      return {
        dialogVisible0: false,
        dialogVisible1: false,
        dialogVisible2: false,
        currentPage: 1,
        pageSize: 10,
        total:80,
        form: {},
        tableHeader: ['农资一类', '农资二类', '品名'],
        tableHeader1: ['农作物一类', '农作物二类','农作物三类', '品名'],
        tableHeader2: ['农产品一类', '农产品二类','农产品三类', '品名'],
        sels: []//选中的值显示
      }
    },
    mounted:function () {

    },
    methods: {
      //获取农资分页长度
      getDataCount(){

      },
      handleSizeChange(val){
        this.pageSize = val;
        // console.log(`每页 ${val} 条`);
        //农资获取，渲染表格

      },
      handleCurrentChange(val){

      },
      selsChange(sels) {


      },

      deleteFileOrDirectory() {

      },
      /**渲染到列表中**/
      renderAddRow0() {
      }
    }
  }
</script>
