
const menuData = [{
  'name': '首页',
  'link': '/home',
  'children': []
}, {
  'name': '中介管理',
  'link': '/agentManage',
  'children': []
}, {
  'name': '中介机构',
  'link': '/agent',
  'children': []
}, {
  'name': '委托办理',
  'link': '/examination',
  'children': []
}, {
  'name': '中介公示',
  'link': '/publicAgent',
  'children': []
}, {
  'name': '系统管理',
  'link': '/components/tinymce',
  'children': [{
    'link': '/mLayout/dashboard',
    'name': '用户管理'
  }, {
    'link': '/components/markdown',
    'name': '用户管理1'
  }]
}]

export {
  menuData
}
