<template>
  <div class="container">
    <div class="article-wrap">
      <h1 class="title">{{ articleDetail.title }}</h1>
      <div class="author">
        <round-pic data="../../static/user-pic.jpeg"></round-pic>
        <div class="author-info">
          <span class="name">{{ articleDetail.authorName }}</span>
          <el-button round><i class="iconfont icon-plus"></i>关注</el-button>
          <div class="article-meta">
            <span class="m-block">{{ articleDetail.meta.time }}</span>
            <span class="m-block">字数 {{ articleDetail.meta.wordCount }}</span>
            <span class="m-block">阅读 {{ articleDetail.meta.reading }}</span>
            <span class="m-block">评论 {{ articleDetail.meta.comCount }}</span>
            <span class="m-block">喜欢 {{ articleDetail.meta.likes }}</span>
          </div>
        </div>
      </div>
      <div class="article-content">
      </div>
    </div>
  </div>
</template>

<script>
  import roundPic from '@/components/round-pic'

  export default {
    name: 'article',
    created () {
      this.fetchData()
    },
    data () {
      return {
        articleDetail: {}
      }
    },
    methods: {
      fetchData () {
        this.$http.get('/api/articleDetail')
          .then(({data}) => {
            for (const k in data) {
              this.$set(this.articleDetail, k, data[k])
            }
          })
      }
    },
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
      margin-top 20px
      font-family '-apple-system','SF UI Display','Arial','PingFang SC','Hiragino Sans GB','Microsoft YaHei','WenQuanYi Micro Hei','sans-serif'
      font-size 34px
      font-weight 700
      line-height 1.3
      color #333
    }
    .author {
      width 100%
      margin 30px 0 40px
      .round-user-pic {
        display inline-block
        vertical-align middle
      }
      .author-info {
        display inline-block
        vertical-align middle
        margin-left 8px
        .name {
          font-size 16px
          color #333
        }
        .el-button.is-round {
          padding 3px 7px 3px 5px
          font-size 12px
        }
        .article-meta {
          margin-top 5px
          font-size 12px
          color #969696
        }
      }
    }
    .article-content {

    }
  }
}
</style>
