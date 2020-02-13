/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'
const zRouter = {
  path: '/',
  component: Layout,
  children: [ {
      path: '/examination',
      component: () => import('@/views/examination/entrust'),
      name: 'entrust',
      meta: { title: '技术审查委托' }
    },{
      path: '/canvas',
      component: () => import('@/views/canvas/video'),
      name: 'video',
      meta: { title: '视频抓拍' }
    }]
}
export default zRouter
