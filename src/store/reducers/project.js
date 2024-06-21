import { createSlice } from '@reduxjs/toolkit'
// 初始状态
const initialState = {
  title: "",
}

export const project = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addTitle: (state, action) => {
      if (action.payload) {
        sessionStorage.setItem('project-title', action.payload)
      } else {
        sessionStorage.removeItem('project-title')
      }
      state.title = action.payload
    },
  },
})

export const { addTitle } = project.actions
export default project.reducer
