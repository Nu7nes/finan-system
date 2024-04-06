import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {open: false},
    reducers: {
        changePage(state, {payload}) {
            let s = state.open
            state.open = !s
        }
    }
});


export const { changePage } = sidebarSlice.actions

export const sideBar = state => state

export default sidebarSlice.reducer
