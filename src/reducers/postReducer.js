import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
