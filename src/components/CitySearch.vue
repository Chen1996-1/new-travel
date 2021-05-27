<template>
<div>
  <div class="search">
    <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
  <div class="search-content" ref="scroll" v-show="keywordIs">
    <ul>
      <li class="search-item border-bottom" v-for="item of indexList" :key="item.id" @click="handleClickSelectCity(item.name)">{{item.name}}</li>
      <li v-show="nocity">没找到</li>
    </ul>
  </div>
</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      indexList: [],
      keyword: '',
      timer: null
    }
  },
  methods: {
    handleClickSelectCity (city) {
      this.$store.commit('selectCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.indexList = result
      }, 10)
    }
  },
  computed: {
    nocity () {
      var nocity = false
      if (this.indexList.length) {
        console.log('noticy:', nocity)
        return nocity
      }
      nocity = true
      console.log('nocity:', nocity)
      return nocity
    },
    keywordIs () {
      var keywordIs = false
      console.log(this.keyword.length)
      if (this.keyword.length <= 0) {
        keywordIs = false
        console.log('keykordIs', keywordIs)
        return keywordIs
      }
      keywordIs = true
      console.log('keykordis', keywordIs)
      return keywordIs
    }
  },
  updated () {
    this.scroll.refresh()
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.scroll, {
      click: true
    })
  },
  activated () {
    this.keyword = ''
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height: 2.5rem
  padding: 0 .5rem
  background: $bgColor
  .search-input
    box-sizing: border-box
    width: 100%
    height: 2rem
    line-height: 2rem
    padding: 0 .5rem
    text-align: center
    border-radius: .3rem
    color: #667
.search-content
  z-index: 1
  overflow: hidden
  position: absolute
  top: 5rem
  left: 0
  right: 0
  bottom: 0
  background: #eee
  .search-item
    line-height: 1.5rem
    padding-left: .5rem
    background: #fff
    color: #666
</style>
