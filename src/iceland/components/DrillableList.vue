<script lang="ts" setup>
import { computed, defineProps, ref, h, useSlots, type Component, type Slot } from 'vue'
import type { ListItem } from '../drillable-list/ListItem'

const props = defineProps({
  itemList: {
    type: Array<ListItem<string | number, object, string>>,
  },
})

const activeItem = ref<ListItem<string | number, object, string> | null>(null)
const setActiveItem = (item: ListItem<string | number, object, string>) => {
  if (item.children?.length ?? 0 > 0) activeItem.value = item
}
const itemsToRender = computed(() => {
  let items: ListItem<string | number, object, string>[] | undefined = undefined

  if (activeItem.value == null) {
    items = props.itemList ?? []
  } else {
    items = activeItem?.value.children ?? []
  }

  return items.sort((a, b) => ((a.order ?? 0) > (b.order ?? 0) ? 1 : -1))
})

const slots = useSlots()
const renderItem = (item: ListItem<string | number, object, string>) => {
  const slotComponent = (slots as { [index: string]: Slot })[`item-list-${item.type.toLowerCase()}`]
  if (slotComponent) {
    return h('li', slotComponent({ item: item }))
  }
}
</script>
<template>
  <div>
    <template v-if="itemsToRender?.length > 0">
      <ol class="drillable-list">
        <component
          v-for="item in itemsToRender"
          v-bind:key="item.id"
          :is="renderItem(item)"
          @click="setActiveItem(item)"
        />
      </ol>
    </template>
  </div>
</template>
