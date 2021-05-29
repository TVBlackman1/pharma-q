<template>
  <div class="how-to-take">
    <div class="category">
      <div class="_title">Когда принимать</div>
      <hr class="dell">
      <div class="content">Внутрь, независимо от приема пищи.</div>
    </div>
    <div class="category">
      <div class="_title">Сколько принимать</div>
      <hr class="dell">
      <div class="content">Для лечения гриппа и ОРВИ взрослым назначают в первые
        два дня – по 2 таблетки 3 раза в день, в последующие два дня – по одной
        таблетке 3 раза в день. Всего на курс – 18 таблеток, длительность курса – 4 дня.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowToTake"
}
</script>

<style scoped lang="scss">
@import '~@/css/fonts.css';

.how-to-take {
  & .category {
    & ._title {
      font-size: 24px;
      padding-left: 0.6em;
      font-family: Montserrat-regular, serif;
    }

    & .content {
      font-size: 18px;
      padding-left: 10px;
      padding-top: 8px;
      font-family: PT-Sans-regular, serif
    }

    & .dell {
      background-color: #ADE2FF !important;
      color: #A6A9FF !important;
    }

    margin: 1em 0 4em;
  }
}
</style>