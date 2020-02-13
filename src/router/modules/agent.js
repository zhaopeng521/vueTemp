/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'
const agentRouter = {
  path: '/',
  component: Layout,
  // redirect: 'agent',
  children: [{
    path: '/agent',
    component: () => import('@/views/agent-organisations/agent-organisation'),
    name: 'agent',
    meta: { title: '中介机构' },
    children: [{
      path: 'organizationEnter',
      component: () => import('@/views/agent-organisations/organization-enter'),
      name: 'organizationEnter'
    }, {
      path: 'serviceEnter',
      component: () => import('@/views/agent-organisations/service-enter'),
      name: 'serviceEnter'
    }, {
      path: 'putEnter',
      component: () => import('@/views/agent-organisations/put-enter'),
      name: 'putEnter'
    }, {
      path: 'promiseList',
      component: () => import('@/views/agent-organisations/promise-list'),
      name: 'promiseList'
    }]
  }]
}
export default agentRouter
