<template>
  <div class="similar-products">
    <div class="_title">
      Похожие товары:
    </div>
    <div class="slider">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(product, index) in products" :key="index" class="product">
          <div class="image">
            <img :src="product.image" alt="">
          </div>
          <div class="name"> {{ product.name }}</div>
        </swiper-slide>

        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
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
      products: [
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
          name: "АФЛЮДОЛ",
          image: "http://95.79.208.251:25565/productsImages/kagocel-10tab.jpg"
        },
        {
          name: "ЦИКЛОФЕРОН",
          image: "http://95.79.208.251:25565/productsImages/kagocel-10tab.jpg"
        },
        {
          name: "КАГОЦЕЛ",
          image: "http://95.79.208.251:25565/productsImages/kagocel-10tab.jpg"
        },
      ],
      swiperOption: {
        // direction: 'vertical',
        slidesPerView: 5,
        // centeredSlides: true,
        spaceBetween: 0,
        slidesPerGroup: 1,
        mousewheel: true,
        // loop: true,
        // loopFillGroupWithBlank: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        //   renderBullet(index, className) {
        //     return `<span class="${className} swiper-pagination-bullet-custom"></span>`
        //   }
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
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
    width: 1092px;
    height: 160px;

    & .swiper {
      height: 100%;
      width: 100%;
      padding: 0 20px;

      & .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

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