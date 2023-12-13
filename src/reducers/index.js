import {combineReducers} from 'redux';
import dataReducer from './data';

// Combine all different reducers and after combining return them
export default combineReducers({dataReducer});