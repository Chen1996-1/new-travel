<template>
  <div>
    <div class="weekend-block-title">周末去哪玩</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info-wrapper">
          <p class="item-info-title">{{item.title}}</p>
          <p class="item-info-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
 .weekend-block-title
    line-height: 1.8rem
    background: #eee
    text-indent: 1rem
  .item-info-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 4rem
    .item-img
      width:100%
    .item-info-title
      line-height: 1.5rem
      ellipsis()
    .item-info-desc
      line-height: 1rem
      color: #ccc
      ellipsis()
</style>
