<template>
  <div>
    <table class="table-wrapper">
      <HeaderRaw />
      <RawItem v-for="item of productList" :key="item.id" :productData="item" />
    </table>
    <BottomRaw />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderRaw from './Components/TopRaw/index.vue'
import RawItem from './Components/RawItem/index.vue'
import BottomRaw from './Components/BottomRaw/index.vue'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'Table-component',
  components: {
    HeaderRaw,
    RawItem,
    BottomRaw,
  },
  computed: mapState(['productList']),
})
</script>

<style lang="scss">
@import './styles.scss';
</style>
