<template>
  <div class="reviews">
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
    <div class="review-list">
      <div class="review" v-for="(review, index) in reviews" :key="index">
        <div class="nick">
          <div class="icon"></div>
          <div class="name"> {{ review.nick }} </div>
        </div>
        <div class="category">
          <div class="name">Применялся для:</div>
          <div class="content"> {{ review.usedFor }} </div>
        </div>
        <div class="category">
          <div class="name">Комментарий:</div>
          <div class="content"> {{ review.comment }} </div>
        </div>
        <div class="votes">
          <div class="vote">
            <div class="icon thumb-up"></div>
            <div class="number"> {{ review.votes.good }} </div>
          </div>
          <div class="vote">
            <div class="icon thumb-down"></div>
            <div class="number"> {{ review.votes.bad }} </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductReviews",
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
      },
      reviews: [
        {
          nick: "Hasel1284",
          usedFor: "Профилактики ОРВИ",
          comment: "Препарат неплох, симптомы облегчает и быстрее выздоравливаю после него так что в принципе советую. мне хватает и упаковки на 10 таблеток не вижу смысла больше брать если на одного человека- за глаза.",
          votes: {
            good: 14,
            bad: 4,
          },
        },
        {
          nick: "София",
          usedFor: "Лечения",
          comment: "Много слышала о Кагоцеле из разных источников, когда прошлый раз болела, решила именно это лекарство себе и купить. Могу сказать, что лечилась я совсем недолго, не больше четырех дней, побочных эффектов не было. Мне препарат подошел.",
          votes: {
            good: 4,
            bad: 0,
          },
        },
        {
          nick: "Лаура",
          usedFor: "Лечения от простуды",
          comment: "Кагоцел нашей семье помог весной прошлого года вылечить сильную простуду. Народные средства не помогали, а вот Кагоцел за пару дней помог.",
          votes: {
            good: 2,
            bad: 4,
          },
        }
      ]
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
@import '~@/css/fonts.css';

.reviews {
  padding: 4em 0;
  background-color: $qq-background;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  & .stars {
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

  & .review-list {
    margin-left: 200px;
    & .review {
      & .nick {
        display: flex;
        flex-direction: row;
        align-items: center;
        & .icon {
          background: url("~@/assets/svg/person_black_24dp.svg");
          background-size: 33px 33px;
          width: 33px;
          height: 33px;
        }

        & .name {
          padding-left: 0.3em;
          font-size: 18px;
          font-family: Montserrat-regular, serif;
          text-decoration: underline;
        }

        &:hover {
          cursor: pointer;
        }
      }

      & .category {
        margin: 1em 0;
        & .name {
          font-size: 18px;
          font-family: Montserrat-semi-bold, serif;
        }

        & .content {
          font-size: 18px;
          font-family: Montserrat-regular, serif;
        }
      }

      & .votes {
        display: flex;
        flex-direction: row;

        & .vote {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-right: 14px;

          & .icon {
            width: 24px;
            height: 24px;
            filter: invert(42%) sepia(6%) saturate(19%) hue-rotate(13deg) brightness(95%) contrast(91%);
            transition: 0.15s;

            &.thumb-up {
              background: url("~@/assets/svg/thumb_up_black_24dp.svg");
              background-size: 24px 24px;
            }
            &.thumb-down {
              background: url("~@/assets/svg/thumb_down_black_24dp.svg");
              background-size: 24px 24px;
            }
          }

          & .number {
            font-size: 14px;
            font-family: Montserrat-semi-bold, serif;
            padding-left: 0.4em;
            color: #696969;
          }

          &:hover {
            cursor: pointer;

            & .thumb-up {
              filter: invert(100%) sepia(26%) saturate(4641%) hue-rotate(45deg) brightness(93%) contrast(86%);
            }

            & .thumb-down {
              filter: invert(11%) sepia(74%) saturate(7491%) hue-rotate(3deg) brightness(100%) contrast(122%);
            }

          }
        }
      }

      hr {
        margin: 1em 0 3em;
      }
    }
  }
}
</style>