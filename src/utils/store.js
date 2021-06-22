/**
 * @returns {Store --> GlobalStateOfApp}
 */
 import { configureStore } from "@reduxjs/toolkit";
 import AppReducer from 'src/utils/GeneralSlice';
 export default configureStore({reducer:{cryptoAppState: AppReducer}});