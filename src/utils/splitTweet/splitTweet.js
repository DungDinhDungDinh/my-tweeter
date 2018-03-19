const TWEET_LENGTH = 50;
const BLANK_SPACE = ' ';
const ERROR_CODE =  -1;

const doSplitTweet = (tweetStr, totalTweet) => {
  const tweetArr = [];
  const splitTweetRecur = (tweetStr, tweetArr, totalTweet, tweetIndex) => {
    const indexingLength = totalTweet.toString().length + tweetIndex.toString().length + 2;
    if (tweetStr.length + indexingLength > TWEET_LENGTH) {
      const maxEndPoint = TWEET_LENGTH - indexingLength;
      if (tweetStr.charAt(maxEndPoint - 1) === BLANK_SPACE) {
        tweetArr.push(`${tweetIndex}/${totalTweet} ${tweetStr.substring(0, maxEndPoint)}`.trim());
        splitTweetRecur(tweetStr.substring(maxEndPoint, tweetStr.length), tweetArr, totalTweet, tweetIndex + 1);
      } else {
        const spaceCharEndPoint = tweetStr.substring(0, maxEndPoint).lastIndexOf(' ');
        if (spaceCharEndPoint === ERROR_CODE) {
          return ERROR_CODE;
        }
        tweetArr.push(`${tweetIndex}/${totalTweet} ${tweetStr.substring(0, spaceCharEndPoint)}`.trim());
        splitTweetRecur(tweetStr.substring(spaceCharEndPoint, tweetStr.length), tweetArr, totalTweet, tweetIndex + 1);
      }
    } else {
      tweetArr.push(`${tweetIndex}/${totalTweet} ${tweetStr}`.trim());
    }
  }
  return splitTweetRecur(tweetStr, tweetArr, totalTweet, 1) === ERROR_CODE ? ERROR_CODE : tweetArr;
}

const calcRedundantTweetsLength = (tweetArr, totalTweet) => {
  const lastTweet = tweetArr[tweetArr.length - 1];
  let lastTweetIndex = parseInt(lastTweet.substring(0, lastTweet.indexOf('/')), 10);
  if (lastTweetIndex === totalTweet) {
    return 0;
  }
  let redundantTweetsLength = 0;
  while (lastTweetIndex > totalTweet) {
    redundantTweetsLength += tweetArr[lastTweetIndex - 1].length;
    lastTweetIndex--;
  }
  return redundantTweetsLength;
}

export const splitTweet = (tweetStr) => {
  if (tweetStr.length <= TWEET_LENGTH) {
    return [tweetStr];
  } else {
    let totalTweet = Math.ceil(tweetStr.length / TWEET_LENGTH);
    let tweetArr = doSplitTweet(tweetStr, totalTweet);

    if (tweetArr === ERROR_CODE) {
      return ERROR_CODE;
    }

    let redundantTweetsLength = 0;
    while ((redundantTweetsLength = calcRedundantTweetsLength(tweetArr, totalTweet)) > 0) {
      totalTweet += Math.ceil(redundantTweetsLength / TWEET_LENGTH);
      tweetArr = doSplitTweet(tweetStr, totalTweet);
      if (tweetArr === ERROR_CODE) {
        return ERROR_CODE;
      }
    }
    return tweetArr;
  }
}
