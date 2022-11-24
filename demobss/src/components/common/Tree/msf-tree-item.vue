<template>
  <div class="treeitem" >
    <!--<div :style="{ width: data.depth * 20 + 'px'}"></div>-->
    <div class="expanded" :style="{cursor : hasChild(data) ? 'pointer' : ''}"
         :class="hasChild(data) ? expanded ? 'open' : 'closed' : 'empty'" v-on:click="onClick">
    </div>
    <div style="
      justify-content: center;
      align-items: center;
      height: 20px;
      flex-direction: column;">
      <div v-show="depth>0" style="display: flex;width: 10px; height: 10px; border-left: #000 1px solid;"></div>
      <div v-show="depth>0 && !final" style="display: flex;width: 10px; height: 10px; border-top: #000 1px solid; border-left: #000 1px solid; "></div>
      <div v-show="depth>0 && final" style="display: flex;width: 10px; height: 10px; border-top: #000 1px solid; "></div>
    </div>
    <div class="item" :class="[isActive, isSelected, isOvered]" v-on:click="itemClick()" v-on:mouseover="treeItemOver()"
         v-on:mouseout="treeItemOut()" v-on:dblclick="itemDoubleClick()">
      <div> {{ label }}</div>
    </div>
    <div style="padding-left: 200px;" >
      <div style="float:left; width: 30px; height: 15px;" v-show="chk1" class="tree_state1"/>
      <div style="float:left; width: 30px; height: 15px;" v-show="chk2" class="tree_state2"/>
    </div>
  </div>
  <div v-show="depth>0 && final" style="width: 100%; border: #f2f2f2 1px solid"></div>
</template>

<script>
export default {
  name: 'msf-tree-item',
  props: {
    data: Object,
    checked: Boolean,
    active: Boolean,
    expanded: Boolean,
    depth: Number,
    label: String,
    chk1 : null,
    chk2 : null,
    final:null,
    halfChecked: Boolean
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
    getIcon: function () {
      let data = this.data
      var iconClass = []
      iconClass[0] = 'sk'
      iconClass[1] = 'data-center'
      iconClass[2] = 'floor'
      iconClass[3] = 'room'
      iconClass[4] = 'rack'
      iconClass[5] = 'bm-server'
      iconClass[6] = 'v-server' // vm
      iconClass[7] = 'switch'
      iconClass[8] = 'storage'
      iconClass[10] = 'enclouser'
      iconClass[11] = 'blade-server'
      iconClass[12] = 'ups'
      iconClass[13] = 'pdu'
      iconClass[14] = 'air'
      iconClass[15] = 'etc'
      iconClass[16] = 'etc'

      if (data && data.hasOwnProperty('type')) {
        if (data.type === 'USER') { return 'i-sk-user' } else if (data.id + '' === '51' && data.userGroupName === this.$t('COMMON.UNDESIGNATED')) {
          return 'i-non-group'
        } else if (data.type === 'USERGROUP') {
          if (data.id === 0 || data.id === '0') {
            return 'i-sk'
          }
          return 'i-user-group'
        }
      }

      // i-non-node
      // console.log(data.resourceName, data.resourceTypeId)
      if (data && data.hasOwnProperty('resourceTypeId') && data.resourceTypeId) {
        let icoName = iconClass[data.resourceTypeId]
        return 'i-' + icoName
      }
      // resourceId === 52 이 미지정
      let noAssignedFlag = data.resourceName === 'COMMON.UNDESIGNATED' || (data.resourceId === '1' || data.resourceId === '52')
      return data.resourceId === 0 || data.resourceId === '0' ? 'i-sk' : noAssignedFlag ? 'i-non-group' : 'i-user-group'
    },
    hasChild: function (data) {
      return data && data.hasOwnProperty('children') && data.children && data.children.length > 0
    },
    itemClick: function () {
      this.$emit('itemClick', this.data)
    },
    checkClick: function () {
      let bool = !this.data.checked
      this.data.checked = bool
      this.$emit('checkclick', this.data)
    },
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
    checked: function (newVal, oldVal) { // watch it
    },
    selected: function (newVal, oldVal) { // watch it
    }
  },
  computed: {
    isChecked: function () {
      if (this.checked) {
        return 'checked'
      } else {
        if (this.halfChecked) {
          return 'halfchecked'
        } else {
          return ''
        }
      }
    },
    isActive: function () {
      if (this.active) {
        return 'active'
      }
      return ''
    },
    isSelected: function () {
      if (this.checked) {
        return 'checked'
      }
      return ''
    },
    isOvered () {
      return this.itemOvered ? 'overed' : ''
    }
  }
}
</script>
<style>
@import '../../../css/tree.css';
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

.halfchecked {
  background-color: #FFFF00
}

.treeitem .item {
  cursor: pointer;
  height: 20px;
}
.tree_state1{
  content: url("../../../img/icon_tree_idl.png");
}
.tree_state2{
  content: url("../../../img/icon_tree_cloud.png");
}
</style>