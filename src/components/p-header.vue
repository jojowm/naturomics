<template>
  <div class="p-header">
    <!-- <el-button round class="sign-btn" @click="dialogVisible = true">登陆</el-button>
    <el-dialog
      title="登陆"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form :model="userForm" :rules="rules" ref="userForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="userForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="userForm.password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible =  false">取消</el-button>
        <el-button type="primary" @click="submit">确认</el-button>
      </span>
    </el-dialog> -->
    <router-link to="/article_create">
      <el-button
        round
        class="new-article"
      >新建文章</el-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'p-header',
    data () {
      return {
        // dialogVisible: false,
        // userForm: {
        //   username: '',
        //   password: ''
        // },
        // rules: {
        //   username: [
        //     { required: true, message: '请输入用户名', trigger: 'blur' },
        //     { min: 3, max: 10, message: '长度在3到10个字符', trigger: 'blur' }
        //   ],
        //   password: [
        //     { required: true, message: '请输入密码', trigger: 'blur' },
        //     { min: 5, message: '长度最少5个字符', trigger: 'blur' }
        //   ]
        // }
      }
    },
    methods: {
      // submit () {
      //   this.dialogVisible = false
      //   this.$refs.userForm.validate((valid) => {
      //     if (valid) {
      //       this.$http.post(`/api/v2/user/sign_in`, this.userForm)
      //       // alert('已提交!')
      //     } else {
      //       console.log('error submit')
      //       return false
      //     }
      //   })
      // }
    }
  }
</script>

<style lang="stylus">
  sky_blue =	#87CEFA

  .p-header {
    flex 0 0 auto
    width 100%
    height 50px
    background skyBlue
    // .sign-btn {
    //   position absolute
    //   top 5px
    //   left 50px
    //   &:hover {
    //     pointer cursor
    //   }
    // }
    .new-article {
      position absolute
      top 5px
      right 50px
      &:hover {
        pointer cursor
      }
    }
  }
</style>
