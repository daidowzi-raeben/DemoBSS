<template>
  <div class="treeitem" >
    <!--<div :style="{ width: data.depth * 20 + 'px'}"></div>-->
    <!--트리의 + - 아이콘-->
    <div class="expanded" :style="{cursor : hasChild(data) ? 'pointer' : ''}"
         :class="hasChild(data) ? expanded ? 'open' : 'closed' : 'empty'" @click="onClick">
    </div>
    <div style="
      position: relative;
      right: 10px;
      justify-content: center;
      align-items: center;
      height: 20px;
      flex-direction: column;">
      <!--트리의 ㄴ  출력 하는 부분 -->
      <div v-show="depth>0" style="display: flex;width: 10px; height: 10px; border-left: #000 1px solid;"></div>
      <div v-show="depth>0 && !final" style="display: flex;width: 10px; height: 16px; border-top: #000 1px solid; border-left: #000 1px solid; "></div>
      <div v-show="depth>0 && final" style="display: flex;width: 10px; height: 13px; border-top: #000 1px solid; "></div>
    </div>
    <div class="item" @click="itemClick()" @mouseover="treeItemOver()"
         @mouseout="treeItemOut()" @dblclick="itemDoubleClick()">
      <div :class="{
              tree_label1: depth === 0,
              tree_label2: depth !== 0
            }"
            >{{ label }} &nbsp;<div v-show="depth===0 & badge0 " style="margin-right:2px;font-size:8pt; text-align:center; align-items:center;width: 30px;height: 13px;padding-bottom: 4px; background-color: rgb(155,68,221);color:white">대표</div></div>
    </div>
    <div>
      <div v-show="depth>0 && badge1" style="margin-right:2px;float:left;font-size:8pt; text-align:center;width: 36px;height: 13px;padding-bottom: 2px; background-color: rgb(121,148,177);color:white">해지</div>
      <div v-show="depth>0 && badge2" style="margin-right:2px;float:left;font-size:8pt; text-align:center;width: 36px;height: 13px;padding-bottom: 2px; background-color: rgb(242,102,118);color:white">IDC</div>
      <div v-show="depth>0 && badge3" style="margin-right:2px;float:left;font-size:8pt; text-align:center;width: 36px;height: 13px;padding-bottom: 2px; background-color: rgb(110,181,90);color:white">사용중</div>
      <div v-show="depth>0 && badge4" style="margin-right:2px;float:left;font-size:8pt; text-align:center;width: 36px;height: 13px;padding-bottom: 2px; background-color: rgb(17,157,216);color:white">변경중</div>
    </div>
  </div>
  <div v-show="depth>0 && final" style="width: 100%; border: #f2f2f2 1px solid"></div>
</template>

