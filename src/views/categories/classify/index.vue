<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="add">
        新增
      </el-button>
    </div> 

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="220">
        <template slot-scope="scope">
          <span>{{ scope.row._id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="160" align="center" label="创建日期">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | parseTime('{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="名称">
        <template slot-scope="{row}">
          <span>
            {{ row.name }}
          </span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="240">
        <template slot-scope="{row}">      
          <el-button type="primary" size="small" icon="el-icon-edit" @click="edit(row)">
            编辑
          </el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete" @click="deletes(row._id)">
             删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>


    <el-dialog :title="dialogStatus==='create'?'新增':'编辑'" :visible.sync="showaDialog">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="70px" style="width: 50%;">
        <el-form-item label="类名" prop="name">
          <el-input v-model="temp.name" placeholder="请输入类名" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取消
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          {{dialogStatus==='create'?'确定':'更新'}}
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { articleCate,articleCateAdd,articleCateUpdate,articleCateDelete } from '@/api/article'
// import json from './list.js'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'classify',
  components: { Pagination },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        pageSize: 10,
        limit:10
      },
      temp:{
        name:''
      },
      rules: {
        name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
      },
      showaDialog:false,
      dialogStatus:'create',
      editId:''
    }
  },
  created() {
    this.getList();
  },
  inject:['reload'],
  methods: {
    add(){
      this.showaDialog = true; 
      this.dialogStatus = 'create';
      this.temp.name = '';
      this.editId = '';
    },
    edit(row){
      this.showaDialog = true; 
      this.dialogStatus = 'edit';
      this.editId = row._id;
      this.temp.name = row.name;
    },
    createData(){
      const _this = this;
      articleCateAdd({name:this.temp.name}).then(res=>{
        this.showaDialog = false;
        _this.reload();
      }).catch(err=>{
        this.showaDialog = false;
      })
    },  
    updateData(){
      articleCateUpdate({_id:this.editId,name:this.temp.name}).then(res=>{
        this.showaDialog = false; 
        this.reload();
      }).catch(err=>{
        this.showaDialog = false; 
      })
    },
    deletes(id){
      articleCateDelete({_id:id}).then(res=>{
        console.log(res);
        this.reload();
      })
    },
    getList() {
      this.listLoading = true
      articleCate().then(res => {
        this.list = res.data;
        this.total = 1;
        this.listLoading = false;
      })
      // this.list = json.data.list;
      
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-container {
    padding-bottom: 10px;
}

.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}


</style>
