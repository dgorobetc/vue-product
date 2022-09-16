<template>
  <div class="form__group field">
    <input
      type="number"
      :disabled="disabled"
      class="form__field"
      @input="handleInput"
      :value="value"
      :placeholder="label"
      id="name"
    />
    <label for="name" class="form__label">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: ['disabled', 'value', 'label'],
  name: 'namber-field',
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
