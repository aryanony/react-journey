import {configureStore} from '@reduxjs/toolkit'
import studentReducer from './studentSlice.js'

//creating the stor by using ConfigureStore() function
 const store = configureStore({
 	reducer:{
 		students:studentReducer,
 	},
 })

 export default store