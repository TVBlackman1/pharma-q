<template>
  <div class="profile-btn">
  </div>
</template>

<script>
export default {
  name: "ProfileButton"
}
</script>

<style scoped lang="scss">
.profile-btn {
  background-image: url("~@/assets/svg/account_circle_black_24dp.svg");
  background-size: 40px 40px;
  height: 40px;
  width: 40px;
  filter: invert(65%) sepia(13%) saturate(659%) hue-rotate(138deg) brightness(95%) contrast(92%); // #7CA7AC
  transition: 0.15s;
  margin-left: 40px;

  &:hover {
    cursor: pointer;
    filter: invert(43%) sepia(28%) saturate(445%) hue-rotate(138deg) brightness(93%) contrast(90%); // #4F787D
  }
}
</style>