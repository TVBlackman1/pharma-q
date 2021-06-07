<template>
  <div class="info-price">
    <div class="paragraphs">
      <template v-for="(currentInfo, index) in info.array">
        <div class="key" :key="index * 10">{{ currentInfo.name }}</div>
        <div class="value" :key="index * 10 + 1">{{ currentInfo.value }}</div>
      </template>
    </div>
    <div class="price-section">
      <div class="before-price">Цена:</div>
      <div class="price">
        <div class="price-values">{{ price.min }} - {{ price.max }}</div>
        <div class="after-price">руб.</div>
      </div>
    </div>

    <div class="btn">
      Скачать инструкцию
    </div>

  </div>
</template>

<script>
export default {
  name: "InfoPrice",
  data() {
    return {
      info: {
        count: 4,
        array: [
          {name: "Производитель:", value: "Ниармедик Плюс ООО"},
          {name: "Форма выпуска:", value: "таб."},
          {name: "Дозировка", value: "12 мг"},
          {name: "Фасовка", value: "N10"},
        ]
      },
      price: {
        min: 190,
        max: 240
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/css/fonts.css';

.paragraphs {
  display: grid;
  grid-template-columns: 142px 200px;
  grid-column-gap: 20px;
  font-size: 18px;

  & .key {
    font-family: PT-Sans-bold, serif;
  }

  & .value {
    font-family: PT-Sans-regular, serif;
  }
}

.price-section {
  margin-top: 30px;

  & .before-price {
    font-size: 18px;
    font-family: PT-Sans-regular, serif;
  }

  & .price {
    display: flex;
    flex-direction: row;

    & .price-values {
      font-size: 48px;
      font-family: PT-Sans-regular, serif;
      color: #579AA4;
      height: fit-content;
      margin-top: auto;
    }

    & .after-price {
      margin-left: 0.4em;
      font-size: 24px;
      font-family: PT-Sans-regular, serif;
      color: #579AA4;
      margin-top: auto;
      margin-bottom: 10px;
      //align-self: center;
    }
  }
}

.btn {
  margin-top: 20px;
  display: inline-block;
  padding: 0.15em 1.8em;
  background-color: $qq-neutral;
  border-radius: 6px;
  font-size: 18px;
  font-family: PT-Sans-regular, serif;

  &:hover {
    cursor: pointer;
    background-color: $qq-neutral-active;
  }

}
</style>