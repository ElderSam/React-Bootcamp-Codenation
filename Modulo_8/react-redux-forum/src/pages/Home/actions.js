import { GET_THREADS, LOADING } from "./types";

export function setLoading() {
  return {
    type: LOADING
  };
}

export function getThreads(threads) {
  return {
    type: GET_THREADS,
    payload: threads
  };
}
