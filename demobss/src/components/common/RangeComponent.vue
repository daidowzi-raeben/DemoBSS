<template>
  <div class="slidecontainer">
    <p>range slider:</p>
    <input class="slider" type="range" min="1" max="100" v-model="rangeValue"   >
    <p style="font-size:20px;"> range Value : {{rangeValue}} </p>
    </div>
</template>

<script>
export default {
  data(){
    return{
      rangeValue: 50,   // default 값

      // css
      sliderContainerWidth: '70%', // 슬라이더 컨테이너 너비
      sliderWidth: '100%', // 슬라이더 너비
      sliderheight: "15px",
    }
  }
}
</script>

<style>
.slidecontainer {
  width: v-bind(sliderContainerWidth);
}

.slider {
  -webkit-appearance: none;
  width: v-bind(sliderWidth);
  height: v-bind(sliderheight);
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius:25px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #2dbdb6;
  cursor: pointer;
  border-radius:25px;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;

}
</style>