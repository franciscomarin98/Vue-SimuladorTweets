<template>
  <MenuBar />
  <TweetForm />
</template>

<script>
import MenuBar from './components/MenuBar'
import TweetForm from './components/TweetForm'
export default {
  name: 'App',
  components: { TweetForm, MenuBar }
}
</script>

<style lang="scss">

</style>
