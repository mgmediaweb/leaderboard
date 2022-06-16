import Scores from './scores.js';
import './style.css';

const form = document.getElementById('formAddScore');

Scores.show();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name');
  const score = document.getElementById('score');

  Scores.add(name.value, score.value);
  name.value = '';
  score.value = '';
});
