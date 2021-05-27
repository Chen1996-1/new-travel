<template>
  <div>
    <div class="banner" @click="handleClickGallaryImgs">
      <img class="banner-img" :src="bannerImg"/>
      <div class="banner-info">
        <div class="info-title">
          {{sightName}}
        </div>
        <div class="info-counts">
          <span class="iconfont icon-img">&#xe6df;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <common-fade>
      <common-gallary :list="gallaryImgs" v-show="showGallary" @handleClickBackBanner="handleClickBackBanner"></common-gallary>
    </common-fade>
  </div>
</template>

<script>
import CommonFade from './CommonFade.vue'
import CommonGallary from './CommonGallary.vue'
export default {
  name: 'DetailBanner',
  components: { CommonGallary, CommonFade },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleClickGallaryImgs () {
      this.showGallary = true
    },
    handleClickBackBanner () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: 1.5rem
    line-height: 1.5rem
    background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
    color: #fff
    .info-title
      flex: 1
      padding-left: 1rem
    .info-counts
      padding: .5rem
      height: .8rem
      line-height: .8rem
      border-radius: .2rem
      background: rgba(0,0,0,.2)
      .icon-img
        color: #fff
        font: .8rem
</style>
