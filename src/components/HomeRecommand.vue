<template>
  <div>
    <div class="recommend-block-title">热销推荐</div>
    <ul>
      <router-link class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/' + item.title">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info-wrapper">
          <p class="item-info-title">{{item.title}}</p>
          <p class="item-info-desc">{{item.desc}}</p>
          <button class="item-info-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand',
  props: {
    list: Array
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
 .recommend-block-title
    margin-top: 1rem
    line-height: 1.8rem
    background: #eee
    text-indent: 1rem
  .item
    display: flex
    height: 5rem
    .item-img
      width: 4rem
      height: 4rem
      padding:.5rem
    .item-info-wrapper
      flex: 1
      padding: .2rem
      min-width: 0
      .item-info-title
        line-height: 1.5rem
        ellipsis()
      .item-info-desc
        line-height: 1rem
        color: #ccc
        ellipsis()
      .item-info-button
        line-height: 1.2rem
        margin-top: .3rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .3rem
        collor: #fff

</style>
