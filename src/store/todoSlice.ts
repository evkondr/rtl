import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { isAxiosError } from 'axios';
interface TodosState {
  todos:  { 
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }[] | []
}

export const fetchTodos = createAsyncThunk<{ 
  userId: number,
  id: number,
  title: string,
  completed: boolean
}[] | [], undefined, { rejectValue: string }>('todos/fetch', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  } catch (error) {
    if(isAxiosError(error)) {
     return rejectWithValue(error.message)
    }
    return rejectWithValue('unknown error')
  }
});


// Define the initial state using that type
const initialState: TodosState = {
  todos: []
}

export const todosSlice = createSlice({
  name: 'todos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload
    })
  }
})

export default todosSlice.reducer