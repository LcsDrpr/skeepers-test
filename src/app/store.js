// import { configureStore } from "@reduxjs/toolkit";
// import { usersSlice } from "../pages/Home/usersSlice";

import { configureStore } from "@reduxjs/toolkit";
import userInfosReducer from "../feature/userInfosSlice";

// export default configureStore({
//   reducer: {
//     user: usersSlice.reducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export default store;

export default configureStore({
  reducer: {
    userInfos: userInfosReducer,
  },
});
