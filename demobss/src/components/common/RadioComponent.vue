<template>
<div>
  <label class="radioContainer" v-for="RadioOpt in RadioOptions" :key="RadioOpt" >
    <input type="radio" :id="RadioOpt" :value="RadioOpt" v-model="radioValue">{{RadioOpt}}
  </label>  <!-- <label class="container" v-for="RadioOpt in RadioOptions" :key="RadioOpt" >
    <input type="radio" :id="RadioOpt" :value="RadioOpt" v-model="radioValue">{{RadioOpt}}
    <span class="radiomark" ></span>
  </label>
  <p style="font-size:20px;" v-show="radioValue.length>0">선택 값 : {{radioValue}}</p> -->
</div>
</template>

<script>
export default {
  props:{
    RadioOptions: {
      type:Array,
      default: ["default옵션","radio2","radio3","radio4","radio5"]
      }
  },
  data(){
    return{
      radioValue:'',
    }
  },
}
</script>

<style scoped>
.radioContainer{
  text-align: center;
  vertical-align: center;
  cursor: pointer;
  margin-right: 20px;
}

.radioContainer > input{
  cursor: pointer;
}

.container {
  display: inline-block;
  position: relative;
  /* padding-left: 35px;
  margin-bottom: 12px; */
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.radiomark {
  position: absolute;
  /* top: 0;
  left: 0; */
  /* margin:auto; */
  height: 15px;
  width: 15px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .radiomark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .radiomark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.radiomark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .radiomark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .radiomark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>