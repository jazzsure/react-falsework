
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import main from './main';
const rootReducer = combineReducers({
  routing: routerReducer,
  main
});

export default rootReducer;
