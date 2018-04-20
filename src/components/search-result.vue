<template>
  <div class="a-container">
    <header class="block-title">搜索结果</header>
    <div class="block-border">
      <ul class="search-list">
        <li
          v-for="item in queryLists"
          :key="item._id"
        >
          <router-link :to="`/article/${item._id}`">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <el-button class="backBtn" @click="back">返回</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'search-result',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'queryLists'
    ])
  },
  methods: {
    back () {
      this.$router.push({path: `/`})
    },
    showArticle (item) {
      this.$router.push({path: `/article/${item._id}`})
    }
  }
}
</script>

<style lang="stylus">
.search-list {
  margin 50px 30px
  li {
    list-style none
    a {
      text-decoration none
      &:link, &:visited, &:hover, &:active {
        cursor pointer
        color #4682B4
      }
    }
  }
}

.backBtn {
  margin-top 20px
}
</style>
