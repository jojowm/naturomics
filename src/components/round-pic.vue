<template>
  <div class="round-user-pic">
    <img :src="data" alt="user pic">
  </div>
</template>

<script>
export default {
  name: 'round-pic',
  props: ['data']
}
</script>

<style lang="stylus">
.round-user-pic {
  width 48px
  height 48px
  display inline-block
  img {
    width 100%
    height 100%
    border 1px solid #ddd
    border-radius 50%
  }
}
</style>
