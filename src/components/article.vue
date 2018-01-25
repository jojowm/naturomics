<template>
  <div class="container">
    <div class="article-wrap">
      <h1 class="title">懂太多道理，就是过不好这一生——读《认知突围》</h1>
      <div class="author">
        <round-pic data="../../static/user-pic.jpeg"></round-pic>
        <span class="name">Someone</span>
      </div>
      <div class="article-content"></div>
    </div>
  </div>
</template>

<script>
  import roundPic from '@/components/round-pic'

  export default {
    name: 'article',
    components: {
      roundPic
    }
  }
</script>

<style lang="stylus">
.container {
  flex 1 0 auto
  display flex
  justify-content space-between
  width 620px
  margin 0 auto
  .article-wrap {
    width 100%
    padding-top 20px
    .title {
      width 100%
      font-family '-apple-system','SF UI Display','Arial','PingFang SC','Hiragino Sans GB','Microsoft YaHei','WenQuanYi Micro Hei','sans-serif'
      font-size 34px
      font-weight 700
      line-height 1.3
      color #333
    }
    .author {
      width 100%
      margin 30px 0
    }
  }
}
</style>
