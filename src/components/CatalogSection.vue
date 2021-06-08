<template>
  <div class="catalog-section" :style="`top: ${top}`">

  </div>
</template>

<script>
export default {
  name: "CatalogSection",
  props: {
    top: String
  }
}
</script>

<style scoped>
.catalog-section {
  position: absolute;
  left: 0;
  right: 0;
  height: 700px;
  background-color: #A6A9FF;
}
</style>