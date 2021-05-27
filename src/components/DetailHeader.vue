<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="absShow">
      <span class="iconfont icon-back">&#xe601;</span>
    </router-link>
    <div class="header-fixed" v-show="fixedShow" :style="opacityStyle">
      <router-link tag="div" to="/" class="fixed-back">
        <span class="iconfont icon-back">&#xe601;</span>
      </router-link>
      详情页面
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      absShow: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  computed: {
    fixedShow () {
      const fixedShow = !this.absShow
      return fixedShow
    }
  },
  methods: {
    handleScroll () {
      console.log('Detailscrolling')
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.absShow = false
      } else {
        this.absShow = true
      }
    }

  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }

}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position: absolute
  left: 1.2rem
  top: 1.2rem
  width: 2.6rem
  height: 2.6rem
  border-radius: 1.3rem
  background: red
  text-align: center
  line-height: 2.6rem
  .icon-back
    font-size: 1.3rem
    color: #fff
.header-fixed
  z-index: 2
  position: fixed
  top: 0
  left: 0
  right: 0
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  background: green
  .fixed-back
    position: absolute
    left: 1rem
    .icon-back
      color: #fff
      font-size: 1.2rem
</style>
