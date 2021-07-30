<template>
  <MenuBar :openForm="openCloseForm" :showForm="showForm"/>
  <TweetForm :showForm="showForm" />
</template>

<script>
import MenuBar from './components/MenuBar'
import TweetForm from './components/TweetForm'
import useFormTweet from './composables/useFormTweet'

export default {
  name: 'App',
  components: {
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
