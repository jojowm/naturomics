<template>
  <div class="a-container">
    <el-form ref="aForm" :model="aForm" label-width="50px">
      <el-form-item label="题目">
        <el-input v-model="aForm.title"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-input v-model="aForm.class"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="textarea" v-model="aForm.content"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'new-article',
  data () {
    return {
      aForm: {
        title: '',
        class: '',
        content: ''
      }
    }
  }
}
</script>

<style lang="stylus">
.a-container {

}
</style>

