import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import groupReducer from '../slices/groupSlice';
import pagesReducer from '../slices/pagesSlice';
import sidebarReducer from '../slices/sidebarSlice';
import amountSlice from "../slices/amountSlice";

export default configureStore({
  reducer: {
    groups: groupReducer,
    amounts: amountSlice,
    pages: pagesReducer,
    sidebar: sidebarReducer
  },
  middleware: [thunk],
});