import { createStore } from 'redux';
import tttApp from './reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    tttApp,
    persistedState
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};

export default configureStore;
