<template>
  <div class="article-block">
    <p class="block-title">Article</p>
    <div class="block-border">
      <div class="article-row" v-for="aItem in articles" :key="aItem._id">
        <router-link :to="`/article/${aItem._id}`">
        <!-- 第一步：把id加上
        第二部：因为这个aid实际上是v-for出来的，是个变量，所以这边要改成变量
               这个语法昨天说过的，就是字符串模版，或者叫做字符串拼接
               这个时候鼠标放上去，已经能看到目标URL变化了
        第三步：在定义路由的文件里做点手脚 -->
          {{ aItem.title }}
        </router-link>
        <!-- <span>{{ aItem.aTitle }}</span> -->
        <div>
          <span>评论（{{ aItem.meta ? aItem.meta.count.comment : 0 }}）</span>
          <span>阅读量（{{ aItem.meta ? aItem.meta.count.reading : 0 }}）</span>
          <span>分类：{{ aItem.class.join(',') }}</span>
        </div>
      </div>
      <div class="btn-row">
        <button class="last-page" @click="lastPage">上一页</button>
        <span>{{ count }}/{{ totalPages }}</span>
        <button class="next-page" @click="nextPage">下一页</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-block',
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get('/api/v2/article/list')
        .then(({data}) => {
          this.article = data
        })
    },
    lastPage () {
      this.count--
      this.start = this.start - 10
    },
    nextPage () {
      this.start = this.count * 10
      this.count++
    }
  },
  computed: {
    articles () {
      let tmp = JSON.parse(JSON.stringify(this.article))
      return tmp.slice(this.start, this.count * 10)
    },
    totalPages () {
      return this.article.length
    }
    // currentPage () {
    //   return
    // }
  },
  data () {
    return {
      count: 1,
      start: 0,
      article: []
    }
  }
}
</script>

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
  .btn-row {
    display flex
    justify-content flex-end
    align-items center
    margin 2px 10px
    button {
      line-height: 1.5rem
      padding: 0 5px
      margin: 5px
      font-size: 0.8rem
      font-family 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
      appearance: none
      border 1px solid light_grey
      border-radius 10px
    }
  }
}
</style>
