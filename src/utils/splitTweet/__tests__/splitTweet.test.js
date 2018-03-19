import { splitTweet } from '../splitTweet';

describe('splitTweet test', () => {
    it('should return message.length <= 50 correctly', () => {
    const tweet = 'I am Dung Dinh';
    const expectedResult = ['I am Dung Dinh'];
    const actualResult = splitTweet(tweet);
    expect(actualResult).toEqual(expectedResult);
  })

  it('should split tweet correctly', () => {
    const tweet = 'He determined to drop his litigation with the monastry, and relinguish his claims to the wood-cuting and fishery rihgts at once. He was the more ready to do this becuase the rights had becom much less valuable, and he had indeed the vaguest idea where the wood and river in quedtion were.';
    const expectedResult = [
      "1/7 He determined to drop his litigation with the",
      "2/7 monastry, and relinguish his claims to the",
      "3/7  wood-cuting and fishery rihgts at once. He",
      "4/7  was the more ready to do this becuase the",
      "5/7  rights had becom much less valuable, and he",
      "6/7  had indeed the vaguest idea where the wood",
      "7/7  and river in quedtion were."
    ];
    const actualResult = splitTweet(tweet);
    expect(actualResult).toEqual(expectedResult);
  });

  it('should return error', () => {
    const tweet = 'determineddetermineddetermineddetermineddetermineddetermineddetermined';
    const expectedResult = -1;
    const actualResult = splitTweet(tweet);
    expect(actualResult).toEqual(expectedResult);
  })
});