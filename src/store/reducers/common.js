import { createSlice } from '@reduxjs/toolkit'
// 初始状态
const initialState = {
  theme: 'light',
}

export const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      sessionStorage.setItem('theme', action.payload)
      state.theme = action.payload
    },
  },
})

export const { switchTheme } = common.actions
export default common.reducer
