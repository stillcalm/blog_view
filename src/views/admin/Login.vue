<template>
  <div class="login_container">
      <el-form :model="ruleForm2" :rules="rules2"
        status-icon
        ref="ruleForm2" 
        label-position="left" 
        label-width="0px" 
        class="demo-ruleForm login-page">
          <h3 class="title">登录平台</h3>
          <el-form-item prop="username">
              <el-input type="text" 
                  v-model="name" 
                  auto-complete="off" 
                  placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
              <el-input type="password" 
                  v-model="password" 
                  auto-complete="off" 
                  placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item style="width:100%;">
              <el-button type="primary" style="width:100%;" @click="login" :loading="logining">登录</el-button>
          </el-form-item>
          <el-form-item class="bt" >
              <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
              <el-button type="text" @click="forgetpassword">忘记密码</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>


<script>
export default {
  name: 'Login',
  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      this.axios.post('http://localhost:3000/api/admin/login', {'name': this.name, 'password': this.password})
      .then((response) => {
        if( response.data.status == 1 ) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user_name', response.data.user_name);
          this.$router.push('/admin')
        } else {
          alert(response.data.msg)
        }
      })
      .catch((reject) => {
      console.log(reject)
    })
    }
  }
}
</script>


<style scoped>
.login_container{
  width: 300px;
  height: 500px;
  margin: 200px auto;
}
.bt{
  display: inline;
}
label.el-checkbox.rememberme {
    margin: 0px 15px 2px 8px;
    text-align: left;
}
</style>
