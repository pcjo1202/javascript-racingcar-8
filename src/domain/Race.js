import { randomGenerator } from '../utils/random-generator.js';
import OutputView from '../view/OutputView.js';
import Car from './Car.js';

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
      const random_number = randomGenerator();
      car.move(random_number);
      car.printStatus();
    });
    OutputView.printMessage(`\n`);
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
