const PREFIX = '[ERROR]';

const ERROR_MESSAGE = {
  // 자동차 이름이 비었을 때
  CAR_NAME_EMPTY: `${PREFIX} 자동차 이름이 비어있습니다.`,
  // 자동차 이름이 5자 이상일 때
  CAR_NAME_LENGTH: `${PREFIX} 자동차 이름이 5자 이상입니다.`,
  // 자동차 이름이 중복이 있을 때
  CAR_NAME_DUPLICATION: `${PREFIX} 자동차 이름에 중복이 있습니다.`,
  // 경주 횟수가 숫자가 아닐 때
  COUNT_NO_NUMBER: `${PREFIX} 경주 횟수가 숫자가 아닙니다.`,
  // 경주 횟수가 0 이하일 때
  COUNT_ZERO: `${PREFIX} 경주 횟수가 0보다 작습니다.`,
  // 경주 횟수가 소수점일 때
  COUNT_DECIMAL: `${PREFIX} 소수점은 사용할 수 없습니다.`,
};

export default ERROR_MESSAGE;
