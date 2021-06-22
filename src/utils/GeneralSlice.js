/**
 * @slice
 * @returns {AppToken ,userDetails ... Etc,Reducer}
 */

 import { createSlice} from "@reduxjs/toolkit";
 import { REDUX_GLOBAL_STATE } from 'src/config/app';
  
 export const AppSlice = createSlice({
   name: REDUX_GLOBAL_STATE,
   initialState: {
      Listofcrypro:[] 
   },
   reducers: {
     updateListofCrypto: (state, action) => {
       state.Listofcrypro = action.payload;
     },
   },
   extraReducers: {},
 });
 
 /**
  * @Action
  * @creator
  * @generate_Each_reducer
  */
 export const {
    updateListofCrypto,
 } = AppSlice.actions;
 export default AppSlice.reducer;