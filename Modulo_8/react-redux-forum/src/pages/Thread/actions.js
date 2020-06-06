import { GET_THREAD, LOADING } from "./types";

export function setLoading() {
  return {
    type: LOADING
  };
}

export function getThread(thread) {
  return {
    type: GET_THREAD,
    payload: thread
  };
}
