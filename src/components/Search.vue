<template>
  <div class="search">
    <input type="text" placeholder="Найти по названию, действующему веществу" class="search-field">
    <button class="find-btn" @click="handleClick">Найти</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  methods: {
    handleClick() {
      alert("click 'find'")
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/css/fonts.css';

.search {
  height: fit-content;
  width: fit-content;
  position: relative;
}

.search-field {
  width: 1400px;
  background: #FFFFFF;
  border: 1px solid #C7E3E7;
  border-radius: 14px;
  height: 42px;
  padding: 0.1em 10em 0.1em 1.2em;
  box-sizing: inherit;
  transition: 0.15s;
  font-family: PT-Sans-regular,serif;

  &:focus {
    //-moz-outline-radius: 14;
    outline: none;
    border: 1px solid #7ac5ce;
  }
}

.find-btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 130px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #C3EAFF;
  transition: 0.15s;

  &:hover {
    background-color: #ADE2FF;
  }
}

</style>