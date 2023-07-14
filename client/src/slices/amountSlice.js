import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAmountsById = createAsyncThunk('amounts/fetchAmountsById', async (id) => {
    let response = fetch(`/amounts/${id}`).then(res => res.json()).then(json => {
        return JSON.parse(json)
    })
    return response
});

export const addAmount = createAsyncThunk('amounts/addAmount', async (object) => {
  try {
    const response = await fetch('/new/amount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object) // Passa o nome como parâmetro
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

// export const removeGroup = createAsyncThunk('groups/removeGroup', async (id) => {
//   try {
//     const response = await fetch('/deleteGroup', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ id: id }) // Passa o nome como parâmetro
//     });

//     if (!response.ok) {
//       throw new Error('Erro ao adicionar grupo');
//     }

//     const data = await response.json();
//     return data; // Retorna a resposta da API se necessário
//   } catch (error) {
//     console.error('Erro:', error.message);
//     throw error;
//   }
// });

export const amountSlice = createSlice({
    name: 'amounts',
    initialState: {
      data: [],
      loading: false,
      error: null
    },
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(fetchAmountsById.pending, state => {
          state.loading = true;
        })
        .addCase(fetchAmountsById.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchAmountsById.rejected, (state, action) => {
          state.loading = false;
          state.data = [];
          state.error = action.error.message;
        })
        .addCase(addAmount.fulfilled, (state, action) => {
          state.loading = false;
          state.data.push(action.payload); // Adiciona o novo grupo à lista de dados
        })
        .addCase(addAmount.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        // .addCase(removeGroup.fulfilled, (state, action) => {
        //   state.loading = false;
        //   state.data = state.data.filter(group => group.id !== action.payload.id); // Remove o grupo da lista de dados
        // })
        // .addCase(removeGroup.rejected, (state, action) => {
        //   state.loading = false;
        //   state.error = action.error.message;
        // });
    },
    
  });


// export const { add, remove } = amountSlice.actions

export const selectUser = state => state

export default amountSlice.reducer