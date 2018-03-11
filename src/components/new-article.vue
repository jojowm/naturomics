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
  created () {
    if (this.$route.params.id) {
      this.id = this.$route.params.id
      this.fetchData()
    }
  },
  data () {
    return {
      aForm: {
        title: '',
        class: [],
        content: ''
      },
      inputVisible: false,
      inputValue: '',
      id: ''
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
      // 修改文章，提交到后台update地址; 新建文章，提交到／article地址
      let url = this.id ? `/api/v2/article/update/${this.id}` : '/api/v2/article/'
      this.$http.post(url, this.aForm)
        // 用到的ajax库为  axios
        // axios 会把返回值包装在 一个对象的data属性中
        // ({data}) 是解构赋值

        // 无论是新建还是修改文章，点击确认提交后，都跳转到详情页面
        .then((res) => {
        //  根据新建文章和修改文章后台返回值不同，用不同方式跳转同一页面
          this.$router.push(`/article/${res.data.data._id || this.id}`)
        })
    },
    fetchData () {
      this.$http.get(`/api/v2/article/${this.id}`)
        .then(({data}) => {
          this.$set(this.aForm, 'title', data.title)
          this.$set(this.aForm, 'class', data.class)
          this.$set(this.aForm, 'content', data.content)
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

