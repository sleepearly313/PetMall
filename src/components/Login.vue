<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单区 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRule" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user"/>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"/>
        </el-form-item>
        <!-- 按钮区 -->
        <el-form-item class="btn">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template> 

<script>
export default {
    data(){
        return{
            // 这是登录表单的数据绑定对象
            loginForm:{
                username:'',
                password:''
            },
            // 这是表单的验证规则对象
            loginFormRule:{
                // 验证用户名是否合法
                username:[
                    { required:true,message:"请输入登录名称",trigger:"blur"},
                    { min: 3,max: 10,message:"长度在3到10个单位字符",trigger:"blur"}
                ],
                password:[
                    { required:true,message:"请输入登录密码",trigger:"blur"},
                    { min: 6,max: 15,message:"长度在6到15个单位字符",trigger:"blur"}
                ]
            }
        }
    },
    methods:{
        //点击重置按钮，重置登陆表单
        resetLoginForm(){
            this.$refs.loginFormRef.resetFields()
        },
        login(){
            this.$refs.loginFormRef.validate(valid => {
                if(!valid) {
                    alert("输入格式错误")
                }
                
            })
        }
    }
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.btn{
    display:flex;
    justify-content: flex-end;
}

.login_form{
    position: absolute;
    bottom: 0;
    width:100%;
    padding:0 20px;
    box-sizing: border-box;
}

</style>
