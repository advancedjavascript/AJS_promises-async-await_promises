import GameSavingData from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => {
        const val = new GameSavingData(result);
        return (val);
      })
      .then((val) => {
        const arr = val.json();
        return (arr);
      });
  }
}
