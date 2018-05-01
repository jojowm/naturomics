<template>
  <div class="container">
    <div class="wid-70">
      <article-block></article-block>
      <!-- <div class="interaction-block">
        <fan-block></fan-block>
        <comment-block></comment-block>
      </div> -->
    </div>
    <sidebar></sidebar>
  </div>
</template>

<script>
  import sidebar from '@/components/sidebar'
  import articleBlock from '@/components/article-block'
  // import fanBlock from '@/components/fan-block'
  // import commentBlock from '@/components/comment-block'

  export default {
    name: 'index',
    components: {
      sidebar, articleBlock
    }
    // components: {
    //   sidebar, articleBlock, fanBlock, commentBlock
    // }
  }
</script>

<style lang="stylus">
  light_grey =#e8e8e8

  .container {
    flex 1 0 auto
    display flex
    justify-content space-between
    width 960px
    margin 0 auto
    .wid-70 {
      width 70%
      // .interaction-block {
      //   display flex
      //   justify-content space-between
      // }
    }
  }
</style>

