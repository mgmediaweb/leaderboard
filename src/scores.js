const players = [
    {
      name: 'Jhon Tomac',
      score: 154,
    },
    {
      name: 'Tinker Juarez',
      score: 137,
    },
    {
      name: 'Ned Overend',
      score: 128,
    },
    {
      name: 'Brad Brenjens',
      score: 121,
    },
    {
      name: 'Tomas Frishnet',
      score: 113,
    },
  ];

export default class Scores {
  constructor() {
    return null;
  }

  static add(name, score) {
    console.log(`${name} ==> ${score}`);
  }

  static show() {
    let content = '';
    board.innerHTML = '';

    players.map((item, index) => {
      let showClass = 'art-odd';
      if (index % 2) showClass = 'art-even';

      content += `<article class="${showClass}"><p>${item.name}</p><p>${item.score}</p></article>`;
      return true;
    });

    board.innerHTML = content;
  }
}