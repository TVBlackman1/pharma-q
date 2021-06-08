<template>
  <div class="catalog-section" :style="`top: ${top}`" v-show="isShown">
    Здесь пока нет контента
  </div>
</template>

<script>
import mainEmitter from "@/emitters/mainEmitter";


export default {
  name: "CatalogSection",
  props: {
    top: String
  },
  data() {
    return {
      isShown: false
    }
  },
  mounted() {
    mainEmitter.$on('toggle-catalog-section', this.toggle)
  },
  methods: {
    toggle() {
      this.isShown = !this.isShown
    }
  }
}
</script>

<style scoped>
@import '~@/css/fonts.css';

.catalog-section {
  position: absolute;
  left: 0;
  right: 0;
  height: 700px;
  background: #A6A9FF linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  display: flex;
  justify-content: center;
  align-items: center;
 font-size: 36px;
  color: #FFFFFF;
  font-family: Montserrat-semi-bold, serif;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>