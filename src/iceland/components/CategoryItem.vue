<script lang="ts" setup>
import { defineProps } from 'vue'
import type { TaxonomyData } from '../models/TaxonomyData'
import type { TaxonomyTypes } from '../models/TaxonomyTypes'
import type { ListItem } from '../drillable-list/ListItem'

const props = defineProps({
  item: {
    type: Object as () => ListItem<string, TaxonomyData, TaxonomyTypes>,
    required: true,
  },
})
</script>

<template>
  <div class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{{ props.item.data?.label }}</div>
      This is a category slot!
    </div>
    <span class="badge bg-primary rounded-pill" v-if="props.item.children?.length ?? 0 > 0">{{
      props.item.children?.length
    }}</span>
  </div>
  <div>
    <span>Theres X Products here</span>
  </div>
</template>

<style lang="scss">
.clickable {
  cursor: pointer;
}
</style>
