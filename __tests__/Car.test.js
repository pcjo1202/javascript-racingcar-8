import Car from '../src/domain/Car.js';

describe('자동차 도메인 테스트', () => {
  test('자동차는 이름과 초기 위치 0을 가진다.', () => {
    // given
    const name = 'pobi';

    // when
    const car = new Car(name);

    // then
    expect(car.name).toBe(name);
    expect(car.position).toBe(0);
  });

  test('자동차는 무작위 수가 4이상일 경우 전진한다.', () => {
    // given
    const name = 'pobi';
    const car = new Car(name);

    // when
    car.move(5);

    // then
    expect(car.position).toBe(1);
  });

  test('자동차는 무작위 수가 4보다 작을 경우, 멈춘다.', () => {
    // given
    const name = 'pobi';
    const car = new Car(name);

    // when
    car.move(2);

    // then
    expect(car.position).toBe(0);
  });
});
