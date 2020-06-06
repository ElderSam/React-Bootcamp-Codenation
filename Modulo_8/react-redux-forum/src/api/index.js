import threads from "../data/threads.json";
import replies from "../data/replies.json";

function api(slug) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (slug) {
        resolve(replies[slug]);
      } else {
        resolve(threads);
      }
    }, 1500);
  });
}

function getThreads() {
  return api()
    .then(response => response)
    .catch(e => []);
}

function getThread(slug) {
  return api(slug)
    .then(response => response)
    .catch(e => {});
}

export default { getThreads, getThread };
