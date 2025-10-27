import OutputView from '../view/OutputView.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  move(randomNumber) {
    if (randomNumber >= 4) this.#position++;
  }

  printStatus() {
    const status = '-'.repeat(this.#position);
    OutputView.printMessage(`${this.#name} : ${status}\n`);
  }
}

export default Car;
