import {combineReducers} from 'redux';
import {reducer as cardReducer} from './card/reducers';

const reducer = combineReducers({
  card: cardReducer,
});

export {reducer};