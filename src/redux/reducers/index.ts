import { combineReducers } from 'redux';

// reducers
import { auth as authReducer } from './auth';
import { parcel as parcelReducer } from './parcel';

export const rootReducer = combineReducers({
   auth: authReducer,
   parcel: parcelReducer,
});

export type RootState = ReturnType<typeof rootReducer>