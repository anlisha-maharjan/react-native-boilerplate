import {combineReducers} from 'redux';
import auth from '@myapp/reduxs/auth/reducer';

const reducers = combineReducers({
  auth,
});

export default reducers;
