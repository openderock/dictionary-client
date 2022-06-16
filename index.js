const BASE_URL = 'https://cdn.jsdelivr.net/gh/openderock/dictionary';
function generatePath(word) {
  switch (word.length) {
    case 1:
      return word;
    case 2:
      return `${word[0]}/${word[1]}`;
    default:
      return `${word[0]}/${word[1]}/${word[2]}`;
  }
}

/**
 *
 * @param {String} word
 */
async function lookup(word) {
  const url = `${BASE_URL}/${generatePath(word)}/${word}.json`;
  return fetch(url)
    .then((res) => {
      if (res.ok) return res;
      else throw new Error(res.statusText);
    })
    .then((res) => res.json());
}
module.exports = {
  lookup,
};
