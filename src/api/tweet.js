import { v4 as uuidv4 } from 'uuid'
import { LOCALSTORAGE_KEY } from '../utils/constants'

export const saveTweetAPI = (tweet, userName) => {
  const TweetTemp = {
    id: uuidv4(),
    tweet,
    userName,
    createdAt: new Date()
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(TweetTemp))
}
