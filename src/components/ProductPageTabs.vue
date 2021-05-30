<template>
  <div class="product-page-tabs">
    <v-tabs class="_tabs" color="deep-orange accent-2" v-model="tab">
      <v-tab class="_tab">Отзывы</v-tab>
      <v-tab>Где купить</v-tab>
      <v-tab disabled>Заказать на сайте</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <product-reviews />
      </v-tab-item>
      <v-tab-item>
        <where-can-buy />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import ProductReviews from "@/components/ProductReviews";
import WhereCanBuy from "@/components/WhereCanBuy";
export default {
  name: "ProductPageTabs",
  components: {WhereCanBuy, ProductReviews},
  data() {
    return {
      tab: null,
      text: "asd"
    }
  },
}
</script>

<style scoped>

</style>