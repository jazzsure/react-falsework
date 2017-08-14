import { createStore } from 'redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers';

export default function configStore(initialState) {
  const store = createStore(rootReducer, initialState, 
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}