<template>
  <v-app>
    <v-main>
      <site-header />
      <product-page />
    </v-main>
  </v-app>
</template>

<script>
import SiteHeader from "@/components/SiteHeader";
import ProductPage from "@/components/ProductPage";

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
  background-color: #FAFEFF !important;
}

</style>
