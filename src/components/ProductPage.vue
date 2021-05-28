<template>
<div class="product-page">
  <div class="main">
    <div class="pres">Кагоцел</div>
    <div></div>
    <div></div>

    <div class="slider"></div>
    <div class="info-price"></div>
    <div class="how-to-take"></div>
  </div>
</div>
</template>

<script>
export default {
  name: "ProductPage"
}
</script>

<style scoped lang="scss">
.product-page {
  width: 90%;
  margin: 100px auto auto;

  & .main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px 300px;
    grid-column-gap: 10px;
    grid-row-gap: 1px;
    & div {
      background-color: #A6A9FF;
    }
  }

}
</style>