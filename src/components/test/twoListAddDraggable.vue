<template>
  <div class="dndList">
    <!--两个list list1拖动到list2中，list1不能相互拖动排序-->
    <div class="dndList-list">
      <h3>常用</h3>
      <draggable :list="list1" :options="{group:'article', disabled: disabled}"
                 @start="start22"
                 @end="end22"
                 @data="dataFun"
                 @choose="onChoose"
                 @update="datadragEnd2"
                 @add="addDrag($event)"
                 @dragleave="dragleave($event)"
                 @dragover="onDragover($event)" @drop='onDrop($event)'
                 class="dragArea11" style="height: 100px">
        <div v-for="(element, index) in list1" :key="element.id" class="list-complete-item">
          <div class="list-complete-item-handle">{{element.id}}--{{element.name}}</div>
          <div>
            <i class="el-icon-delete" @click="handleDel(index, element.id)"></i>
          </div>
        </div>
      </draggable>
    </div>
    <div style="width: 100%; height: 10px; background-color: #bfbfbf"></div>
    <div class="dndList-list">
      <h3>所有</h3>
      <draggable :list="list2" :options="{group:{name: falgs,pull:'clone'},filter: '.undraggable', sort: false}"
                 @end="end"
                 @choose="onChooseAll"
                 @clone="cloneFun"
                 :move="getdata"
                 @update="datadragEnd"
                 class="dragArea">
        <div v-for="element in list2" :key="element.id"
             :class="{undraggable : element.flag}"
             class="list-complete-item">
          <div class="list-complete-item-handle2"> {{element.name}}</div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'DndList',
  components: { draggable },
  watch: {
  },
  data () {
    return {
      falgs: 'article',
      disabled: false,
      list1: [],
      list2: [{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}, {id: 4, name: 'd'}, {id: 5, name: 'e'}, {id: 6, name: 'f'}, {id: 7, name: 'g'}, {id: 8, name: 'h'}, {id: 9, name: 'i'}, {id: 10, name: 'j'}]
    }
  },
  computed: {
  },
  methods: {
    // ----start, add, remove, update, end, choose, sort, filter, clone
    cloneFun () {
      console.log('所以 cloneFun')
    },
    onChooseAll (evt) {
      console.log('所以 onChooseAll')
      console.log(evt)
    },
    getdata: function (evt) {
      // console.log(evt)
      console.log('所以 move==id=' + evt.draggedContext.element.id)
      // console.log(evt.draggedContext.element.id)
    },
    end (ev) {
      console.log('所以 end')
      console.log(ev)
      console.log()
      if (ev.to.className === 'dragArea11') {
        // this.$set(this.list2[ev.oldIndex], 'flag', true)
        // this.$set(this.list2[ev.oldIndex], 'name', this.list2[ev.oldIndex].name + this.list2[ev.oldIndex].name)
        this.$set(this.list2[ev.oldIndex], 'name', this.list2[ev.oldIndex].name)
      }
    },
    datadragEnd: function (evt) {
      console.log('所以 updata')
      console.log('拖动前的索引：' + evt.oldIndex)
      console.log('拖动后的索引：' + evt.newIndex)
    },
    handleDel (index, id) {
      this.list1.splice(index, 1)
      let q = this.list2.find((value, index, arr) => {
        return value.id === id
      })
      console.log(q)
      this.$set(q, 'flag', false)
    },
    onChoose () {
      console.log('常用 onChoose')
    },
    start22 (event) {
      console.log('常用 start22')
      // console.log(event)
      // console.log(this.list1)
      this.falgs = '222222'
    },
    datadragEnd2 () {
      console.log('常用 updata')
    },
    end22 (ev) {
      console.log('常用 end')
      this.falgs = 'article'
    },
    addDrag (e) {
      console.log('常用 add')
      e.preventDefault()
    },
    dataFun () {
      console.log('常用 data')
    },
    // ==========
    dragleave (e) {
      console.log('常用 dragleave')
      e.preventDefault()
    },
    onDragover (e) {
      console.log('常用 onDragover')
      e.preventDefault()
    },
    onDrop (e) {
      console.log('常用 onDrop')
      // 业务代码
    }
  }
}
</script>

<style scoped>/*rel="stylesheet/scss" lang="scss"*/

  .list-complete-item {
    cursor: pointer;
    position: relative;
    font-size: 14px;
    padding: 5px 12px;
    display: inline-block;
    margin-right: 20px;
    width: 50px;
    height: 50px;
    border: 1px solid #bfcbd9;
    transition: all 1s;
  }

  .list-complete-item.sortable-chosen {
    background: #4AB7BD;
  }

  .list-complete-item.sortable-ghost {
    background: #30B08F;
  }
  .undraggable {
    background-color: red;
  }

  .list-complete-enter,
  .list-complete-leave-active {
    opacity: 0;
  }
</style>
