<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" class="login_box">
      <h3 class="login_title">欢迎登录！</h3>
      <el-form-item label="账号" prop="name">
        <el-input
          v-model="form.name"
          type="text"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
        rules: {
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
    }
    }
  },
  methods: {
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // this.$router.push('/main/'+this.form.name)
            this.$router.push({name:'Main',params:{name:this.form.name}})
          } else {
          this.$message({
          message: '用户名或密码错误！！！！',
          type: 'warning'
        });
            return false;
          }
        });
      },
  },
};
</script>

<style  scoped>
.login_box {
  width: 350px;
  margin: 150px auto;
  border-radius: 5px;
  border: 1px solid #dcdfe6;
  padding: 20px;
  box-shadow: 0 0 50px #e6a23c;
}

.login_title {
  text-align: center;
}
</style>