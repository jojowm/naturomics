<template>
  <div class="article-row">
    <router-link :to="`/article/${data._id}`">
    <!-- 第一步：把id加上
    第二部：因为这个aid实际上是v-for出来的，是个变量，所以这边要改成变量
           这个语法昨天说过的，就是字符串模版，或者叫做字符串拼接
           这个时候鼠标放上去，已经能看到目标URL变化了
    第三步：在定义路由的文件里做点手脚 -->
      {{ data.title }}
    </router-link>
    <!-- <span>{{ data.aTitle }}</span> -->
    <div>
      <span>评论（{{ data.meta ? data.meta.count.comment : 0 }}）</span>
      <span>阅读量（{{ data.meta ? data.meta.count.reading : 0 }}）</span>
      <span>分类：{{ data.class.join(',') }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-item',
  props: ['data']
}
</script>
