<template>
  <div class="similar-products">
    <div class="_title">
      Похожие товары:
    </div>
    <div class="slider">
      <div class="image-handler arrow arrow-left"></div>
      <ul class="elems">
        <li class="image-handler product"></li>
        <li class="image-handler product"></li>
        <li class="image-handler product"></li>
        <li class="image-handler product"></li>
        <li class="image-handler product"></li>
        <li class="image-handler product"></li>
      </ul>
      <div class="image-handler arrow arrow-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimilarProducts"
}
</script>

<style scoped lang="scss">
.similar-products {
  & ._title {
    font-family: Montserrat-regular, serif;
    font-size: 24px;
  }

  & .slider {
    margin-top: 15px;
    width: 1200px;
    height: 160px;
    background-color: #A6A9FF;

    //height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;

    & .elems {
      padding: 2em;
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;

      & .product {
        list-style: none;
        width: 166px;
        height: 158px;
        background-color: #ADE2FF;
      }
    }
  }
}
</style>