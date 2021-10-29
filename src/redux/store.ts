import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducer
import reducer from './reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state:any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};

const peristedState = loadState();

const middleware = [thunk];

const store = createStore(
  reducer,
  peristedState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
