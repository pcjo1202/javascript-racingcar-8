import inputValidator from '../src/utils/validator';

describe('자동차 입력 검증 테스트', () => {
  test('자동차 이름이 비어있을 때 예외 발생', () => {
    expect(() => inputValidator.validateName('').toThrow());
  });

  test('자동차 이름이 5자 이상일 때 예외 발생', () => {
    expect(() => inputValidator.validateNames('이름이다섯글자이상').toThrow());
  });

  test('자동차 이름이 중복될 때 예외 발생', () => {
    expect(() =>
      inputValidator.validateNames(['pobi', 'jun', 'pobi']).toThrow(),
    );
  });
});

describe('경주 횟수 입력 검증 테스트', () => {
  test('경주 횟수가 숫자가 아닐 때 예외 발생', () => {
    expect(() => inputValidator.validateRaceCount('abc').toThrow());
  });

  test('경주 횟수가 0 이하일 때 예외 발생', () => {
    expect(() => inputValidator.validateRaceCount('0').toThrow());
  });

  test('경주 횟수가 소수점 입력 시 예외 발생', () => {
    expect(() => inputValidator.validateRaceCount('12.2').toThrow());
  });
});
