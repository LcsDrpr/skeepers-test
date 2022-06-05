import { createSlice } from "@reduxjs/toolkit";

export const userInfosSlice = createSlice({
  name: "userInfos",
  initialState: {
    userInfos: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userInfos = action.payload;
    },
  },
});

export const { setUserData } = userInfosSlice.actions;
export default userInfosSlice.reducer;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   title: string;
//   city: string;
// }

// const initialState: User[] = [
//   {
//     firstName: "",
//     lastName: "",
//     email: "",
//     title: "",
//     city: "",
//   },
// ];

// export const usersSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     addUser: (state, action: PayloadAction<any>) => {
//       return [action.payload, ...state];
//     },
//   },
// });

// export const { addUser } = usersSlice.actions;
