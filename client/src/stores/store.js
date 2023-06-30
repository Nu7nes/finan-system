import { configureStore } from "@reduxjs/toolkit";
import groupReducer from '../slices/groupSlice'
import { fetchGroups } from "../slices/groupSlice";



export default configureStore({
    reducer: {
      groups: groupReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(fetchGroups),
  });
  