import {configureStore, createSlice} from '@reduxjs/toolkit'


const counterSlice = createSlice({
    name: 'user',
    initialState: {
      userAuth: null,
      
    },
    reducers: {
      setUserSignIn: (state,action) => {
        state.userAuth = action.payload
      },
      setUserSignOut: (state) => {
        state.userAuth = null;
      },
    },
  });
  
  export const actions  = counterSlice.actions;
  
 const store = configureStore({
    reducer: counterSlice.reducer,
  });

  export default store;
  


