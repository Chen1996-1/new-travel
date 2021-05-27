<template>
<div class="wrapper">
  <swiper :options="swiperOptions">
    <swiper-slide v-for="img of list" :key="img.id">
      <img class="img-swiper" :src="img.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwipter',
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination'
        // Some Swiper option/callback...
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    width:100%
    height:0
    padding-bottom:31.25%
  .img-swiper
    width: 100%

</style>
