import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '/drag',
      name: 'Drag',
      component: resolve => require(['@/components/test/drag'], resolve)
    },
    {
      path: '/dragDiv',
      name: 'DragDiv',
      component: resolve => require(['@/components/test/dragDiv'], resolve)
    },
    {
      path: '/draggable',
      name: 'Draggable',
      component: resolve => require(['@/components/test/draggable'], resolve)
    },
    {
      path: '/clone',
      name: 'Clone',
      component: resolve => require(['@/components/test/clone'], resolve)
    },
    {
      path: '/twoclone',
      name: 'TwoListAddDraggable',
      component: resolve => require(['@/components/test/twoListAddDraggable'], resolve)
    }
  ]
})
