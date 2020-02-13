/** 管理系统的路由**/

import mLayout from '@/layout/mLayout.vue'
const mRouter = {
    path: '/mLayout',
    component: mLayout,
    hidden: true,
    children: [
      {
        path: '/mLayout/dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      },{
	      path: '/mLayout/examination',
	      component: () => import('@/views/examination/entrust'),
	      name: 'entrust',
	      meta: { title: '技术审查委托' }
	    }
    ]
  }
export default mRouter
