<template>
  <v-app>
    <v-main>
      <product-page />
      <site-header />
    </v-main>
  </v-app>
</template>

<script>

import ProductPage from "@/components/ProductPage";
import SiteHeader from "@/components/SiteHeader";

export default {
  name: 'App',

  components: {
    ProductPage,
    SiteHeader,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">

.v-application {
  background-color: $qq-background !important;
}

</style>
