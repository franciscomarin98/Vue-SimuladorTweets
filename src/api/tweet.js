import { v4 as uuidv4 } from 'uuid'
import { LOCALSTORAGE_KEY } from '../utils/constants'

export const saveTweetAPI = (tweet, userName) => {
  const tweets = getTweetsAPI()

  const TweetTemp = {
    id: uuidv4(),
    tweet,
    userName,
    createdAt: new Date()
  }

  tweets.push(TweetTemp)
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(tweets))
}

export const getTweetsAPI = () => JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))?.reverse() || []

export const deletedTweetAPIS = (idTweet) => {
  let tweets = getTweetsAPI()
  tweets = tweets.filter(tw => tw.id !== idTweet)
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(tweets))
}
