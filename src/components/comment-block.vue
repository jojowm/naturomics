<template>
  <div class="comment-block">
    <p class="block-title">Lastest Comments</p>
    <div class="block-border">
      <div class="comment-row" v-for="n in 10" :key="n">
        <span class="c-name">user {{n}}: </span>
        <span class="c-content">some text some text some text some text some text some text</span>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
  dark_grey = #808080
  .comment-block {
    width 65%
    margin 50px 0
    .comment-row {
      margin 5px 10px
      font-family 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-seri
      overflow hidden
      text-overflow ellipsis
      white-space pre
      .c-content {
        white-space nowrap
      }
      &:hover {
        cursor pointer
        color dark_grey
      }
    }
  }
</style>

