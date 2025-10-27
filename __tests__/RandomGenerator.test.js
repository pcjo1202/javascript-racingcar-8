import { randomGenerator } from '../src/utils/random-generator';

describe('무작위 수 생성 테스트', () => {
  test('무작위 수 생성 기능 테스트', () => {
    // given, when
    const randomNumber = randomGenerator();

    // then
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(9);
  });
});
