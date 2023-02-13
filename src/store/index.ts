import { configureStore } from '@reduxjs/toolkit'
import recommendReducer from './modules/discover/recommend'

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})

export type IRootState = ReturnType<typeof store.getState>
export type IDispatch = typeof store.dispatch

export default store
