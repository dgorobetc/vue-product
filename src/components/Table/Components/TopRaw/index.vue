<template>
  <thead class="raw-wrap">
    <tr>
      <td class="checkbox-wrap"><Checkbox @select="selectAll" id="all" :selected="isAllProductsSelected" /></td>
      <td class="product-raw">Product name</td>
      <td class="price-raw">Product name</td>
      <td class="qty-raw">Product name</td>
      <td class="sum-raw">Sum</td>
    </tr>
  </thead>
</template>

<script lang="ts">
import Checkbox from '../../../Checkbox/index.vue'
import { mapGetters } from 'vuex'
import { SELECT_ALL_PRODUCTS, DESELECT_ALL_PRODUCTS } from '../../../../store/mutationsTypes'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'top-raw',
  components: {
    Checkbox,
  },

  computed: mapGetters(['isAllProductsSelected']),

  methods: {
    selectAll() {
      const { commit } = this.$store
      if (this.isAllProductsSelected) {
        commit(DESELECT_ALL_PRODUCTS)
      } else {
        commit(SELECT_ALL_PRODUCTS)
      }
    },
  },
})
</script>

<style lang="scss">
@import '../../styles.scss';
</style>
