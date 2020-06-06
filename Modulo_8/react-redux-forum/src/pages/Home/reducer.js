import { GET_THREADS, LOADING } from "./types";

const initialState = {
  threads: [],
  loading: false
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THREADS: {
      return {
        threads: action.payload,
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
