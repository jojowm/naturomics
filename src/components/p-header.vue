<template>
  <div class="p-header">
    <el-button round class="sign-btn" @click="dialogVisible = true">注册</el-button>
    <el-dialog
      title="注册"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
    <!-- <span>zheshiyiduanxinxi</span> -->
    <el-form :model="userForm" :rules="rules" ref="userForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="userForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userForm.password"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible =  false">取消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确认</el-button>
    </span>
    </el-dialog>
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
        dialogVisible: false,
        userForm: {
          name: '',
          password: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在3到10个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, message: '长度最少5个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleClose (done) {
        this.$confirm('确认关闭?')
          .then(_ => {
            done()
          })
          .catch(_ => {})
      }
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
    .sign-btn {
      position absolute
      top 5px
      left 50px
      &:hover {
        pointer cursor
      }
    }
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
