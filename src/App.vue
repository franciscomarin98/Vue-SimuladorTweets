<template>
  <MenuBar :openForm="openCloseForm" :showForm="showForm"/>
  <TweetForm :openForm="openCloseForm" :showForm="showForm" :reloadTweets="reloadTweets"/>
  <TweetList :listaTweets="lista"/>
</template>

<script>
import MenuBar from './components/MenuBar'
import TweetForm from './components/TweetForm'
import useFormTweet from './composables/useFormTweet'
import TweetList from './components/TweetList'
import { getTweetsAPI } from './api/tweet'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    TweetList,
    TweetForm,
    MenuBar
  },
  setup () {
    const lista = ref(getTweetsAPI())
    const reloadTweets = () => {
      lista.value = getTweetsAPI()
    }
    return {
      ...useFormTweet(),
      reloadTweets,
      lista
    }
  }
}
</script>

<style lang="scss">

</style>
