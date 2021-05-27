<template>
  <div class="alphabet-list">
    <ul class="list">
      <li
        class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleClickGetAlphabet(item)"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
      {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      var letters = []
      for (const i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs.A[0].offsetTop
  },
  methods: {
    handleClickGetAlphabet (key) {
      this.$emit('selectAlphabet', key)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (touch) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = touch.touches[0].clientY - 125
          const index = Math.floor((touchY - this.startY) / 19)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('selectAlphabet', this.letters[index])
          }
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  right: 0
  bottom:0
  top: 8rem
  width: 2rem
  .item
    line-height: 1.2rem
    text-align: center
    color: $bgColor
    font-size: .5rem
</style>
