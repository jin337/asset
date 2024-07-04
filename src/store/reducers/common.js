import { createSlice } from '@reduxjs/toolkit'
// 初始状态
const initialState = {
  theme: 'light',
  headerBreadcrumb: null,
}

export const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      sessionStorage.setItem('theme', action.payload)
      state.theme = action.payload
    },
    addHeaderBreadcrumb: (state, action) => {
      if (action.payload) {
        sessionStorage.setItem('headerBreadcrumb-title', action.payload)
      } else {
        sessionStorage.removeItem('headerBreadcrumb-title')
      }
      state.headerBreadcrumb = action.payload
    },
  },
})

export const { switchTheme, addHeaderBreadcrumb } = common.actions
export default common.reducer