<script>
export default {
  name: 'msf-tree-item',
  props: {
    data: Object,     //msf-tree에서 가공된 데이터
    // checked: Boolean,
    // active: Boolean,
    expanded: Boolean,      //트리 확정 여부
    depth: Number,    //트리의 깊이
    label: String,    //트리의 출력 내용을 담은 변수
    badge0:null,      //대표 뱃지
    badge1:null,      //해지 뱃지
    badge2:null,      //IDC 뱃지
    badge3:null,      //사용중 뱃지
    badge4:null,      //변경중 뱃지
    final:null,       //트리가 펼쳐졌을 때 트리의 마지막 형태를 ㄴ으로 하기 위한 부분
    // halfChecked: Boolean,
    
  },
  data () {
    return {
      itemOvered: false
    }
  },
  methods: {
    treeItemOver: function () {
      this.itemOvered = true
    },
    treeItemOut: function () {
      this.itemOvered = false
    },
    // getIcon: function () {
    //   let data = this.data
    //   var iconClass = []
    //   iconClass[0] = 'sk'
    //   iconClass[1] = 'data-center'
    //   iconClass[2] = 'floor'
    //   iconClass[3] = 'room'
    //   iconClass[4] = 'rack'
    //   iconClass[5] = 'bm-server'
    //   iconClass[6] = 'v-server' // vm
    //   iconClass[7] = 'switch'
    //   iconClass[8] = 'storage'
    //   iconClass[10] = 'enclouser'
    //   iconClass[11] = 'blade-server'
    //   iconClass[12] = 'ups'
    //   iconClass[13] = 'pdu'
    //   iconClass[14] = 'air'
    //   iconClass[15] = 'etc'
    //   iconClass[16] = 'etc'
    //
    //   if (data && data.hasOwnProperty('type')) {
    //     if (data.type === 'USER') { return 'i-sk-user' } else if (data.id + '' === '51' && data.userGroupName === this.$t('COMMON.UNDESIGNATED')) {
    //       return 'i-non-group'
    //     } else if (data.type === 'USERGROUP') {
    //       if (data.id === 0 || data.id === '0') {
    //         return 'i-sk'
    //       }
    //       return 'i-user-group'
    //     }
    //   }
    //
    //   // i-non-node
    //   // console.log(data.resourceName, data.resourceTypeId)
    //   if (data && data.hasOwnProperty('resourceTypeId') && data.resourceTypeId) {
    //     let icoName = iconClass[data.resourceTypeId]
    //     return 'i-' + icoName
    //   }
    //   // resourceId === 52 이 미지정
    //   let noAssignedFlag = data.resourceName === 'COMMON.UNDESIGNATED' || (data.resourceId === '1' || data.resourceId === '52')
    //   return data.resourceId === 0 || data.resourceId === '0' ? 'i-sk' : noAssignedFlag ? 'i-non-group' : 'i-user-group'
    // },
    hasChild: function (data) {
      return data && data.hasOwnProperty('children') && data.children && data.children.length > 0
    },
    itemClick: function () {
      this.$emit('itemClick', this.data)
    },
    // checkClick: function () {
    //   let bool = !this.data.checked
    //   this.data.checked = bool
    //   this.$emit('checkclick', this.data)
    // },
    onClick: function () {
      let item = this.data
      if (!this.hasChild(item)) {
        return
      }
      item.expanded = !item.expanded
      this.$emit('expand', item)
    },
    itemDoubleClick: function () {
      this.$emit('itemDblClick', this.data)
    }
  },
  watch: {
    // checked: function (newVal, oldVal) { // watch it
    // },
    // selected: function (newVal, oldVal) { // watch it
    // }
  },
  computed: {
    // isChecked: function () {
    //   if (this.checked) {
    //     return 'checked'
    //   } else {
    //     if (this.halfChecked) {
    //       return 'halfchecked'
    //     } else {
    //       return ''
    //     }
    //   }
    // },
    // isActive: function () {
    //   if (this.active) {
    //     return 'active'
    //   }
    //   return ''
    // },
    // isSelected: function () {
    //   if (this.checked) {
    //     return 'checked'
    //   }
    //   return ''
    // },
    // isOvered () {
    //   return this.itemOvered ? 'overed' : ''
    // }
  }
}
</script>
<style>
@import '../../../assets/css/tree.css';
.treeitem {
  width: 100%;
}

.treeitem div {
  display: inline-block;
}

.treeitem .expanded {
  width: 20px;
}

.treeitem .checkbox {
  width: 17px;
  height: 17px;
  border: 1px solid #CCCCCC
}

.treeitem .empty {
  width: 20px;
}

.checked {
  background-color: #00FF00
}
.tree_label1{
  font-weight:bold;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  width: 550px;
}
.tree_label2{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  width: 550px;
}
.halfchecked {
  background-color: #FFFF00
}

.treeitem .item {
  cursor: pointer;
  height: 24px;
}
.tree_state1{
  float:left;
  width: 30px;
  height: 15px;
  padding-bottom: 2px;
  content: url("../../../assets/img/icon_tree_idl.png");
}
.tree_state2{
  float:left;
  width: 30px;
  height: 15px;
  content: url("../../../assets/img/icon_tree_cloud.png");
}
</style>