<template>
  <div class="form__group field">
    <input
      type="input"
      :disabled="disabled"
      class="form__field"
      :value="value"
      @input="handleInput"
      :placeholder="label"
      id="name"
    />
    <label for="name" class="form__label">{{ label }}</label>
    <div class="error-text" v-if="error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: ['value', 'label', 'disabled', 'error'],
  name: 'Field',
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
  },
})
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
