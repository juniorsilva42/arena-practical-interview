import { formatNumber } from '../../shared/utils/helpers';

describe('Format Number Helper Util', () => {
  it('should must keep the hundred as is without tier', () => {
    for (let i = 1; i <= 100; i++) {
      expect(formatNumber(i)).toEqual(i);
    }
  });

  it('should turn random number 259.422 into 259.4 with "k" tier SI', () => {
    const number = 259422;
    
    expect(formatNumber(number)).toEqual('259.4k');
  });

  it('should turn the number in the million scale with "m" tier SI', () => {
    const number = 1000000;
    
    expect(formatNumber(number)).toEqual('1.0m');
  });  
});