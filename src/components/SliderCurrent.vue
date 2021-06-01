<template>
  <div class="slider">
    <div class="image image-handler" ref="mainImageHandler"></div>
    <div class="other-images">
      <img src="" alt="no image" ref="imgTest">
      <div class="image-handler arrow arrow-top"></div>
      <ul class="elems" ref="secondaryImages">
        <li class="image-handler other img1" @click="secondaryImagesHandleClick" key="1"></li>
        <li class="image-handler other img2" @click="secondaryImagesHandleClick" key="2"></li>
        <li class="image-handler other img3" @click="secondaryImagesHandleClick" key="3"></li>
      </ul>
      <div class="image-handler arrow arrow-bottom"></div>
    </div>

  </div>
</template>

<script>
import serverImageHandler from "@/mixins/serverImageHandler";

export default {
  name: "SliderCurrent",
  data() {
    return {
      $secondaryImages: [],
      selectedElement: null,
    }
  },
  mounted() {
    this.$secondaryImages = this.$refs.secondaryImages.querySelectorAll(".other");
    this.selectedElement = this.$secondaryImages[0]
  },
  watch: {
    selectedElement: [
        'changeSecondaryStyle',
        'setCurrentImageFromSecondary'
    ]
  },
  methods: {
    secondaryImagesHandleClick($event) {
      this.selectedElement = $event.target
    },
    changeSecondaryStyle(val, oldVal) {
      oldVal?.classList.remove('picked')
      val.classList.toggle("picked")
    },
    async setCurrentImageFromSecondary(val) {
      console.log("!", val.style.borderColor)
      // this.$refs.mainImageHandler.style.backgroundColor = "#000"
      // this.$refs.mainImageHandler.style.backgroundImage = val.style.backgroundImage
      const url = await this._serverGetImageURL(this.image1_url)
      console.log(url)
      this.$refs.mainImageHandler.style.backgroundImage = url
      this.$refs.imgTest.src = url
    },
  },
  mixins: [serverImageHandler],
}
</script>

<style scoped lang="scss">

.slider {
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
}

.image-handler {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.image {
  background-color: #FFFFFF;
  height: 301px;
  width: 400px;
  //background-image: url("~@/assets/images/kagocel-10tab.jpg");
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  border: 3px solid #E2F9FC;
}

.other-images {
  /*background-color: #ADE2FF;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
}

.elems {
  width: fit-content;
  padding: 0;
}

.other {
  background-color: #FFFFFF;
  height: 58px;
  width: 58px;
  list-style: none;
  margin: 0.6em 0;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  border: 3px solid #E2F9FC;

  &.img1 {
    background: url("~@/assets/images/kagocel-10tab.jpg");
    background-size: cover;
  }

  &.img2 {
    background: url("~@/assets/images/kagocel-10tab-2.jpg");
    background-size: cover;
  }

  &.img3 {
    background: url("~@/assets/images/kagocel-10tab-3.jpg");
    background-size: cover;
  }

  &.img4 {
    background: url("~@/assets/images/kagocel-10tab-4.jpg");
    background-size: cover;
  }


  &.picked {
    border: 3px solid #7CA7AC;
  }

  &:hover {
    cursor: pointer;
  }
}

.arrow {
  height: 30px;
  width: 30px;
  background-size: 30px 30px;

  &:hover {
    cursor: pointer;
  }
}

.arrow-bottom {
  background-image: url("~@/assets/svg/keyboard_arrow_down_black_24dp.svg");
}

.arrow-top {
  background-image: url("~@/assets/svg/keyboard_arrow_up_black_24dp.svg");
}

</style>