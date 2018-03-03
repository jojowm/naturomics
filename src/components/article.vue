<template>
  <div class="a-container">
    <div class="article-wrap">
      <h1 class="title">{{ articleDetail.title }}</h1>
      <div class="author">
        <round-pic data="../../static/user-pic.jpeg"></round-pic>
        <div class="author-info">
          <span class="name">{{ articleDetail.author }}</span>
          <el-button round><i class="iconfont icon-plus"></i>关注</el-button>
          <div class="article-meta">
            <span class="m-block">{{ articleDetail.meta ? articleDetail.meta.time : 0 }}</span>
            <span class="m-block">字数 {{ articleDetail.meta ? articleDetail.meta.count.word : 0 }}</span>
            <span class="m-block">阅读 {{ articleDetail.meta ? articleDetail.meta.count.reading : 0 }}</span>
            <span class="m-block">评论 {{ articleDetail.meta ? articleDetail.meta.count.comment : 0 }}</span>
            <span class="m-block">喜欢 {{ articleDetail.meta ? articleDetail.meta.count.likes : 0 }}</span>
          </div>
        </div>
        <el-dropdown trigger="click" @command="handleCommand">
          <i class="el-icon-setting"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="edit">编辑</el-dropdown-item>
                <el-dropdown-item command="delete">删除</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="article-content">{{ articleDetail.content }}</div>
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
        id: this.$route.params.id,
        articleDetail: {}
      }
    },
    methods: {
      fetchData () {
        this.$http.get(`/api/v2/article/${this.id}`)
          .then(({data}) => {
            for (const k in data) {
              this.$set(this.articleDetail, k, data[k])
            }
          })
      },
      handleCommand (command) {
        // 点击删除按钮后的弹框
        if (command === 'delete') {
          this.$confirm(
            '此操作将永久删除该文件, 是否继续?',
            '提示',
            {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }
          ).then(() => {
            // ajax ==> delete
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
        }
      }
    },
    components: {
      roundPic
    }
  }
</script>

<style lang="stylus">
.a-container {
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
      .el-dropdown {
        font-size 16px
        float right
        top: 28px;
        right: 5px;
      }
    }
    .article-content {

    }
  }
}
</style>
