<template>
  <div class="article-block">
    <p class="block-title">Article</p>
    <div class="block-border">
      <article-item
        v-for="aItem in articles"
        :key="aItem.id"
        :data="aItem"
      ></article-item>
      <div class="btn-row">
        <button class="last-page" @click="lastPage">上一页</button>
        <span>{{ count }}/{{ totalPages }}</span>
        <button class="next-page" @click="nextPage">下一页</button>
      </div>
    </div>
  </div>
</template>

<script>
import articleItem from '@/components/article-item'

export default {
  name: 'article-block',
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get('/api/v2/article/list')
        .then(({data}) => {
          this.article = data.data
        })
    },
    lastPage () {
      if (this.count > 1) {
        this.count--
        this.start = this.start - 20
      }
    },
    nextPage () {
      if (this.count < this.totalPages) {
        this.start = this.count * 20
        this.count++
      }
    }
  },
  computed: {
    articles () {
      let tmp = JSON.parse(JSON.stringify(this.article))
      return tmp.slice(this.start, this.count * 20)
    },
    totalPages () {
      return Math.ceil(this.article.length / 20)
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
  },
  components: {
    articleItem
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
