<template>
  <div class="mu-container">
    <section>
      <!-- mu-left-content -->
      <div class="mu-left-content">
<!--        <div class="mu-search-box">-->
<!--          <label>파일명</label>-->
<!--          <input type="text" class="mu-input" placeholder="search..." v-model="searchFileName">-->
<!--          <button type="button" class="mu-btn mu-btn-icon" @click="searchTreeList"><i class="mu-icon-img icon-search"></i><span>조회</span></button>-->
<!--        </div>-->
        <!-- tree-wrap -->
        <div class="mu-tree-wrap">
          <msf-tree :source="contentTree"
                    :activeItem="activeItemObj"
                    :selectedList="selectedItemList"
                    id-field="directoryName"
                    label-field="directoryName"
                    ref="tree"
                    @itemClick="treeItemClick"
                    style="width:100%; height:100%;font-size: 12pt;"
          ></msf-tree>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MsfTree from '@/components/common/Tree/msf-tree'

export default {
  name: 'TreeView',
  components: {MsfTree},
  data () {
    return {
      contentTree: [{
        groupId: 0,
        directoryName: '청구계정ID 홍길* 은행계좌자동이체',
        children: [
          {groupId: 1, directoryName: '요금제명(서비스계약id) 서울시 강남구 학동로 111', chk:true, chk2:false},
          {groupId: 2,
            directoryName: '요금제명(서비스계약id) 서울시 강남구 학동로 111', chk:false, chk2:false,},
          {groupId: 3, directoryName: '요금제명(서비스계약id) 서울시 강남구 학동로 111',chk:false, chk2:true},
          {groupId: 4, directoryName: '요금제명(서비스계약id) 서울시 강남구 학동로 111',chk:true, chk2:true}
        ]
      },
        {groupId: 5, directoryName: '요금제명(서비스계약id) 서울시 강남구 학동로 111', children: [
            {groupId: 3, directoryName: '요금제명(서비스계약id) 서울시 강남구 학동로 111',chk:false, chk2:true},
            {groupId: 4, directoryName: '요금제명(서비스계약id) 서울시 강남구 학동로 111',chk:true, chk2:true}
          ]},
        {groupId: 6, directoryName: '요금제명(서비스계약id) 서울시 강남구 학동로 111'}
      ],
      activeItemObj: {}, // 활성화 시킬 객체
      selectedItemList: [] // 선택시킬 객체
    }
  },
  methods:{
    treeItemClick(event){
      console.log(event);
    }
  }
}
</script>

<style scoped>
@import '../../../css/tree.css'
</style>