<template>
 <div>
   <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
   <detail-header></detail-header>
   <detail-list :list="categoryList"></detail-list>
   <div class="test-height"></div>
 </div>
</template>

<script>
import DetailBanner from './DetailBanner.vue'
import DetailHeader from './DetailHeader.vue'
import DetailList from './DetailList.vue'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      categoryList: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: []
    }
  },
  methods: {
    getDetailData () {
      axios.get('/api/detail.json', {
        params: {
          name: this.$route.params.title
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      const data = res.data.data
      if (res.data.ret && data) {
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailData()
  }
}
</script>

<style lang="stylus" scoped>
.test-height
  height: 1000rem

</style>
