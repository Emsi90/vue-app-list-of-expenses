<template>
  <form class="mt-4">
    <div class="form-group">
      <label for="transactionTitle">Title of transaction</label>
      <input
        type="text"
        class="form-control"
        id="transactionTitle"
        aria-describedby="Title of transaction"
        placeholder="Title of transaction"
        v-model="data.title"
        @input="validateTitle"
      />
      <small
        v-if="validateTitleError"
        id="transactionTitleHelp"
        class="form-text text-danger"
      >Your title is too short! You need at least 5 characters.</small>
    </div>
    <div class="form-group">
      <label for="amount">Amount (in PLN)</label>
      <input
        type="number"
        class="form-control"
        id="amount"
        aria-describedby="Amount (in PLN)"
        placeholder="Amount (in PLN)"
        v-model.number="data.amount"
        @input="validateDecimal"
      />
      <small
        v-if="validateAmountError"
        id="amountHelp"
        class="form-text text-danger"
      >Accept only two digits after the decimal.</small>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="sendData" :disabled="validateTitleError || validateAmountError">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      data: {
        title: '',
        amount: 0,
      },
      validateTitleError: false,
      validateAmountError: false
    }
  },
  methods: {
    validateTitle(e) {
      let valueLength = e.target.value.length;
      if(valueLength < 5) {
        this.validateTitleError = true;
      } else {
        this.validateTitleError = false;
      }
    },
    validateDecimal(e) {
      let value = e.target.value;
      let valueLength = e.target.value.length;
      let arrValue = [];
      if(value.includes('.')) {
        arrValue = value.split('.');
        if(arrValue[1].length > 2 ) {
          this.validateAmountError = true;
        } else {
          this.validateAmountError = false;
        }
      } else {
        this.validateAmountError = false;
      }
    },
    sendData() {
      // const obj = {
      //   ...this.data,
      //   currency: (this.data.amount * this.$store.getters.exchange).toFixed(2)
      // } 
      // console.log(obj);
      if((this.data.title == '' && this.data.amount == 0) || this.data.title == undefined) {
        this.validateTitleError = true;
        this.validateAmountError = true;
      } else {
        this.$store.dispatch('setData', this.data);
        this.data = {};
      }
    }
  }
};
</script>

<style>
</style>
