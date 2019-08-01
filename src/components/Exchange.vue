<template>
  <div>
    <div class="d-flex flex-column align-items-start form-box" v-if="showForm">
      <div class="form-cont d-flex align-items-center">
        <div class="form-group mb-0 form-group-cont">
          <input
            type="number"
            class="form-control form-control-sm"
            id="exchange"
            aria-describedby="exchangeHelp"
            placeholder="Enter exchange-rate"
            v-model.number="exchangeValue"
            @input="validateDecimal"
          />
        </div>
        <button class="btn btn-success btn-sm exch-btn ml-2 mr-1" @click="saveExchange" :disabled="validateAmountError">Save</button>
        <button class="btn btn-danger btn-sm exch-btn" @click="closeForm">Close</button>
      </div>
      <small
          v-if="validateAmountError"
          id="amountHelp"
          class="form-text text-danger amount-error-text"
        >Accept only two digits after the decimal.</small>
    </div>
    <div class="d-flex align-items-center" v-else>
      <p class="exchange-text mb-0 mr-2">1EUR = 
        <span v-if="loaderRate">
          <span class="spinner-border spinner-border-sm" role="status">
            <span class="sr-only">{{ exchangeVal }}</span>
          </span>
        </span>
        <span v-else>
          {{ exchangeVal }} PLN
        </span>
        </p>
      <button class="btn btn-primary btn-sm exch-btn" @click="showForm = !showForm">Edit</button>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      exchangeValue: null,
      showForm: false,
      validateAmountError: false,
      loaderRate: true
    };
  },
  computed: {
    exchangeVal() {
      if(this.$store.getters.exchange === 1) {
        this.loaderRate = true;
        setTimeout(() => {
          this.loaderRate = false;
        }, 5000);
      } else {
        this.loaderRate = false;
        this.exchangeValue = (this.$store.getters.exchange).toFixed(2);
      }
      return (this.$store.getters.exchange).toFixed(2);
    }
  },
  methods: {
    saveExchange() {
      this.showForm = false;
      this.$store.dispatch('updateExchange', this.exchangeValue)
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
      }
    },
    closeForm() {
      this.showForm = false;
      this.validateAmountError = false;
      this.exchangeValue = this.$store.getters.exchange;
    }
  }
};
</script>

<style scoped>
.exch-btn {
  cursor: pointer;
}
.form-group-cont {
  max-width: 70px;
}
.exchange-text {
  font-size: 14px;
}
.form-box {
  position: relative;
}
.amount-error-text {
  position: absolute;
  top: 30px;
  font-size: 10px;
}
</style>
