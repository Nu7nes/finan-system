import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGroups = createAsyncThunk('groups/fetchGroups', async () => {
    let response = fetch('/groups').then(res => res.json()).then(json => {
        return JSON.parse(json)
    })
    return response
});

export const addGroup = createAsyncThunk('groups/addGroup', async (name) => {
  try {
    const response = await fetch('/new/group', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name }) // Passa o nome como parâmetro
    });

    if (!response.ok) {
      throw new Error('Erro ao adicionar grupo');
    }

    const data = await response.json();
    return data; // Retorna a resposta da API se necessário
  } catch (error) {
    console.error('Erro:', error.message);
    throw error;
  }
});

export const removeGroup = createAsyncThunk('groups/removeGroup', async (id) => {
  try {
    const response = await fetch('/deleteGroup', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id }) // Passa o nome como parâmetro
    });

    if (!response.ok) {
      throw new Error('Erro ao adicionar grupo');
    }

    const data = await response.json();
    return data; // Retorna a resposta da API se necessário
  } catch (error) {
    console.error('Erro:', error.message);
    throw error;
  }
});

export const groupSlice = createSlice({
    name: 'groups',
    initialState: {
      data: [],
      loading: false,
      error: null
    },
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(fetchGroups.pending, state => {
          state.loading = true;
        })
        .addCase(fetchGroups.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchGroups.rejected, (state, action) => {
          state.loading = false;
          state.data = [];
          state.error = action.error.message;
        })
        .addCase(addGroup.fulfilled, (state, action) => {
          state.loading = false;
          state.data.push(action.payload); // Adiciona o novo grupo à lista de dados
        })
        .addCase(addGroup.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(removeGroup.fulfilled, (state, action) => {
          state.loading = false;
          state.data = state.data.filter(group => group.id !== action.payload.id); // Remove o grupo da lista de dados
        })
        .addCase(removeGroup.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
    
  });


// export const { add, remove } = groupSlice.actions

export const selectUser = state => state

export default groupSlice.reducer