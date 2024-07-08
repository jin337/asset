import { createSlice } from '@reduxjs/toolkit'
// 初始状态
const initialState = {
  name: '123',
}

export const project = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { setName } = project.actions
export default project.reducer
