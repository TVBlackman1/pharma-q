<template>
  <div class="similar-products">
    <div class="_title">
      Похожие товары:
    </div>
    <div class="slider">
      <div class="image-handler arrow arrow-left"></div>
      <ul class="elems">
        <li class="image-handler product">
          <div class="image"></div>
          <div class="name">ОРВИС ИММУНО</div>
        </li>
        <li class="image-handler product">
          <div class="image"></div>
          <div class="name">РИМАНТАДИН</div>
        </li>        <li class="image-handler product">
        <div class="image"></div>
        <div class="name">АРБИДОЛ</div>
      </li>        <li class="image-handler product">
        <div class="image"></div>
        <div class="name">ИНВАРИГИН</div>
      </li>        <li class="image-handler product">
        <div class="image"></div>
        <div class="name">АПРЕФЛЮ</div>
      </li>        <li class="image-handler product">
        <div class="image"></div>
        <div class="name">ТАМИФЛЮ</div>
      </li>
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
@import '~@/css/fonts.css';

.image-handler {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.similar-products {
  & ._title {
    font-family: Montserrat-regular, serif;
    font-size: 24px;
  }

  & .slider {
    margin-top: 15px;
    width: 1150px;
    height: 160px;
    //background-color: #A6A9FF;

    //height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;

    & .elems {
      //padding: 2em;
      padding: 0;
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;

      & .product {
        list-style: none;
        width: 166px;
        height: 158px;
        //background-color: #ADE2FF;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & .image {
          background-color: #7CA7AC;
          height: 130px;
          width: 130px;
          border-radius: 20px;
          border: 3px solid #C3EAFF;
        }

        & .name {
          font-family: Montserrat-medium, serif;
          font-size: 18px;
        }
      }
    }

    & .arrow {
      height: 66px;
      width: 66px;
      background-size: 66px 66px;

      &:hover {
        cursor: pointer;
      }
    }

    & .arrow-left {
      background-image: url("~@/assets/svg/navigate_before_black_24dp.svg");
    }

    & .arrow-right {
      background-image: url("~@/assets/svg/navigate_next_black_24dp.svg");
    }

  }
}
</style>