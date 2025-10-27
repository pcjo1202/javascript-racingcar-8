import Race from './domain/Race.js';
import InputView from './view/InputView.js';

class App {
  async run() {
    // 1. 자동차 이름 입력 받기
    const inputCarNames = await InputView.readCarName();
    const cars = inputCarNames.split(',');
    // 2. 경주 횟수 입력 받기
    const inputRaceCount = await InputView.readRaceCount();

    const race = new Race(cars, Number(inputRaceCount));

    // 3. 경주 진행
    race.playGame();

    // 4. 최종 우승자 출력
    race.printWinner();
  }
}

export default App;
