<template>
  <div class="fan-block">
    <p class="block-title">Fans</p>
    <div class="block-border">
      <div class="fan-item" v-for="fItem in fans" :key="fItem.fName">
        <div class="fan-pic">
          <img src="../../static/user-pic.jpeg" alt="user-pic">
        </div>
        <span>{{ fItem.fName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fan-block',
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get('/api/fans')
        .then(({data}) => {
          this.fans = data
        })
    }
  },
  data () {
    return {
      fans: []
    }
  }
}
</script>

<style lang="stylus">
  dark_grey = #808080
  .fan-block{
    width 30%
    margin 50px 0
    .fan-item {
      display inline-block
      width 50px
      height 50px
      margin 8px
      text-align center
      font-family 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
      .fan-pic {
        width 100%
        height 100%
        img {
          width 100%
          height 100%
          border-radius 10px
        }
        &:hover {
          cursor pointer
        }
      }
      span {
        font-size 0.5rem
        &:hover {
          cursor pointer
          color dark_grey
        }
      }
    }
  }
</style>
