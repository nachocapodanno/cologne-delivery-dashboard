import { combineReducers } from 'redux';

// reducers
import { auth as authReducer } from './auth';

export const rootReducer = combineReducers({
   auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>