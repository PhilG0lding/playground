<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  static: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: 'bottom',
  },
})

const positionClass = computed(() => `offcanvas-${props.position}`)
</script>
<template>
  <div
    class="offcanvas"
    :class="positionClass"
    :data-bs-backdrop="props.static ? 'static' : null"
    tabindex="-1"
    :id="props.id"
    aria-labelledby="staticBackdropLabel"
  >
    <div class="offcanvas-header">
      <slot name="header"
        ><h5 class="offcanvas-title" id="staticBackdropLabel">{{ props.title }}</h5></slot
      >
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <slot name="body">Default Content</slot>
    </div>
  </div>
</template>
