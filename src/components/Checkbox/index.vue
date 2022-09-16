<template>
  <div class="form-group">
    <input @change="onSelect(id)" :checked="selected" type="checkbox" id="checkbox-block" />
    <label for="checkbox-block"></label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'custom-checkobox',
  props: ['id', 'selected'],
  methods: {
    onSelect(id: string) {
      this.$emit('select', id)
    },
  },
})
</script>

<styles lang="scss">
@import './styles.scss';
</styles>
