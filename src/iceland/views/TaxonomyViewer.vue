<script lang="ts" setup>
import { ref } from 'vue'
import { default as DrillableList } from '../components/DrillableList.vue'
import DepartmentItem from '../components/DepartmentItem.vue'
import CategoryItem from '../components/CategoryItem.vue'
import type { ListItem } from '../drillable-list/ListItem'
import type { TaxonomyData } from '../models/TaxonomyData'
import type { TaxonomyTypes } from '../models/TaxonomyTypes'

const nodes = ref<ListItem<string, TaxonomyData, TaxonomyTypes>[]>([
  {
    id: 'BPD_3',
    order: 1,
    type: 'Department',
    data: {
      label: 'Chilled',
    },
    children: [
      {
        id: 'BPG_MORN',
        children: null,
        type: 'Group',
        data: {
          label: 'Morning Goods',
        },
      },
      {
        id: 'BPG_CAKE',
        children: null,
        type: 'Group',
        data: {
          label: 'Cakes',
        },
      },
    ],
  },
  {
    id: 'BPD_1',
    type: 'Department',
    order: 2,
    data: {
      label: 'Frozen',
    },
    children: [
      {
        id: 'BPG_CHP',
        children: null,
        type: 'Group',
        data: {
          label: 'Frozen Chips',
        },
      },
      {
        id: 'BPG_PZA',
        children: null,
        type: 'Group',
        data: {
          label: 'Pizza',
        },
      },
    ],
  },
])
</script>
<template>
  <div class="col-sm-2">
    <DrillableList :item-list="nodes">
      <template #item-list-department="departmentprops">
        <DepartmentItem v-bind="departmentprops" />
      </template>
      <template #item-list-group="categoryProps">
        <CategoryItem v-bind="categoryProps" />
      </template>
    </DrillableList>
  </div>
</template>
<style lang="scss">
@import '@/assets/bs-overrides.scss';

.drillable-list {
  @extend .list-group;
}

.drillable-list > li {
  @extend .list-group-item;
}
</style>
