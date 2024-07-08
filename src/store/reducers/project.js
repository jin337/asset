import { createSlice } from '@reduxjs/toolkit'
// 初始状态
const initialState = {
  projectData: [
    {
      key: '1',
      name: 'XM1001',
      name1: '纬六路、经十八路、恒竞路建设工程',
      name2: '新建',
      name3: '代建',
      name4: '市政基础设施/市政道路',
      name5: '开工建设',
    },
    {
      key: '2',
      name: 'XM1002',
      name1: '尧辰路以东、栖霞大道以南地块配套新三路一期工程 ',
      name2: '续建',
      name3: '自建',
      name4: '载体办公设施建设',
      name5: '已完工',
    },
  ],
  projectID: null,
}

export const project = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjectID: (state, action) => {
      state.projectID = action.payload
    },
  },
})

export const { setProjectID } = project.actions
export default project.reducer
