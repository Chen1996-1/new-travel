<template>
  <div class="item-list">
    <div class="item border-bottom" v-for="item of list" :key="item.id">
      <span class="iconfont icon-item"></span>
      {{item.title}}
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.item
  line-height: 2rem
  padding: 0 2rem
</style>
