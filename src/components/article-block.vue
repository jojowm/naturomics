<template>
  <div class="article-block">
    <p class="block-title">Article</p>
    <div class="block-border">
      <div class="article-row" v-for="n in 10" :key="n">
        <span>article {{n}}</span>
        <div>
          <span>评论（33）</span>
          <span>阅读量（101）</span>
          <span>分类：散文</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
  light_grey = #ccc
  dark_grey = #808080

.article-block {
  width 100%
  .article-row {
    display flex
    justify-content space-between
    align-items center
    margin 5px 10px
    font-family 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
    &:hover {
      cursor pointer
      color dark_grey
    }
  }
}
</style>

