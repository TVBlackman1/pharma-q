<template>
<div class="product-page">
  <div class="container">
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
  <ad-section />
  <div class="container">
    <product-page-tabs />
  </div>
</div>
</template>

<script>
import SliderCurrent from "@/components/SliderCurrent";
import InfoPrice from "@/components/InfoPrice";
import HowToTake from "@/components/HowToTake";
import SimilarProducts from "@/components/SimilarProducts";
import AdSection from "@/components/ad-section";
import ProductPageTabs from "@/components/ProductPageTabs";
export default {
  name: "ProductPage",
  components: {ProductPageTabs, AdSection, SimilarProducts, HowToTake, InfoPrice, SliderCurrent}
}
</script>

<style scoped lang="scss">
@import '~@/css/fonts.css';

.v-stepper__wrapper {
  transition:none !important;
}

.product-page {
  margin: 120px auto auto;

  & .container {
    width: 90%;
    margin: 0 auto;
  }

  & .main {
    display: grid;
    grid-template-columns: 586px 460px 1fr;
    grid-template-rows: 56px minmax(auto, max-content);
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

  & ._tabs {
    $tabs-bar-background-color: black;
    & ._tab {
      $tab-font-size: 30px;
    }
  }
}

</style>