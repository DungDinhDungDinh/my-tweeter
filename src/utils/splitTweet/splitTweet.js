const TWEET_LENGTH = 50;
const END_CHARS = '!@#$%^&*()_+\-=\[\]{};\':"\\|,.<>\/? ';

const splitTweetRecur = (tweetStr, tweetArr, totalTweet, tweetIndex) => {
  const indexingLength = totalTweet.toString().length + tweetIndex.toString().length + 2;
  if (tweetStr.length + indexingLength > TWEET_LENGTH) {
    const maxEndPoint = TWEET_LENGTH - indexingLength;
    if (END_CHARS.indexOf(tweetStr.charAt(maxEndPoint - 1)) !== -1) {
      tweetArr.push(`${tweetIndex}/${totalTweet} ${tweetStr.substring(0, maxEndPoint)}`.trim());
      splitTweetRecur(tweetStr.substring(maxEndPoint, tweetStr.length), tweetArr, totalTweet, tweetIndex + 1);
    } else {
      const spaceCharEndPoint = tweetStr.substring(0, maxEndPoint).lastIndexOf(' ');
      tweetArr.push(`${tweetIndex}/${totalTweet} ${tweetStr.substring(0, spaceCharEndPoint)}`.trim());
      splitTweetRecur(tweetStr.substring(spaceCharEndPoint, tweetStr.length), tweetArr, totalTweet, tweetIndex + 1);
    }
  } else {
    tweetArr.push(`${tweetIndex}/${totalTweet} ${tweetStr}`.trim());
  }
}

const calcRedundantTweetsLength = (tweetArr, totalTweet) => {
  const lastTweet = tweetArr[tweetArr.length - 1];
  let lastTweetIndex = parseInt(lastTweet.substring(0, lastTweet.indexOf('/')));
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
    let tweetArr = [];
    splitTweetRecur(tweetStr, tweetArr, totalTweet, 1);

    let redundantTweetsLength = 0;
    while ((redundantTweetsLength = calcRedundantTweetsLength(tweetArr, totalTweet)) > 0) {
      totalTweet += Math.ceil(redundantTweetsLength / TWEET_LENGTH);
      tweetArr = [];
      splitTweetRecur(tweetStr, tweetArr, totalTweet, 1);
    }
    return tweetArr;
  }
}
