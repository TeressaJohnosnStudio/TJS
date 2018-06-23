import {
  OPEN_NAV,
  CLOSE_NAV
} from '../actions/navActions';

const initialState = {
  isOpen: false
}

const navReducer = (state = initialState, action) => {
  switch (action.type) {

    case OPEN_NAV:
      return { ...state, isOpen: action.isOpen }

    case CLOSE_NAV:
      return { ...state, isOpen: action.isOpen }

    default:
      return state;
  }
}

export default navReducer;
