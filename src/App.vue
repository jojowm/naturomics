<template>
  <div id="app">
    <p-header></p-header>
    <router-view
    />
    <p-footer></p-footer>
  </div>
</template>

<script>
import PHeader from '@/components/p-header'
import PFooter from '@/components/p-footer'

// import bus from './assets/eventHub'

export default {
  name: 'app',
  // created () {
  //   bus.$on('update-query-list', (data) => {
  //     this.queryList = data
  //   })
  // },
  // data () {
  //   return {
  //     queryList: []
  //   }
  // },
  components: {
    PHeader, PFooter
  }
}
</script>

<style lang="stylus">
  #app {
    display flex
    flex-direction column
  }
</style>
