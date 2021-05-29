<template>
<div class="product-page">
  <div class="main">
    <div class="pres">
      <div class="name">Кагоцел</div>
      <div class="rating">рейтинг</div>
    </div>
    <div></div>
    <div></div>

    <slider-current />
    <info-price />
    <how-to-take />
  </div>

  <similar-products />
</div>
</template>

<script>
import SliderCurrent from "@/components/SliderCurrent";
import InfoPrice from "@/components/InfoPrice";
import HowToTake from "@/components/HowToTake";
import SimilarProducts from "@/components/SimilarProducts";
export default {
  name: "ProductPage",
  components: {SimilarProducts, HowToTake, InfoPrice, SliderCurrent}
}
</script>

<style scoped lang="scss">
@import '~@/css/fonts.css';

.product-page {
  width: 90%;
  margin: 120px auto auto;

  & .main {
    display: grid;
    grid-template-columns: 586px 460px 1fr;
    grid-template-rows: 56px 400px;
    grid-column-gap: 10px;
    grid-row-gap: 20px;
    & div {
      //background-color: #A6A9FF;
    }
  }

  & .pres {
    border-bottom: 1px solid #000000;
    box-sizing: border-box;
    height: 55px;
    display: flex;
    justify-content: space-between;
    & .name {
      display: inline-block;
      font-family: Montserrat-regular, serif;
      font-size: 36px;
      padding: 0 0.2em;
    }
    & .rating {
      display: inline-flex;
      font-family: Montserrat-regular, serif;
      font-size: 18px;
      padding: 0 0.2em;
      align-items: center;
    }
  }
}
</style>