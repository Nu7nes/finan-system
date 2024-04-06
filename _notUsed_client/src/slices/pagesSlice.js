import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
    name: 'pages',
    initialState: {
        loading: false,
        current: 'dashboard'
    },
    reducers: {
        change(state, { payload }) {
            // state.data.push(new Group(payload));
            state.current = payload
        }
    }
});


export const { change } = pageSlice.actions

export const selectPage = state => state

export default pageSlice.reducer
