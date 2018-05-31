const fetchJson = url => fetch(url).then(res => res.json());

const baseUrl = "https://hacker-news.firebaseio.com/v0/"

export const getItemsIds = () => {
  return fetchJson(`${baseUrl}topstories.json`)
};

export const getItem = (id) => {
  return fetchJson(`${baseUrl}item/${id}.json`)
}

export default { getItem, getItemsIds };
