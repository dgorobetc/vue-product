<template>
  <div id="app">
    <Form />
    <Table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Form from './components/Form/index.vue'
import Table from './components/Table/index.vue'

export default defineComponent({
  name: 'App',
  components: { Form, Table },
})
</script>

<style lang="scss">
@import './assets/styles.scss';
</style>
