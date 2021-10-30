import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';

// Reducer
import { rootReducer } from './reducers';


const middlewares = [thunk]

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
})

export default store;
