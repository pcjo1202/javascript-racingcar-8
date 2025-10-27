import ERROR_MESSAGE from '../src/constants/error-message.js';
import Validator from '../src/utils/validator.js';

describe('자동차 입력 검증 테스트', () => {
  test('자동차 이름이 비어있을 때 예외 발생', () => {
    expect(() => Validator.validateName('')).toThrow(
      ERROR_MESSAGE.CAR_NAME_EMPTY,
    );
  });

  test('자동차 이름이 5자 이상일 때 예외 발생', () => {
    expect(() => Validator.validateName('이름이다섯글자이상')).toThrow(
      ERROR_MESSAGE.CAR_NAME_LENGTH,
    );
  });

  test('자동차 이름이 중복될 때 예외 발생', () => {
    expect(() =>
      Validator.validateNamesDuplication(['pobi', 'jun', 'pobi']),
    ).toThrow(ERROR_MESSAGE.CAR_NAME_DUPLICATION);
  });
});

describe('경주 횟수 입력 검증 테스트', () => {
  test('경주 횟수가 숫자가 아닐 때 예외 발생', () => {
    expect(() => Validator.validateRaceCount('abc')).toThrow(
      ERROR_MESSAGE.COUNT_NO_NUMBER,
    );
  });

  test('경주 횟수가 0 이하일 때 예외 발생', () => {
    expect(() => Validator.validateRaceCount('0')).toThrow(
      ERROR_MESSAGE.COUNT_ZERO,
    );
  });

  test('경주 횟수가 소수점 입력 시 예외 발생', () => {
    expect(() => Validator.validateRaceCount('12.2')).toThrow(
      ERROR_MESSAGE.COUNT_DECIMAL,
    );
  });
});
