import ERROR_MESSAGE from '../constants/error-message';

class Validator {
  // 자동차 이름 검증
  static validateName(name) {
    // 이름이 비어있을 때
    if (name.length === 0) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_EMPTY);
    }
    // 이름이 5자 이상일 때
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH);
    }
  }

  // 자동자 이름 중복 체크
  static validateNamesDuplication(names = []) {
    const set = new Set(...names);

    if (set.size !== names.length) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_DUPLICATION);
    }
  }

  // 경주 횟수 검증
  static validateRaceCount(count) {
    if (isNaN(count)) {
      // 숫자가 아닐 때
      throw new Error(ERROR_MESSAGE.COUNT_NO_NUMBER);
    }
    // 소수점일 때
    if (Number(count) % 1 !== 0) {
      throw new Error(ERROR_MESSAGE.COUNT_DECIMAL);
    }
    // 0 이하일 때
    if (Number(count) <= 0) {
      throw new Error(ERROR_MESSAGE.COUNT_ZERO);
    }
  }
}

export default Validator;
