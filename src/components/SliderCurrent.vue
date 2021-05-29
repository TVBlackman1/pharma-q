<template>
  <div class="slider">
    <div class="image image-handler"></div>
    <div class="other-images">
      <div class="image-handler arrow arrow-top"></div>
      <ul class="elems">
        <li class="image-handler other picked"></li>
        <li class="image-handler other"></li>
        <li class="image-handler other"></li>
      </ul>
      <div class="image-handler arrow arrow-bottom"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "SliderCurrent"
}
</script>

<style scoped lang="scss">

.slider {
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
}

.image-handler {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.image {
  background-color: #FFFFFF;
  height: 301px;
  width: 400px;
  background-image: url("~@/assets/images/kagocel-10tab.jpg");
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  border: 3px solid #E2F9FC;
}

.other-images {
  /*background-color: #ADE2FF;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
}

.elems {
  width: fit-content;
  padding: 0;
}

.other{
  background-color: #FFFFFF;
  height: 58px;
  width: 58px;
  list-style: none;
  margin: 0.6em 0;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  border: 3px solid #E2F9FC;

  &.picked {
    border: 3px solid #7CA7AC;
  }

  &:hover {
    cursor: pointer;
  }
}

.arrow {
  height: 30px;
  width: 30px;
  background-size: 30px 30px;

  &:hover {
    cursor: pointer;
  }
}

.arrow-bottom {
  background-image: url("~@/assets/svg/keyboard_arrow_down_black_24dp.svg");
}

.arrow-top {
  background-image: url("~@/assets/svg/keyboard_arrow_up_black_24dp.svg");
}

</style>