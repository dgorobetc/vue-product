<template>
  <tr>
    <td class="checkbox-wrap">
      <Checkbox @select="selectHandler" :id="productData.id" :selected="isProductSelected(productData.id)" />
    </td>
    <td class="product-raw">{{ productData.name }} {{ isProductSelected(productData.id) }}</td>
    <td class="price-raw">${{ productData.price }}</td>
    <td class="qty-raw">{{ productData.qty }}</td>
    <td class="sum-raw">${{ productData.price * productData.qty }}</td>
  </tr>
</template>

<script lang="ts">
import Checkbox from '../../../Checkbox/index.vue'
import { mapGetters } from 'vuex'
import { SELECT_PRODUCT, DESELECT_PRODUCT } from '../../../../store/mutationsTypes'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'raw-item',
  props: ['productData'],
  computed: mapGetters(['isProductSelected']),
  components: {
    Checkbox,
  },
  methods: {
    selectHandler(id) {
      const { commit } = this.$store
      const isSelected = this.isProductSelected(id)
      if (isSelected) {
        commit(DESELECT_PRODUCT, id)
      } else {
        commit(SELECT_PRODUCT, id)
      }
    },
  },
})
</script>

<style lang="scss">
@import '../../styles.scss';
</style>
