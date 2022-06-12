<template>
  <div class="page">
    <el-container>
      <el-header class="header">
        <div class="header_text"></div>
        <el-row justify="space-between">
          <el-col :span="2"><div class="grid-content bg-purple" /><h3>管理平台</h3></el-col>
          <el-col :span="2" @click="logout"><div class="grid-content bg-purple" /><el-button type="primary" :icon="ArrowLeft">退出登录</el-button></el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px" height="500px">
          <el-menu 
          :default-active="this.$route.path"
          router>
            <el-menu-item index="/admin/home"><el-icon><message /></el-icon>首页</el-menu-item>
            <el-menu-item index="/admin/data"><el-icon><message /></el-icon>基础数据</el-menu-item>
            <el-sub-menu index="3">
            <template #title>
              <el-icon><message /></el-icon>博文管理
            </template>
            <el-menu-item index="/admin/myblog">我的博文</el-menu-item>
            <el-menu-item index="/admin/add">添加博文</el-menu-item>
            <el-menu-item index="/admin/comments">评论管理</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/admin/feedback"><el-icon><message /></el-icon>错误收集</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
  methods: {
    logout: function () {
       const _this = this
      this.$confirm('确定退出码？', '提示', {
        //type: 'warning'
      }).then( () => {
        localStorage.removeItem('token')
        _this.$router.push('/admin/login')
      }).catch( () => {

      })
    }
  }
}
</script>




<style lang="less" scoped>
.page h3 {
  margin: 0px;
}
.page {
  position: absolute;
  width: 100%;
  .header {
    color: #ffffff;
    background-color: #409eff;
    height: 50px;
    .header_text {
      margin-top: 10px;
    }
  }
}

</style>