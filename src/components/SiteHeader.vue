<template>
  <div class="header" :style="`height: ${headerHeight}`">
    <div class="header-el">
      <logo />
    </div>
    <div class="header-el">
      <catalog-button />
    </div>
    <div class="header-el">
      <search />
    </div>
    <div class="header-el">
      <profile-button />
    </div>
    <catalog-section :top="headerHeight"/>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Search from "@/components/Search";
import CatalogButton from "@/components/CatalogButton";
import ProfileButton from "@/components/ProfileButton";
import CatalogSection from "@/components/CatalogSection";
export default {
  name: "SiteHeader",
  data() {
    return {
      headerHeight: "72px",
    }
  },
  components: {CatalogSection, ProfileButton, CatalogButton, Search, Logo}
}
</script>

<style scoped lang="scss">

@import '~vuetify/src/styles/styles';

.header {
  //$height: 72px;
  width: 100%;
  //height: $height;
  background: $qq-header-color;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
  display: grid;
  grid-template-columns: 200px 160px 1400px 1fr;
  z-index: 2;
}

.header-el {
  display: flex;
  align-items: center;
}
</style>