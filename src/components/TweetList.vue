<template>
  <div class="container">
    <h1 class="text-center mb-4">Lista de Tweets</h1>
    <div class="tweet" v-for="item in listaTweets" :key="item.id">
      <p class="tweet__title">{{ item.userName }}</p>
      <p class="tweet__text">{{ item.tweet }}</p>
      <span>{{ formatDate(item.createdAt) }}</span>
      <CloseIcon @click="deleteTweet(item.id)"/>
    </div>

    <div class="tweet" v-show="listaTweets.length <= 0">
        No hay tweets posteados
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { CloseIcon } from './Icons'
import { deletedTweetAPIS } from '../api/tweet'

export default {
  name: 'TweetList',
  props: {
    listaTweets: Array,
    reloadTweets: Function
  },
  components: {
    CloseIcon
  },
  setup (props) {
    const formatDate = (date) => {
      return moment(date).fromNow()
    }

    const deleteTweet = (id) => {
      deletedTweetAPIS(id)
      props.reloadTweets()
    }

    return {
      formatDate,
      deleteTweet
    }
  }
}
</script>

<style lang="scss" scoped>
.tweet {
  position: relative;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
  }

  &__title {
    position: absolute;
    top: -12px;
    left: 10px;
    background-color: #fff;
    padding: 0 10px;
    font-weight: bold;
  }

  &__text {
    color: grey;
  }

  span {
    position: absolute;
    right: 10px;
    bottom: -9px;
    font-size: 12px;
    color: grey;
    background-color: #fff;
    padding: 0 20px;
    border: 1px solid #ccc;
  }
}
</style>
