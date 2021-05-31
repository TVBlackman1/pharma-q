<template>
  <div class="reviews">
    <stars-card />
    <product-review-list />
  </div>
</template>

<script>
import ProductReviewList from "@/components/ProductReviewList";
import StarsCard from "@/components/StarsCard";
export default {
  name: "ProductReviews",
  components: {StarsCard, ProductReviewList},
}
</script>

<style scoped lang="scss">
@import '~@/css/fonts.css';

.reviews {
  padding: 4em 0;
  background-color: $qq-background;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

}
</style>