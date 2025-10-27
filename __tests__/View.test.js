import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../src/view/InputView';
import OutputView from '../src/view/OutputView';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('입력 기능 테스트', () => {
  test('경주 횟수 입력 기능 테스트', async () => {
    // given
    const input = '5';
    mockQuestions([input]);

    // when
    const inputView = new InputView();
    const result = await inputView.readRaceCount();

    // then
    expect(result).toBe(input);
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith('');
  });

  test('쉼표로 구분된 여러 자동차 이름을 입력받는다', async () => {
    // given
    const input = 'car1,car2,car3,car4';
    mockQuestions([input]);

    // when
    const inputView = new InputView();
    const result = await inputView.readCarName();

    // then
    expect(result).toBe(input);
    const carNames = result.split(',');
    expect(carNames).toHaveLength(4);
    expect(carNames[0]).toBe('car1');
    expect(carNames[3]).toBe('car4');
  });
});

describe('출력 기능 테스트', () => {
  test('차수별 실행 결과 출력 기능 테스트', () => {
    // given
    const logSpy = getLogSpy();
    const message = 'pobi : --\nwoni : ---\njun : -';

    // when
    OutputView.printMessage(message);

    // then
    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test('최종 우승자 출력 기능 테스트', () => {
    // given
    const logSpy = getLogSpy();
    const winnerMessage = '최종 우승자 : pobi';

    // when
    OutputView.printMessage(winnerMessage);

    // then
    expect(logSpy).toHaveBeenCalledWith(winnerMessage);
    expect(logSpy).toHaveBeenCalledTimes(1);
  });

  test('공동 우승자 출력 기능 테스트', () => {
    // given
    const logSpy = getLogSpy();
    const winnerMessage = '최종 우승자 : pobi, jun';

    // when
    OutputView.printMessage(winnerMessage);

    // then
    expect(logSpy).toHaveBeenCalledWith(winnerMessage);
    expect(winnerMessage).toContain('최종 우승자 :');
    expect(winnerMessage).toContain('pobi, jun');
  });

  test('에러 메시지 출력 기능 테스트', () => {
    // given
    const logSpy = getLogSpy();
    const errorMessage = '[ERROR] 자동차 이름이 비어있습니다.';

    // when
    OutputView.printMessage(errorMessage);

    // then
    expect(logSpy).toHaveBeenCalledWith(errorMessage);
    expect(errorMessage).toContain('[ERROR]');
  });

  test('여러 메시지를 순차적으로 출력한다', () => {
    // given
    const logSpy = getLogSpy();
    const messages = ['실행 결과', 'pobi : --', '최종 우승자 : pobi'];

    // when
    messages.forEach((message) => {
      OutputView.printMessage(message);
    });

    // then
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy).toHaveBeenNthCalledWith(1, '실행 결과');
    expect(logSpy).toHaveBeenNthCalledWith(2, 'pobi : --');
    expect(logSpy).toHaveBeenNthCalledWith(3, '최종 우승자 : pobi');
  });

  test('빈 줄도 출력할 수 있다', () => {
    // given
    const logSpy = getLogSpy();
    const emptyLine = '';

    // when
    OutputView.printMessage(emptyLine);

    // then
    expect(logSpy).toHaveBeenCalledWith(emptyLine);
  });
});
