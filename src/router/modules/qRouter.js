/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'
const qRouter = {
  path: '/',
  component: Layout,
  children: [{
    path: '/agentManage',
    component: () => import('@/views/agent-manages/agent-manage'),
    name: 'agentManage',
    meta: { title: '中介管理' }
  },{
    path: '/agent',
    component: () => import('@/views/agent-organisations/agent-organisation'),
    name: 'agent',
    meta: { title: '中介机构' }
    },{
      path: '/publicAgent',
      component: () => import('@/views/public-agents/public-agent'),
      name: 'publicAgent',
      meta: { title: '中介公示' }
    }]
  }
export default qRouter
