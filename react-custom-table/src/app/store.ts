import { configureStore } from '@reduxjs/toolkit'
import tableSlice from '../Table/TableSlice'
import { jmixMiddlewares } from '../bridge/middleware'

export const store = configureStore({
  reducer: {
    table: tableSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...jmixMiddlewares),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
