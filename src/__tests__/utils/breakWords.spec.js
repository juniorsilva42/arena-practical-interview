import { breakWords } from '../../shared/utils/helpers';

describe('Break Words Helper Util', () => {
  it('should not put and neither break the text if lenght is lower than the to char limit', () => {
    const text = 'We help publishers and media companies create and distribute engaging content and generate revenue.';
    
    expect(breakWords({ text, toCharLimit: 100 })).toEqual(text);
  });

  it('should break and put "..." char at the end of the text', () => {
    const text = 'We help publishers and media companies create and distribute engaging content and generate revenue.';

    expect(breakWords({ text, toCharLimit: 30 })).toEqual('We help publishers and media c...');
  });
});