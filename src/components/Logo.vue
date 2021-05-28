<template>
  <div class="logo" @click="handleClick">
    PHARMA Q
  </div>
</template>

<script>
export default {
  name: "Logo",
  methods: {
    handleClick() {
      alert("click logo")
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/css/fonts.css';

.logo {
  //width: 158px;
  //height: 38px;
  display: inline-flex;

  font-family: Cinzel,serif;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 38px;
  background: linear-gradient(170deg, #A6A9FF 0%, #000000 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* identical to box height */

  align-items: center;
  transition: 0.5s;
  margin-left: 12px;

  &:hover {
    cursor: pointer;
    //-webkit-text-fill-color: black;
    //color: #A6A9FF;
  }
}
</style>