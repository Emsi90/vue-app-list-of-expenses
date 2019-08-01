<template>
  <table class="table table-responsive-sm table-striped mt-4" v-if="data.length > 0">
    <thead class="thead-dark">
      <tr>
        <th style="width: 40%">Title</th>
        <th style="width: 20%">(PLN)</th>
        <th style="width: 20%">(EUR)</th>
        <th style="width: 20%">Options</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(datum, index) in data" :key="index">
        <th scope="row">{{ datum.title }}</th>
        <td>{{ datum.amount }}</td>
        <td>{{ currency(datum.amount) }}</td>
        <td class="text-center">
          <button type="button" class="btn btn-danger btn-sm" @click="deleteItem(index)">Delete</button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="bg-info">
        <td colspan="4" class="text-white text-right"><b>Sum:</b> {{ tableSum }} PLN ({{ tableSumMultipleByExchange }} EUR)</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  data() {
    return {
      // exchange: this.$store.getters.exchange
    }
  },
  props: ["data"],
  computed: {
    exchange() {
      return this.$store.getters.exchange;
    },
    tableSum() {
      return (this.data.reduce((a, b) => a + b.amount, 0)).toFixed(2);
    },
    tableSumMultipleByExchange() {
      return (this.data.reduce((a, b) => a + b.amount, 0) * this.exchange).toFixed(2);
    }
  },
  methods: {
    deleteItem(id) {
      this.$store.dispatch("removeItem", id);
    },
    currency(amount) {
      return (amount * this.exchange).toFixed(2);
    }
  }
};
</script>

<style>
table {
  table-layout: fixed;
}
table th,
table td {
  overflow: hidden;
}
</style>
