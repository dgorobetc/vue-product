<template>
  <form class="form-wrapper" @submit="checkForm">
    <Field
      v-model="name"
      label="Product name"
      :disabled="false"
      :error="isError && 'Product name is not valid.'"
      class="name-field"
    />
    <NumberField v-model.number="price" label="Price" :disabled="false" class="price-field" />
    <NumberField v-model.number="qty" label="Quantity" :disabled="false" class="price-field" />
    <button class="button primery" type="submit">Submit</button>
  </form>
</template>

<script>
import Field from '../Field/index.vue'
import NumberField from '../NumberField/index.vue'
import isEmpty from 'lodash/isEmpty'
import { CREATE_PRODUCT } from '../../store/mutationsTypes'
import { uuid } from 'vue-uuid'

export default {
  data: () => ({
    name: '',
    price: 0,
    qty: 0,
    isError: false,
  }),
  components: { Field, NumberField },
  name: 'Form-component',
  methods: {
    checkForm: function (e) {
      e.preventDefault()
      const { commit } = this.$store
      const { name, price, qty } = this
      if (isEmpty(name)) {
        this.isError = true
      } else {
        commit(CREATE_PRODUCT, { name, price, qty, id: uuid.v1() })
        this.isError = false
        this.name = ''
        this.price = 0
        this.qty = 0
      }
    },
  },
  watch: {
    name: function (newValue) {
      if (isEmpty(newValue)) {
        this.isError = true
      }
      if (newValue && this.isError) {
        this.isError = false
      }
    },
  },
}
</script>

<styles lang="scss">
@import './styles.scss';
</styles>
