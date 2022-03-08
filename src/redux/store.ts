import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userSlice from './slices/userSlice'

export const store = configureStore({
  reducer: userSlice,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types

export default store