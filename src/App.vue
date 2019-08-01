<template>
  <div id="app" class="container">
    <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
      <h1 class="text-center text-sm-left">List of expenses</h1>
      <app-exchange></app-exchange>
    </div>
    <app-form></app-form>
    <app-table :data="data"></app-table>
    <!-- <app-total></app-total> -->
  </div>
</template>

<script>
import Form from './components/Form';
import Table from './components/Table';
import Total from './components/Total';
import Exchange from './components/Exchange'

export default {
  components: {
    appForm: Form,
    appTable: Table,
    appTotal: Total,
    appExchange: Exchange
  },
  computed: {
    data() {
      return this.$store.getters.data;
    }
  },
  mounted() {
    this.$store.dispatch('fetchExchange');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 30px;
}

</style>
