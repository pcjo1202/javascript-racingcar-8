import Validator from '../utils/validator';
import { MissionUtils } from '@woowacourse/mission-utils';

class InputView {
  // 자동차 이름 입력
  async readCarName() {
    const input = await MissionUtils.Console.readLineAsync('');

    // 유효성 검사
    Validator.validateName(input);

    return input;
  }

  // 경주 횟수 입력
  async readRaceCount() {
    const input = await MissionUtils.Console.readLineAsync('');

    // 유효성 검사
    Validator.validateRaceCount(input);

    return input;
  }
}

export default InputView;
