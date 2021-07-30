<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand">Simulador de Tweets</span>
      <button class="btn" :class="{'btn-success': !showForm, 'btn-danger': showForm}" @click="openForm">
        {{ !showForm ? 'Nuevo Tweet' : 'Cerrar Tweet' }}
      </button>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'MenuBar',
  props: {
    showForm: Boolean,
    openForm: Function
  }
}
</script>

<style scoped>

</style>
