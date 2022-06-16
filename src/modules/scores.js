import Config from './config.js';

const board = document.getElementById('board');

const showScores = (scores) => {
  let content = '';
  board.innerHTML = '';

  if (scores.length) {
    scores.map((item, index) => {
      let showClass = 'art-odd';
      if (index % 2) showClass = 'art-even';

      content += `<article class="${showClass}"><p>${item.user}</p><p>${item.score}</p></article>`;
      return true;
    });
  } else {
    content += '<div class="score-empty"><p>No scores availables</p></div>';
  }

  board.innerHTML = content;
};

const getData = async (id) => {
  const response = await fetch(`${Config.API}games/${id}/scores`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const results = await response.json();
  showScores(results.result);
};

const addData = async (id, user, score) => {
  const response = await fetch(`${Config.API}games/${id}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score: Number(score),
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  await response.json();
  getData(id);
};

export default class Scores {
  constructor() {
    return null;
  }

  static add(id, user, score) {
    addData(id, user, score);
  }

  static get(id) {
    getData(id);
  }
}