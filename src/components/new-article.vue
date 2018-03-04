<template>
  <div class="a-container">
    <el-form ref="aForm" :model="aForm" label-width="50px">
      <el-form-item label="题目">
        <el-input v-model="aForm.title"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-tag
          v-for="(cItem, index) in aForm.class"
          :key="index"
          closable
          :disable-transitions="false"
          @close="handleClose(cItem)"
        >
          {{ cItem }}
        </el-tag>
        <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新分类</el-button>
      </el-form-item>
      <el-form-item>
        <el-input
          type="textarea"
          v-model="aForm.content"
          :rows="20"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="confirm-btn">
      <el-button type="primary" @click="submit">确认提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'new-article',
  data () {
    return {
      aForm: {
        title: '',
        class: [],
        content: ''
      },
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleClose (item) {
      this.aForm.class.splice(this.aForm.class.indexOf(item), 1)
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.aForm.class.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    submit () {
      this.$http.post('/api/v2/article/', this.aForm)
        // 用到的ajax库为  axios
        // axios 会把返回值包装在 一个对象的data属性中
        // ({data}) 是解构赋值
        .then(({data}) => {
          this.$router.push(`/article/${data._id}`)
        })
    }
  }
}
</script>

<style lang="stylus">
.a-container {
  margin-top 30px
  // .plus-btn {
  //   margin-left 5px
  // }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .confirm-btn {
    text-align right
    margin-bottom 10px
  }
}
</style>

