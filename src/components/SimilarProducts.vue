<template>
  <div class="similar-products">
    <div class="_title">
      Похожие товары({{ products.count }}):
    </div>
    <div class="slider">
      <a class="arrow arrow-left" @click="swiper.slidePrev()"></a>
      <swiper class="swiper" :options="swiperOption" ref="swiper">
        <swiper-slide v-for="(product, index) in products.array" :key="index" class="product">
          <div class="image">
            <img :src="product.image" alt="">
          </div>
          <div class="name"> {{ product.name }}</div>
        </swiper-slide>

        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      </swiper>
      <a class="arrow arrow-right" @click="swiper.slideNext()"></a>
    </div>
  </div>
</template>

<script>

import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "SimilarProducts",
  data() {
    return {
      products: {
        count: 8,
        array: [
          {
            name: "ОРВИС ИММУНО",
            image: "http://95.79.208.251:25565/productsImages/kagocel-10tab.jpg"
          },
          {
            name: "РИМАНТАДИН",
            image: "http://95.79.208.251:25565/productsImages/kagocel-10tab.jpg"
          },
          {
            name: "АРБИДОЛ",
            image: "http://95.79.208.251:25565/productsImages/kagocel-10tab.jpg"
          },
          {
            name: "ИНВАРИГИН",
            image: "http://95.79.208.251:25565/productsImages/kagocel-10tab.jpg"
          },
          {
            name: "АПРЕФЛЮ",
            image: "http://95.79.208.251:25565/productsImages/kagocel-10tab.jpg"
          }, {
            name: "ТАМИФЛЮ",
            image: "http://95.79.208.251:25565/productsImages/kagocel-10tab.jpg"
          },
          {
            name: "ЦИКЛОФЕРОН",
            image: "http://95.79.208.251:25565/productsImages/kagocel-10tab.jpg"
          },
          {
            name: "АФЛЮДОЛ",
            image: "http://95.79.208.251:25565/productsImages/kagocel-10tab.jpg"
          },
        ]
      },
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 0,
        slidesPerGroup: 1,
        mousewheel: true,
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.swiper.$swiper;
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
}
</script>

<style scoped lang="scss">
@import '~@/css/fonts.css';

.similar-products {
  & ._title {
    font-family: Montserrat-regular, serif;
    font-size: 24px;
  }

  & .slider {
    margin-top: 15px;
    width: 1112px;
    height: 184px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & .arrow {
      height: 66px;
      width: 66px;
      background-size: 66px 66px;
      filter: $qq-neutral-filter;
      transition: 0.15s;

      &:hover {
        cursor: pointer;
        filter: $qq-neutral-active-filter
      }
    }

    & .arrow-left {
      background-image: url("~@/assets/svg/navigate_before_black_24dp.svg");
    }

    & .arrow-right {
      background-image: url("~@/assets/svg/navigate_next_black_24dp.svg");
    }

    & .swiper {
      height: 100%;
      width: 100%;

      & .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 12px 0;
        box-sizing: content-box;

        &:hover {
          background-color: #eef1f2;
          cursor: pointer;
        }

        &.product {
          list-style: none;
          width: 166px;
          height: 158px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          & .image {
            //background-color: #7CA7AC;
            height: 130px;
            width: 130px;
            border-radius: 20px;
            border: 3px solid #C3EAFF;
            overflow: hidden;

            & img {
              object-fit: contain;
              width: 100%;
              height: 100%;
            }
          }

          & .name {
            font-family: Montserrat-medium, serif;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>