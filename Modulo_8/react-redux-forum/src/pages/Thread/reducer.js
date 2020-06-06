import { GET_THREAD, LOADING } from "./types";

const initialState = {
  thread: {},
  loading: false
};

export default function threadReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THREAD: {
      return {
        thread: action.payload,
        loading: false
      };
    }

    case LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    default:
      return state;
  }
}
