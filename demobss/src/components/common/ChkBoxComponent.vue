<template>
<div>
  <label class="container" 
  v-for="(checkOpt,index) in CheckOptions" :key="index" >
    <input type="checkbox" 
    :id="checkOpt" 
    :value="checkOpt" 
    v-model="checkedValues">
      {{checkOpt}}
    <span class="checkmark" ></span>
  </label>
  <p v-show="showCheckOpt && checkedValues.length>0">선택 값 : {{checkedValues}}</p>
</div>
</template>

<script>
export default {
  props:{
    CheckOptions: {
      type:Array,
      default: ["default옵션","옵션6","옵션7","옵션8","옵션9","옵션10"]
      },
    showCheckOpt:{      // 체크 목록 출력 여부
      type:Boolean,
      default:true
    },
    checkTextSize: {
      type:String,
      default:'20pt'
    },
    checkBoxSize:{
      type:String,
      default:'30px'
    },
    chkBoxColor:{
      type:String,
      default:'#eee'
    }
  },
  data(){
    return{
      checkedValues:[],
      
    }
  },
}
</script>

<style scoped>


/* The container */
.container {
  display: block;
  position: relative;
  padding-left: v-bind('checkBoxSize');
  margin-bottom: 12px;
  cursor: pointer;
  font-size: v-bind('checkTextSize');
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: v-bind('checkBoxSize');
  width: v-bind('checkBoxSize');
  background-color: v-bind('chkBoxColor');
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 28%;
  width: 30%;
  height: 70%;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

div > p {
  font-size:20px;
}
</style>