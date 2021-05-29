<template>
  <div class="info-price">
    <div class="paragraphs">
      <div class="key">Производитель:</div>
      <div class="value">Ниармедик Плюс ООО</div>

      <div class="key">Форма выпуска:</div>
      <div class="value">таб.</div>

      <div class="key">Дозировка</div>
      <div class="value">12 мг</div>

      <div class="key">Фасовка</div>
      <div class="value">N10</div>
    </div>
    <div class="price-section">
      <div class="before-price">Цена:</div>
      <div class="price">
        <div class="price-values">190 - 240</div>
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
  name: "InfoPrice"
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
  background-color: #E2F1F3;
  border-radius: 6px;
  font-size: 18px;
  font-family: PT-Sans-regular, serif;

  &:hover {
    cursor: pointer;
    background-color: #CDE6EA;
  }

}
</style>