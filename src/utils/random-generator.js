import { MissionUtils } from '@woowacourse/mission-utils';

export const randomGenerator = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9);
};
