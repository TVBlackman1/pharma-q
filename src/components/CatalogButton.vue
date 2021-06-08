<template>
  <div class="catalog-btn">
    <div class="btn" @click="handleClick">
      <div class="svg-elem"></div>
      <div class="text">Каталог</div>
    </div>
  </div>
</template>

<script>
import mainEmitter from "@/emitters/mainEmitter";

export default {
  name: "CatalogButton",
  methods: {
    handleClick() {
      // alert("click catalog")
      mainEmitter.$emit('toggle-catalog-section')
    }
  }
}
</script>

<style scoped lang="scss">
.catalog-btn {
  position: relative;
  & .btn {
    padding: 0.1em 0.5em;
    margin: 0;
    //background-color: $qq-strong;
    border-radius: 14px;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    & .text {
      font-size: 24px;
      display: flex;
      align-items: center;
    }

    & .svg-elem {
      display: flex;
      align-items: flex-start;
      background-size: 24px 24px;
      background: url("~@/assets/svg/menu_black_24dp.svg");
      height: 24px;
      width: 24px;
      margin-right: 0.2em;
    }
  }
  & .catalog-section-top {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 8px;
    width: 8px;
    background-color: #7CA7AC;
  }
}

</style>