<template>
  <div class="stars">
    <div class="top">
      <div class="left">Оценок: 24</div>
      <div class="right">Средняя: 4.5</div>
    </div>
    <div class="content">
      <template v-for="(i, index) in rating.array">
        <div class="rate" :key="index*10">{{ i.rate }}</div>
        <div class="visual-container" :key="index*10+1">
          <div class="visual">
            <div class="visual-current" :style="{width: getVisualWidth(i.voters) }"></div>
          </div>
        </div>
        <div class="voters" :key="index*10+2">{{ i.voters }}</div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarsCard",
  data() {
    return {
      rating: {
        array: [
          {rate: 5, voters: 11},
          {rate: 4, voters: 4},
          {rate: 3, voters: 8},
          {rate: 2, voters: 1},
          {rate: 1, voters: 0},
        ],
        votersSum: 24,
        averageRate: 4.5
      }
    }
  },
  methods: {
    getVisualWidth(voters) {
      return voters / this.rating.votersSum * 100 + `%`
    }
  }
}
</script>

<style scoped lang="scss">
.stars {
  min-width: 465px;
  min-height: 211px;
  background: #fff;
  padding: 14px 30px 8px;
  border-radius: 6px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;

  & .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px;
    font-family: Montserrat-regular, serif;
  }

  & .content {
    padding: 1em;
    display: grid;
    grid-template-columns: 20px 1fr 20px;
    grid-column-gap: 4px;
    grid-row-gap: 0.14em;

    & > .rate, .voters {
      font-size: 18px;
      font-family: Montserrat-regular, serif;
      text-align: center;
    }

    & > .visual-container {
      width: 100%;
      height: 100%;
      //background-color: #7CA7AC;
      display: flex;
      align-items: center;

      & .visual {
        width: 100%;
        height: 10px;
        background-color: #D9D9D9;
        border-radius: 6px;
        position: relative;
        overflow: hidden;

        & .visual-current {
          position: absolute;
          left: 0;
          bottom: 0;
          top: 0;
          width: 80%;
          background: linear-gradient(to right, #FB8C00 0%, #FFB74D 80%, #FFCC80 100%);
          background-size: 100% 100%;
          animation: visual-floating 4s ease infinite reverse;
        }

        @keyframes visual-floating {
          0% {
            //background-position: 0% 50%;
          }
          50% {
            //background-position: 100% 50%;
            //opacity: 0.7;
          }
          100% {
            //background-position: 0% 50%;
          }
        }
      }
    }
  }
}
</style>