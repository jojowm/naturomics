<template>
  <div class="comment-row">
    <span class="c-name">{{ data.cName }}: </span>
    <span class="c-content">{{ data.cComment }}</span>
  </div>
</template>

<script>
export default {
  name: 'comment-item',
  props: ['data']
}
</script>
