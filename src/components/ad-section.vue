<template>
  <div class="_ads">
    <div class="_ad _1"></div>
    <div class="_ad _2"></div>
    <div class="_ad _3"></div>
    <div class="_ad _4"></div>
  </div>
</template>

<script>
export default {
  name: "ad-section"
}
</script>

<style scoped lang="scss">
._ads {
  height: 157px;
  width: 100%;
  background-color: #EEF1F1;
  margin: 50px 0;
  padding: 0 18%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & ._ad {
    width: 272px;
    height: 157px;
    background-position: center !important;
    background-size: 272px 157px !important;
    background-repeat: no-repeat !important;


    &._1 {
      background: url("~@/assets/images/ads/1.jpg");
    }

    &._2 {
      background: url("~@/assets/images/ads/2.png");
    }

    &._3 {
      background: url("~@/assets/images/ads/3.jpg");
    }

    &._4 {
      background: url("~@/assets/images/ads/4.jpg");
    }
  }
}
</style>