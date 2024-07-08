import { createSlice } from '@reduxjs/toolkit'
// 初始状态
const initialState = {
  mainMenu: [],
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
