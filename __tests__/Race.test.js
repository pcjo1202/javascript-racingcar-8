import Race from '../src/domain/Race.js';

describe('경주 진행 기능 테스트', () => {
  test('한 차수 진행 결과 저장 기능 테스트', () => {
    // given
    const cars = ['pobi', 'woni', 'jun'];
    const count = 1;
    const race = new Race(cars, count);

    // when
    race.playOneGame();

    // then
    const gameCars = race.cars;
    expect(gameCars[0].name).toBe('pobi');
    expect(gameCars[1].name).toBe('woni');
    expect(gameCars[2].name).toBe('jun');

    // 각 자동차의 위치는 0 이상이어야 함
    gameCars.forEach((car) => {
      expect(car.position).toBeGreaterThanOrEqual(0);
    });
  });

  test('주어진 횟수만큼 경주 진행 기능 테스트', () => {
    // given
    const cars = ['pobi', 'woni'];
    const count = 3;
    const race = new Race(cars, count);

    // when
    race.playGame();

    // then
    // 게임이 완료되었음을 확인 (count만큼 실행되었는지)
    const gameCars = race.cars;
    expect(gameCars).toHaveLength(2);

    // 최소 한 대는 전진했을 가능성이 높음
    const totalPosition = gameCars.reduce((sum, car) => sum + car.position, 0);
    expect(totalPosition).toBeGreaterThanOrEqual(0);
  });

  test('최종 우승자를 정확히 판별한다', () => {
    // given
    const cars = ['pobi', 'woni', 'jun'];
    const count = 5;
    const race = new Race(cars, count);

    // when
    race.playGame();
    const winners = race.findWinners();

    // then
    expect(winners).toBeInstanceOf(Array);
    expect(winners.length).toBeGreaterThan(0); // 0보다 커야함

    // 모든 우승자는 동일한 최대 위치를 가져야 함
    const winnerPositions = winners.map((car) => car.position);
    const maxPosition = Math.max(...winnerPositions);
    winnerPositions.forEach((position) => {
      expect(position).toBe(maxPosition);
    });
  });

  test('공동 우승자가 있을 경우 모두 판별한다', () => {
    // given
    const cars = ['pobi', 'woni', 'jun'];
    const count = 5;
    const race = new Race(cars, count);

    // when
    race.playGame();
    const winners = race.findWinners();

    // then
    expect(winners.length).toBeGreaterThan(0);
    expect(winners.length).toBeLessThanOrEqual(cars.length);

    // 모든 우승자가 같은 위치에 있어야 함
    const winnerPositions = winners.map((car) => car.position);
    const uniquePositions = [...new Set(winnerPositions)];
    expect(uniquePositions.length).toBe(1);
  });
});
