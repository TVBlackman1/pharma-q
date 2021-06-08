<template>
  <div class="slider">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(elem, ind) in imgSources.array" :key="ind">
        <img :src="elem" alt="not loaded">
      </swiper-slide>

      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

  </div>
</template>

<script>
import serverImageHandler from "@/mixins/serverImageHandler";

import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "SliderCurrent",
  data() {
    return {
      imgSources: {
        count: 4,
        array: [
          "http://95.79.208.251:25565/productsImages/kagocel-10tab.jpg",
          "http://95.79.208.251:25565/productsImages/kagocel-10tab-2.jpg",
          "http://95.79.208.251:25565/productsImages/kagocel-10tab-3.jpg",
          "http://95.79.208.251:25565/productsImages/kagocel-10tab-4.jpg"
        ]
      },
      selectedElement: null,
      swiperOption: {
        // direction: 'vertical',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        slidesPerGroup: 1,
        mousewheel: true,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
    }
  },
  methods: {
    async setCurrentImageFromSecondary(val) {
      console.log("!", val.style.borderColor)
      const url = await this._serverGetImageURL("http://95.79.208.251:25565/productsImages/kagocel-10tab-4.jpg")
      console.log(url)
      this.$refs.imgTest.src = url
    },
  },
  mixins: [serverImageHandler],
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
}
</script>

<style lang="scss" scoped>

.slider {
  height: 300px;
  width: 500px;
}

.swiper {
  height: 100%;
  width: 100%;

  &::v-deep .swiper-pagination-bullet-custom {
    $size: 8px;
    width: $size !important;
    height: $size !important;
    line-height: $size !important;
    text-align: center;
    color: black;
    opacity: 0.7;
    background: $qq-neutral;
    transition: all 0.15s;

    &:hover {
      opacity: 1;
      background-color: $qq-strong;
    }

    &.swiper-pagination-bullet-active {
      opacity: 1;
      color: #fff;
      background: $qq-neutral-active !important;
    }
  }
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  //overflow: hidden;
  width: 100%;
  height: 100%;

  & > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}

.swiper-button-prev {
  filter: $qq-neutral-filter;
  transition: 0.15s;

  &:hover {
    filter: $qq-neutral-active-filter;
  }
}

.swiper-button-next {
  filter: $qq-neutral-filter;
  transition: 0.15s;

  &:hover {
    filter: $qq-neutral-active-filter;
  }
}
</style>