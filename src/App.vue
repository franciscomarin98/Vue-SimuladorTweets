<template>
  <MenuBar :openForm="openCloseForm" :showForm="showForm"/>
  <TweetForm :showForm="showForm" />
  <TweetList />
</template>

<script>
import MenuBar from './components/MenuBar'
import TweetForm from './components/TweetForm'
import useFormTweet from './composables/useFormTweet'
import TweetList from './components/TweetList'

export default {
  name: 'App',
  components: {
    TweetList,
    TweetForm,
    MenuBar
  },
  setup () {
    return {
      ...useFormTweet()
    }
  }
}
</script>

<style lang="scss">

</style>
