<template>
  <div class="articlesDraft-container">
    <!-- <div class="dashboard-text">name: {{ name }}</div> -->
    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 16}" :lg="{span: 16}" :xl="{span: 16}" style="padding-right:8px;margin-bottom:30px;">
        <article-edit style="height:75vh;"/>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 8}" :lg="{span: 8}" :xl="{span: 8}" style="margin-bottom:30px;">
          <right-up/>
      </el-col>
    </el-row>
    
    <div class="btn-row">
      <el-button type="primary">提交</el-button>
    </div>

    
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import articleEdit from '@/components/MarkDowm/index'
import rightUp from './components/rightUp'

export default {
  name: 'artsWrite',
  components:{
    articleEdit,
    rightUp
  },
  computed: {
    // ...mapGetters([
    //   'name'
    // ])
  }
}
</script>

<style lang="scss" scoped>
.articlesDraft-container{
  margin: 30px;
}
.btn-row{
  display: flex;
  width: 100%;
  justify-content: center;
}
// .dashboard {
//   &-container {
//     margin: 30px;
//   }
//   &-text {
//     font-size: 30px;
//     line-height: 46px;
//   }
// }
</style>