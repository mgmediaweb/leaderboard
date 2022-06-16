import Scores from './modules/scores.js';
import Storage from './modules/localstorage.js';
import createGame from './modules/create.js';
import './style.css';

const formAdd = document.getElementById('formAddScore');
const formCreate = document.getElementById('formCreateGame');
const btnGameNew = document.getElementById('btnGameNew');

const gameInfo = Storage.get();

if (gameInfo) {
  const gameField = document.getElementById('game');
  gameField.value = gameInfo.name;
  gameField.setAttribute('disabled', 'disabled');
  document.getElementById('btnGameCreate').style.display = 'none';
  document.getElementById('btnGameNew').style.display = 'block';
  Scores.get(gameInfo.id);
} else {
  document.getElementById('btnAdd').setAttribute('disabled', 'disabled');
  document.getElementById('btnRefresh').setAttribute('disabled', 'disabled');
}

const refresh = () => Scores.get(gameInfo.id);
window.refresh = refresh;

btnGameNew.addEventListener('click', () => {
  Storage.clear();
  window.location.reload();
});

formAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  const user = document.getElementById('user');
  const score = document.getElementById('score');

  Scores.add(gameInfo.id, user.value, score.value);
  user.value = '';
  score.value = '';
});

formCreate.addEventListener('submit', (event) => {
  event.preventDefault();
  const game = document.getElementById('game');
  createGame(game.value, Storage);
});
