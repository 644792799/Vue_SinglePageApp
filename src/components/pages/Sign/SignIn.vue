<!-- 登陆 -->
<template>
	<div class="signin">
    <div class="favico"><i class="icon-steps"></i></div>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="40px" class="demo-ruleForm">
      <el-form-item label="用户" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <!-- <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm2.age"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form> 
  </div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    //props:['vistor'],
    methods: {
      submitForm(formName) {
        //console.log(this.vistor)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style type="text/css">
  .signin .el-card__header{
    background: #20A0FF;
  }
  .signin .el-form-item:last-child .el-form-item__content{
    margin-left: auto!important;
    text-align: center;
  }
  .signin{
    width: 300px;
    margin: 0 auto;
    padding: 22px 10px 0 10px;
    border-radius: 5px;
    background: #F9FAFB;
    position: relative;
    border: 1px solid #d4d9df;
  }
  .signin .favico{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: #ea7069;
    color: #fff;
    margin: -50px auto 10px auto;
    font-size: 40px;

    display:flex;
    justify-content:center;
    align-items:center;
  }
</style>