import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    config: {
        color_mode: 'dark',
    },
    data: {
        user: {},
        app: {}
    },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser(state, { payload }) {
            state.isLoggedIn = true;
            state.data = payload;
        },
        removeUser(state, { payload }) {
            state.isLoggedIn = false;
            state.data = {};
        },
        switchColorMode(state, { payload }) {
            state.config.color_mode = payload;
        },
    },
});

export const { addUser, removeUser, switchColorMode } = userSlice.actions;

export default userSlice.reducer;
