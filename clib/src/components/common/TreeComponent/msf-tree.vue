<template>
  <div class="tree-wrap">
    <virtual-list ref="virtualList"  :size="size" :remain="remain" class="tree-list">
      <msf-tree-item v-on:expand="expand"  v-on:itemClick="itemClick" v-on:itemDblClick="itemDblClick" v-for="item of list" :key="item.key" :data="item" :checked="item.checked"
                     :expanded="item.expanded" :final="item.final" :depth="item.depth" :label="item.labelValue" :badge0="item.badge0" :badge1="item.badge1"
                     :badge2="item.badge2" :badge3="item.badge3" :badge4="item.badge4" :active="item.active"/>
    </virtual-list>
  </div>
</template>

<script>
import MsfTreeItem from './msf-tree-item.vue'

export default {
  name: 'msf-tree',
  components: {MsfTreeItem},
  props: {
    source: Array,            //트리 데이터
    filterFunction: Function,   //함수를 값으로 받는 변수로 전달된 함수의 return 값에 맞는 값만 트리 형태로 보여준다.
    labelField: String,       //출력 내용필드명
    idField: String,          //id 필드명
    // selectedList: Array,
    // activeItem: Object,
    expandDepth: {            //트리의 최대 깊이 설정
      default: 1,
      type: Number
    },
  },

  data () {
    return {
      items: [], // 전체 데이터
      filteredItems: [], //필터함수에 의해 필터된 데이터
      list: [], // 닫쳐있는것 제외 하고 필터링 된것 제외한 데이터
      size: 10,   //virtual-list의 size
      remain: 84, //virtual-list의 높이
      // keyField: 'id',
    }
  },
  watch: {
    source: function (value) {
      this.setSource(value)
    },
    // selectedList: function (value) {
    //   if (!value || value.length < 1) {
    //     this.clearCheck('checked')
    //     this.refresh()
    //     return
    //   }
    //
    //   for (let i = 0; i < this.items.length; i++) {
    //     let obj = this.items[i]
    //     for (let j = 0; j < value.length; j++) {
    //       this.setCheckedData(obj, 'checked')
    //     }
    //   }
    //   this.refresh()
    // },
    // activeItem: function (value) {
    //   this.activeList = [value]
    //   if (!this.activeList || this.activeList.length < 1) {
    //     this.clearCheck('active')
    //     this.refresh()
    //     return
    //   }
    //
    //   for (let i = 0; i < this.items.length; i++) {
    //     let obj = this.items[i]
    //     for (let j = 0; j < this.activeList.length; j++) {
    //       this.setCheckedData(obj, 'active')
    //     }
    //   }
    //   this.refresh()
    // }
  },
  methods: {      //obj가 각 트리 데이터
    addItem: function (items, obj, depth, parent, chk) {      //트리데이터를 넣는 부분 자식의 경우 재귀를 통해 넣는다.
      obj.depth = depth
      obj.expanded = false
      let expandAll = this.expandDepth === 0 && obj.hasOwnProperty('children') && obj.children && obj.children.length > 0
      if (expandAll || depth < this.expandDepth) {
        obj.expanded = true
      }
      if (this.idField) { obj.id = obj[this.idField] }
      obj.key = Math.random()
      obj.visible = true
      // obj.checked = false
      // this.setCheckedData(obj, 'checked')
      // this.setCheckedData(obj, 'active')

      obj.parent = parent
      obj.labelValue = obj[this.labelField]
      obj.badge0 = obj["badge0"]    //대표 출력 뱃지
      obj.badge1 = obj["badge1"]    //해지 출력 뱃지
      obj.badge2 = obj["badge2"]    //IDC 출력 뱃지
      obj.badge3 = obj["badge3"]    //사용중 출력 뱃지
      obj.badge4 = obj["badge4"]    //변경중 출력 뱃지
      obj.final = chk             //마지막 행의 경우 하위 트리 형태가 ㄴ이 되야하기에 설정한 변수
      obj.childAllCheck = false
      items.push(obj)   //hasOwnProperty : 해당 오브젝트에 가로 안의 프로퍼티가 존재하는지 확인
      if (obj.hasOwnProperty('children') && obj.children && obj.children.length > 0) {
        for (var i = 0; i < obj.children.length; i++) {
          if(i==obj.children.length-1)this.addItem(items, obj.children[i], depth + 1, obj, true)
          else this.addItem(items, obj.children[i], depth + 1, obj, false)
        }
      }
    },
    // setCheckedData: function (item, field) {
    //   let value = field === 'checked' ? this.selectedList : this.activeList
    //   item[field] = false
    //   if (!value || value.length < 1) { return }
    //   for (let j = 0; j < value.length; j++) {
    //     if (value[j] && value[j].id === item.id) {
    //       item[field] = true
    //       if (field === 'active') {
    //         item.expanded = true
    //       }
    //       this.parentExpand(item)
    //     }
    //   }
    // },
    // parentExpand (item) {
    //   item.expanded = true
    //   this.expand(item)
    //   if (item.parent) {
    //     this.parentExpand(item.parent)
    //   }
    // },
    // getItem: function (value) {
    //   for (let i = 0; i < this.items.length; i++) {
    //     if (this.items[i][this.keyField] + '' === value + '') {
    //       return this.items[i]
    //     }
    //   }
    //   return null
    // },
    hasChild: function (data) {     // 해당 데이터에 자식 프로퍼티가 있는지 확인
      return data && data.hasOwnProperty('children') && data.children && data.children.length > 0
      // hasOwnProperty를 통해 data내에 children 프로퍼팉를 가지고 있는지 확인.
    },
    treeFilter: function (item) {     //필터함수가 존재할 경우 해당 함수에 의해 트리를 필터한다.
      var returnValue = false
      if (item.parent) {
        returnValue = item.visible && this.isExpanded(item.parent)
      } else {
        returnValue = item.visible
      }
      if (this.filterFunction) {
        returnValue = returnValue && this.isFilteredData(item)      //전달받은 필터함수를 적용하여 트리를 필터하는 곳
      }
      return returnValue
    },
    childVisibleChange (item, visible) {      //트리의 자식 데이터의 출력여부를 정하는 함수
      if (this.hasChild(item)) {
        let child = item.children
        for (var i = 0; i < child.length; i++) {
          child[i].visible = visible
          this.childVisibleChange(child[i], visible)
        }
      }
    },
    isFilteredData: function (item) {
      if (!item) { return false }
      if (this.hasChild(item)) {
        let children = item.children
        let returnVal = item.isFiltered
        for (var i = 0; i < children.length; i++) {
          let child = children[i]
          returnVal = returnVal || this.isFilteredData(child)
        }

        return returnVal
      }
      return item.isFiltered
    },
    expand: function (item) {     //+ - 누를시 호출되는 함수 트리를 접었다 폈다하는 함수
      this.childVisibleChange(item, item.expanded)
      this.refresh()
    },
    isExpanded: function (item) {
      if (item.parent) {
        return this.isExpanded(item.parent) && item.expanded
      } else {
        return true
      }
    },
    // checkclick: function (item) {
    //   let idx = this.filteredItems.indexOf(item)
    //   let bool = item.checked
    //   for (let i = idx + 1; i < this.filteredItems.length; i++) {
    //     let obj = this.filteredItems[i]
    //     if (obj.depth <= item.depth) { break }
    //     obj.checked = bool
    //   }
    //   // 절반체크 확인
    //   for (let i = this.items.length - 1; i >= 0; i--) {
    //     let obj = this.items[i]
    //     if (!this.hasChild(obj)) {
    //       obj.halfChecked = false
    //       continue
    //     } else { // 자식이 있다
    //       this.setCheckType(obj)
    //     }
    //   }
    //   this.refresh()
    // },
    // clearCheck: function () {     //아이템의 checked값 false로 만들어 초기화
    //   for (let i = 0; i < this.items.length; i++) {
    //     let item = this.items[i]
    //     item.checked = false
    //   }
    // },
    itemClick: function (item) { // 아이템 클릭 이벤트 버블링
      item.expanded = true
      if (item.children && item.children.length > 0) { this.expand(item) }
      this.$emit('itemClick', item)
    },
    itemDblClick: function (item) { // 아이템 클릭 이벤트 버블링
      this.$emit('itemDblClick', item)
    },
    // setCheckType: function (item) {
    //   let idx = this.items.indexOf(item)
    //   let isAllChecked = true
    //   let isAllUnChecked = true
    //
    //   for (let i = idx + 1; i < this.items.length; i++) {
    //     let obj = this.items[i]
    //     if (obj.depth <= item.depth) { break }
    //
    //     if (this.hasChild(obj)) { // 자식이 있는건 그룹이라 패스~
    //       continue
    //     }
    //
    //     isAllChecked = isAllChecked && obj.checked
    //     isAllUnChecked = isAllUnChecked && !obj.checked
    //   }
    //
    //   if (isAllChecked) {
    //     item.halfChecked = false
    //     item.checked = true
    //   } else if (isAllUnChecked) {
    //     item.halfChecked = false
    //     item.checked = false
    //   } else {
    //     item.halfChecked = true
    //     item.checked = false
    //   }
    // },
    refresh: function () {        //화면에서 바뀐 부분이 있을 경우 호출하여 재구성
      if (this.filterFunction) { // 필터 내용이 있으면 확인
        var ar = []
        for (let i = 0; i < this.items.length; i++) {
          let item = this.items[i]
          item.isFiltered = false // 필터 되지 않은 내용
          if (this.hasChild(item)) { // 그룹은 신경쓰지 않는다.
            if (this.filterFunction(item)) {
              item.isFiltered = true
            }
            ar.push(item)
          } else {
            if (this.filterFunction(item)) {
              item.isFiltered = true // 필터링된 내용   필터링된 내용을가지고 있으면 해당 부모는 다 보여야 한다.
              ar.push(item)
            }
          }
        }
        this.filteredItems = ar
      } else {
        this.filteredItems = this.items
        // console.log(this.filteredItems);
      }
      this.list = this.filteredItems.filter(this.treeFilter)
      if (this.list && this.list.length > 0) {
        this.list[0].key = Math.random()
      }

      // let self = this
      // if (this.$refs.virtualList) {
      //   // console.log(this.$refs.virtualList);
      //   setTimeout(function () {
      //     if (self.$refs.virtualList) {
      //       self.$refs.virtualList.forceRender()
      //     }
      //   }, 50)
      // }
    },
    // getCheckedData: function () {
    //   var ar = []
    //   for (let i = 0; i < this.items.length; i++) {
    //     let obj = this.items[i]
    //     if (this.hasChild(obj)) { // 자식이 있는건 그룹이라 패스~
    //       continue
    //     }
    //     if (obj.checked) { ar.push(obj) }
    //   }
    //   return ar
    // },
    // setCheck: function (ar, key) {
    //   for (let i = 0; i < this.items.length; i++) {
    //     let obj = this.items[i]
    //
    //     if (this.hasChild(obj)) { // 자식이 있는건 그룹이라 패스~
    //       continue
    //     }
    //     for (let j = 0; j < ar.length; j++) {
    //       if (obj[key] === ar[j]) {
    //         obj.checked = true
    //         this.checkclick(obj)
    //         break
    //       }
    //     }
    //   }
    //   this.refresh()
    // },
    setSource: function (sampleData) {    //입력받은 트리데이터를 배열에 저장하고 추가함
      // 계층 구조로 들어온 목록을 2차원으로 변형 하면서 필요한 프로퍼티를 입력  datas 는 하이라키 구조의 데이터
      let ar = []
      if (!sampleData) { sampleData = [] }
      for (let i = 0; i < sampleData.length; i++) {
        var obj = sampleData[i]
        this.addItem(ar, obj, 0, null,false)
        // console.log(obj);
      }
      this.items = ar
      this.refresh()
    },
    calculateHeight () {        //트리 구조에 따른 virtual-list의 높이 계산
      let parentHeight = this.$el.parentElement.offsetHeight
      if (parentHeight == null || parentHeight === 0) {
        parentHeight = 300
      }
      this.remain = parentHeight / this.size + 20
    }
  },
  created () {
    this.setSource(this.source)
  },
  mounted () {
    this.calculateHeight()
  },
  updated () {
    this.calculateHeight()
  }
}
</script>

<style scoped>
@import '../../../assets/css/tree.css';
</style>