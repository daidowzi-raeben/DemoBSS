<template>
<<<<<<< Updated upstream
  
=======
  <article class="cus360View">
    
    <div class="item">   <!-- 1 -->
        <cust-retv-component 
        :cdGroup="'optionsSearchDiv'" />
    </div>

    <div class="item"> <!-- 2 --> </div>

    <div class="item"> <!-- 3 --> </div>

    <div class="item"> <!-- 4 --> 
      <form-data-component
      :FormDataclass="'InfoOfBasic'"
      :subInfoTitleNm="'계약 정보'"
      style="margin:auto;"
      />
    </div>

    <div class="item"> <!-- 5 --> 
        <form-data-component
          :FormDataclass="'InfoOfAccount'"
          :subInfoTitleNm="'청구계정 정보'"
          @input="addComp"
          @modalShow="FormPopup"
        /></div>

    <div class="item"> <!-- 6 -->
      <form-data-component
      :FormDataclass="'infoOfCus'"
      :subInfoTitleNm="'고객정보'"
      style="width:600px;"
      /> 
    </div>

    <div class="item"> <!-- 7 --> 
      <form-data-component
      :FormDataclass="'InfoOfOrg'"
      :subInfoTitleNm="'영업 조직정보'"
      />
    </div>


  </article>
>>>>>>> Stashed changes
</template>

<script>
export default {

}
</script>

<style>

</style>