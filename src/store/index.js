import { configureStore } from '@reduxjs/toolkit'

import commonReducer from './reducers/common'
import projectReducer from './reducers/project'

export const store = configureStore({
  reducer: {
    common: commonReducer,
    project: projectReducer,
  },
})
