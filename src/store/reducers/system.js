import { createSlice } from '@reduxjs/toolkit'
// 初始状态
const initialState = {
  mainMenu: [
    {
      sort: 1,
      itemKey: 'dashboard',
      text: '工作台',
      icon: 'IconDesktop',
      path: '/dashboard',
      componenPath: 'pages/Dashboard',
      isOut: 0,
      isHide: 0,
    },
    {
      sort: 2,
      itemKey: 'project',
      text: '项目',
      icon: 'IconApps',
      path: '/project',
      componenPath: 'pages/Project',
      isOut: 0,
      isHide: 0,
    },
    {
      sort: 3,
      itemKey: 'standard',
      text: '标准',
      icon: 'IconFile',
      path: '/standard',
      componenPath: 'pages/Standard',
      isOut: 0,
      isHide: 0,
    },
    {
      sort: 4,
      itemKey: 'user',
      text: '用户',
      icon: 'IconUser',
      path: '/user',
      componenPath: 'pages/User',
      isOut: 0,
      isHide: 0,
    },
    {
      sort: 5,
      itemKey: 'analyse',
      text: '分析',
      icon: 'IconExperiment',
      path: '/analyse',
      componenPath: 'pages/Analyse',
      isOut: 0,
      isHide: 0,
    },
    {
      sort: 6,
      itemKey: 'system',
      text: '系统',
      icon: 'IconSettings',
      path: '/system',
      componenPath: 'pages/System',
      isOut: 0,
      isHide: 0,
      children: [
        {
          sort: 1,
          itemKey: 'system',
          text: '菜单',
          icon: 'IconSettings',
          path: '/system/menu',
          componenPath: 'pages/system/Menu',
          isOut: 0,
          isHide: 0,
        },
        {
          sort: 2,
          itemKey: 'role',
          text: '角色',
          icon: 'IconSettings',
          path: '/system/role',
          componenPath: 'pages/system/role',
          isOut: 0,
          isHide: 0,
        },
        {
          sort: 3,
          itemKey: 'department',
          text: '部门',
          icon: 'IconSettings',
          path: '/system/department',
          componenPath: 'pages/system/department',
          isOut: 0,
          isHide: 0,
        },
        {
          sort: 4,
          itemKey: 'dictionaries',
          text: '字典',
          icon: 'IconSettings',
          path: '/system/dictionaries',
          componenPath: 'pages/system/dictionaries',
          isOut: 0,
          isHide: 0,
        },
      ],
    },
  ],
}

export const project = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setMainMenu: (state, action) => {
      state.mainMenu = action.payload
    },
  },
})

export const { setMainMenu } = project.actions
export default project.reducer
