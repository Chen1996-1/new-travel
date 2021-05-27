<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont icon-back">&#xe601;</span>
      </div>
    </router-link>
    <div class="header-center">
      城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position: relative
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  background: $bgColor
  .header-center
    color: #fff
  .header-left
    position: absolute
    margin-left: 1rem
    .icon-back
      color: #fff
</style>
