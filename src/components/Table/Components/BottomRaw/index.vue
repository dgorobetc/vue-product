<template>
  <div class="bottom-raw">
    <button @click="removeProducts">Delete</button>
    <div class="total-title">total: ${{ getTotlaPrice }}</div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { REMOVE_SELECTED_PRODUCTS } from '../../../../store/mutationsTypes'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'bottom-raw',
  computed: mapGetters(['getTotlaPrice']),

  methods: {
    removeProducts() {
      const { commit } = this.$store
      commit(REMOVE_SELECTED_PRODUCTS)
    },
  },
})
</script>

<style lang="scss">
@import '../../styles.scss';
</style>
