import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/AuthSlice'
import cuisineReducer from "./slices/AuthSlice";

export default configureStore({
  reducer: {
   auth: authReducer,
    cuisine: cuisineReducer,
  },
})

// redux/store.js
// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './slices/AuthSlice'

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// })

// export default store
