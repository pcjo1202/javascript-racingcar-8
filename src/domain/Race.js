import OutputView from '../view/OutputView';
import Car from './Car';

class Race {
  #cars;
  #count;

  constructor(cars, count) {
    this.#cars = cars.map((carName) => new Car(carName));
    this.#count = count;
  }

  get cars() {
    return this.#cars;
  }

  // 한 게임 진행 기능
  playOneGame() {
    this.#cars.forEach((car) => {
      car.move();
      car.printStatus();
    });
  }

  // 전체 게임 진행 기능
  playGame() {
    for (let i = 0; i < this.#count; i++) {
      this.playOneGame();
    }
  }

  // 우승자 결정
  findWinners() {
    const carsPosition = this.#cars.map((car) => car.position);
    const winnerList = [];

    const max = Math.max(...carsPosition);

    this.#cars.forEach((car) => {
      if (max === car.position) {
        winnerList.push(car);
      }
    });

    return winnerList;
  }

  // 우승자 출력
  printWinner() {
    const winnerList = this.findWinners();
    const winnerNames = winnerList.map((car) => car.name);

    const winner = winnerNames.join(', ');

    OutputView.printMessage(`최종 우승자 : ${winner}`);
  }
}

export default Race;
