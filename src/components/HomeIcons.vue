<template>
<swiper :options="swiperOptions">
  <swiper-slide v-for="(iconList,index) of pageProjects" :key="index">
  <div class="icons">
    <div class="icon" v-for="iconItem of iconList" :key="iconItem.id">
      <div class="icon-img">
        <img class="icon-img-img" :src="iconItem.imgUrl">
      </div>
      <div class="icon-content">
        {{ iconItem.desc}}
      </div>
    </div>
  </div>
  </swiper-slide>
</swiper>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  computed: {
    pageProjects () {
      const pageProjects = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pageProjects[page]) {
          pageProjects[page] = []
        }
        pageProjects[page].push(item)
      })
      return pageProjects
    }
  },
  data () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.icons >>> .swiper-container
.index-recommend
.icons
  overflow : hidden
  height:0
  padding-bottom:50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom:25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: 1rem

      .icon-img-img
        display: block
        margin: 0 auto
        height: 100%
    .icon-content
      position: absolute
      bottom: 0
      left:0
      right:0
      text-align: center
      ellipsis()

</style>
