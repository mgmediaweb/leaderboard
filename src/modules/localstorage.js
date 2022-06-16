export default class Storage {
  constructor() {
    return null;
  }

  static get() {
    const info = JSON.parse(localStorage.getItem('game'));
    if (info) return info;
    return null;
  }

  static set(game) {
    localStorage.setItem('game', JSON.stringify(game));
  }

  static clear() {
    localStorage.clear();
  }
}