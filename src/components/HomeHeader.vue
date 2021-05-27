<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-back">&#xe601;</span>
    </div>
    <div class="header-center">

      <span class="iconfont icon-search">&#xe608;</span>
      输入城市/景点/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span>{{this.city}}</span>
        <span class="iconfont icon-downselect">&#xe611;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .header
    background:$bgColor
    display: flex
    height: $headerHeight
    line-height: $headerHeight

    .header-left
      margin-left: 1rem
      margin-right: 1.5rem
      .icon-back
        font-size: 1.3rem
    .header-center
      margin-right: 1rem
      background: #fff
      border-radius: .25rem
      margin-top: .15rem
      margin-bottom: .25rem
      padding-left: .8rem
      padding-right:3rem
      color: #ccc
    .header-right
      min-width: 2rem
      text-align: center
      color: #fff
      .icon-downselect
        font-size: .8rem
        padding-left: .2rem

</style>
