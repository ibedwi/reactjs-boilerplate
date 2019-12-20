/**
 * This file contains all defined reducer and combine it using redux's combineReducers()
 */

import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer.reducer';

export default combineReducers({
  exampleReducer,
  // add your own reducers here...
})