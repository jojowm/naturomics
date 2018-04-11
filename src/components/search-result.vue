<template>
  <div class="a-container">
    <header class="block-title">搜索结果</header>
    <div class="block-border">
      <ul class="search-list">
        <!-- <li v-for="item in results.data" :key="item._id">{{ item.title }}</li> -->
        <li>kkkk</li>
      </ul>
    </div>
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
  props: ['results']
}
</script>

<style lang="stylus">
.search-list {
  margin 50px 30px
  li {
    list-style none
  }
}
</style>
