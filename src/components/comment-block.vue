<template>
  <div class="comment-block">
    <p class="block-title">Lastest Comments</p>
    <div class="block-border">
      <comment-item
        v-for="cItem in comments"
        :key="cItem.cName"
        :data="cItem"
      ></comment-item>
    </div>
  </div>
</template>

<script>
import commentItem from '@/components/comment-item.vue'

export default {
  name: 'comment-block',
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get('/api/comments')
        .then(({data}) => {
          this.comments = data
        })
    }
  },
  data () {
    return {
      comments: []
    }
  },
  components: {
    commentItem
  }
}
</script>

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

