<template>
  <div class="root page">
    <SortableList lockAxis="y" v-model="items">
      <SortableItem v-for="(item, index) in items" :index="index" :key="index" :item="item"/>
    </SortableList>
  </div>
</template>

<script>
import {ContainerMixin, ElementMixin} from 'vue-slicksort'
const SortableList = {
  mixins: [ContainerMixin],
  template: `
  <div class="list">
    <slot />
  </div>
`
}
const SortableItem = {
  mixins: [ElementMixin],
  props: ['item'],
  template: `
  <div class="list-item">
    <div class="ss" @click.stop="fun($event)" style="height:30px;">
          <label class="sss">{{item}}</label>
          <label class="sss">{{item}}12</label>
          <label class="sss">{{item}}23</label>
    </div>
  </div>
`
}
export default {
  name: 'createplan3',
  mixins: [ContainerMixin, ElementMixin],
  props: ['item'],
  components: {
    SortableItem,
    SortableList
  },
  data () {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']
    }
  },
  methods: {
    fun () {
      console.log('se')
    }
  }
}
</script>
<style scoped>
  .list{
    width: 1000px;
    margin-left: 100px;
  }
  .list-item{
    width:500px;
    height: 100px;
    margin: 100px auto;
    border: 1px solid #333;
  }
  .ss{
    width: 40px;
    height: 40px !important;
    background-color: #39f;
  }
</style>
