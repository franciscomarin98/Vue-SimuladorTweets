<template>
  <div class="tweet-form container" :class="{open: showForm}">
    <form @submit.prevent="submitTweetForm">
      <input v-model="userName" class="form-control" placeholder="Nombre" type="text">
      <textarea v-model="userTweet" class="form-control" rows="3" placeholder="Escribe tu tweet"></textarea>
      <button type="submit" class="btn btn-primary">
        Enviar tweet
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { saveTweetAPI } from '../api/tweet'

export default {
  name: 'TweetForm',
  props: {
    showForm: Boolean,
    openForm: Function,
    reloadTweets: Function
  },
  setup (props) {
    const userName = ref('')
    const userTweet = ref('')

    const submitTweetForm = () => {
      if (userName.value && userTweet.value) {
        saveTweetAPI(userTweet.value, userName.value)
        userName.value = ''
        userTweet.value = ''
        props.reloadTweets()
        props.openForm()
      }
    }

    return {
      submitTweetForm,
      userTweet,
      userName
    }
  }
}
</script>

<style lang="scss" scoped>
.tweet-form {
  margin-top: 20px;
  height: 0;
  overflow: hidden;

  &.open {
    height: auto;
  }

  form {
    margin-bottom: 50px;

    input {
      margin-bottom: 10px;
    }

    button {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
