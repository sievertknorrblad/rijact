// `by`—The username of the item's author.
// `descendants`—In the case of stories or polls, the total comment count.
// `id`—The item's unique id.
// `score`—The story's score, or the votes for a pollopt.
// `time`—Creation date of the item, in Unix Time (seconds).
// `title`—The title of the story, poll or job.
// `type`—The type of item. One of "job", "story", "comment", "poll", or "pollopt".
// `url`—The URL of the story.

// helpers
const fetchJson = url => fetch(url).then(res => res.json());
const first10 = arr => arr.slice(0, 10);

export const getItemsIds = () => {
  return fetchJson('https://hacker-news.firebaseio.com/v0/topstories.json')
  .then(data => {
    return Promise.resolve(first10(data))
  })
};

export const getItem = (id) => {
  return fetchJson(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
}

export default { getItem, getItemsIds };
