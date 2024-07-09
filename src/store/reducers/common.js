import { createSlice } from '@reduxjs/toolkit'
// 初始状态
const initialState = {
  theme: 'light',
  logo: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract.jpg',
  mainMenu: [],
}

export const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      sessionStorage.setItem('theme', action.payload)
      state.theme = action.payload
    },
    setMainMenu: (state, action) => {
      state.mainMenu = action.payload
    },
  },
})

export const { switchTheme, setMainMenu } = common.actions
export default common.reducer
