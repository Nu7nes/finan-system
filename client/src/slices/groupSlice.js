import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Group from '../components/Group';

export const fetchGroups = createAsyncThunk('groups/fetchGroups', async () => {
    // const response = await fetch('/groups');
    // const data = response.json();
    // return data;
    let response = fetch('/groups').then(res => res.json()).then(json => {
        return JSON.parse(json)
    })
    return response
});

export const slice = createSlice({
    name: 'groups',
    initialState: [],
    reducers: {
        add(state, { payload }) {
            let newGroup = new Group(payload)
            return [...state, newGroup]
        },
        remove(state, { payload }) {
            return state.filter(group => group.id !== payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGroups.pending, (state) => {
            return (state = {
                ...state,
                loading: true
            })
        })
        builder.addCase(fetchGroups.fulfilled, (state, action) => {
            // return (state = {
            //     ...state,
            //     loading: false,
            //     groups: action.payload,
            //     error: '',
            // })
            // Atualize o estado com os dados da API
            return action.payload;
        })
        builder.addCase(fetchGroups.rejected, (state, action) => {
            return (state = {
                ...state,
                loading: false,
                groups: [],
                error: action.error.message
            })
        });
    },
})


export const { add, remove } = slice.actions

export const selectUser = state => state

export default slice.reducer