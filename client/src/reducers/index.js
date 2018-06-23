import { combineReducers } from 'redux';
import posts from './blogReducer';
import nav from './navReducer';

export default combineReducers({
  posts,
  nav
});
