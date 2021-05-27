<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-swiper">
            <div class="button">{{this.city}}</div>
          </div>
         </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-swiper" v-for="city of hot" :key="city.id">
            <div class="button" @click="handleClickCitySelect(city.name)">{{city.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" @click="handleClickCitySelect(city.name)" v-for="city of item" :key="city.id">{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    alphabet: String
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleClickCitySelect (city) {
      this.$store.commit('selectCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    alphabet () {
      if (this.alphabet) {
        const element = this.$refs[this.alphabet][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  updated () {
    this.scroll.refresh()
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
@improt '~styles/varibles.styl'
.border-bottom
  &:before
    border-color: #ccc
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.list
  width: 100%
  overflow: hidden
  position: absolute
  top: 5rem
  left: 0
  bottom: 0
  .title
    line-height: 1.5rem
    background: #eee
    padding-left: 1rem
    color: #666
  .button-list
    overflow: hidden
    padding: .5rem 4rem .5rem .5rem
    .button-swiper
      float: left
      width: 33.33%
      .button
        margin: .2rem
        padding: .3rem 0
        text-align: center
        border: .05rem solid #ccc
        border-radius: .3rem
  .item-list
    .item
      line-height: 1.5rem
      padding-left: 1rem
      color: #666
</style>
