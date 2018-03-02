<template>
  <div class="p-header">
    <router-link to="/article/create">
    <el-button
      round
      class="new-article"
    >新建文章</el-button>
    </router-link>
      <!-- @click="newArticle" -->
  </div>
</template>

<script>
  export default {
    name: 'p-header',
    methods: {
      newArticle () {
        console.log(111)
        this.$router.push({path: '/article/new'})
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
