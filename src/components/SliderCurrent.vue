<template>
  <div class="slider">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>

      <!--      <div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--      <div class="swiper-button-next" slot="button-next"></div>-->
    </swiper>
    <!--    <div class="image image-handler" ref="mainImageHandler">-->
    <!--      -->
    <!--    </div>-->
    <!--    <img src="" alt="no image" ref="imgTest" class="image image-handler">-->

    <!--    <div class="other-images">-->
    <!--      <div class="image-handler arrow arrow-top"></div>-->
    <!--      <ul class="list-elems" ref="secondaryImages" @click="secondaryImagesHandleClick">-->
    <!--        <li class="image-handler list-elem" key="1">-->
    <!--          <img :src="image1_url" alt="" class="img-inner">-->
    <!--        </li>-->
    <!--        <li class="image-handler list-elem" key="2">-->
    <!--          <img :src="image2_url" alt="" class="img-inner">-->
    <!--        </li>-->
    <!--        <li class="image-handler list-elem" key="3">-->
    <!--          <img :src="image3_url" alt="" class="img-inner">-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--      <div class="image-handler arrow arrow-bottom"></div>-->
    <!--    </div>-->

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
      $secondaryImages: [],
      selectedElement: null,
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        mousewheel: true,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
    }
  },
  mounted() {
    this.$secondaryImages = this.$refs.secondaryImages.querySelectorAll(".list-elem");
    this.selectedElement = this.$secondaryImages[0].querySelector("img")
  },
  watch: {
    selectedElement: [
      'changeSecondaryStyle',
      'setCurrentImageFromSecondary'
    ]
  },
  methods: {
    onSwiper() {
      console.log("onSwipe")
    },
    onSlideChange() {
      console.log("onSwipeChange")
    },
    secondaryImagesHandleClick($event) {
      let target = $event.target
      if (target.tagName.toLowerCase() !== "img")
        return
      this.selectedElement = target
    },
    changeSecondaryStyle(val, oldVal) {
      val.parentElement.classList.toggle("picked")
      oldVal?.parentElement.classList.remove('picked')
    },
    async setCurrentImageFromSecondary(val) {
      console.log("!", val.style.borderColor)
      const url = await this._serverGetImageURL("http://95.79.208.251:25565/productsImages/kagocel-10tab-4.jpg")
      console.log(url)
      this.$refs.imgTest.src = url
      // this.$refs.mainImageHandler.style.backgroundImage = url
      // this.$refs.imgTest.src = val.src
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
  //height: fit-content;
  //display: flex;
  //flex-direction: row;
  //align-items: center;
  //text-align: center;
  height: 300px;
  width: 400px;
}

.swiper {
  height: 300px;
  width: 100%;

  &::v-deep .swiper-pagination-bullet-custom {
    $size: 20px;
    width: $size !important;
    height: $size !important;
    line-height: $size !important;
    text-align: center;
    color: #A6A9FF;
    opacity: 0.7;
    background: rgba(12, 14, 15, 0.2);
    transition: all 0.15s;

    &:hover {
      opacity: 1;
    }

    &.swiper-pagination-bullet-active {
      opacity: 1;
      color: #fff;
      background: #000000 !important;
    }
  }
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  //font-size: $font-size-huge * 2;
  //background-color: $white;
}

//.image-handler {
//  background-position: center;
//  background-size: contain;
//  background-repeat: no-repeat;
//}
//
//.image {
//  background-color: #FFFFFF;
//  height: 301px;
//  width: 400px;
//  //background-image: url("~@/assets/images/kagocel-10tab.jpg");
//  border-radius: 20px;
//  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
//  border: 3px solid #E2F9FC;
//}
//
//.other-images {
//  /*background-color: #ADE2FF;*/
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  margin-left: 20px;
//}
//
//.list-elems {
//  width: fit-content;
//  padding: 0;
//}
//
//.list-elem {
//  background-color: #FFFFFF;
//  height: 58px;
//  width: 58px;
//  list-style: none;
//  margin: 0.6em 0;
//  border-radius: 20px;
//  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
//  border: 3px solid #E2F9FC;
//  overflow: hidden;
//
//  & .img-inner {
//    width: 100%;
//    height: 100%;
//  }
//
//  &.picked {
//    border: 3px solid #7CA7AC;
//  }
//
//  &:hover {
//    cursor: pointer;
//  }
//}
//
//.arrow {
//  height: 30px;
//  width: 30px;
//  background-size: 30px 30px;
//
//  &:hover {
//    cursor: pointer;
//  }
//}
//
//.arrow-bottom {
//  background-image: url("~@/assets/svg/keyboard_arrow_down_black_24dp.svg");
//}
//
//.arrow-top {
//  background-image: url("~@/assets/svg/keyboard_arrow_up_black_24dp.svg");
//}

</style>