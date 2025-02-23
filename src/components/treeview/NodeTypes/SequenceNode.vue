<script lang="ts" setup>
//import { computed, type ComputedRef } from 'vue'
import { type NodeProps, Position, Handle } from '@vue-flow/core'
import { type BehaviourNodeData } from '@/tree-designer/nodes/BehaviourNode'

interface CustomNodeProps extends NodeProps {
  id: string
  data: BehaviourNodeData
}
const props = defineProps<CustomNodeProps>()

// const x: ComputedRef<string> = computed(() => `${Math.round(props.position.x)}px`)
// const y: ComputedRef<string> = computed(() => `${Math.round(props.position.y)}px`)
</script>

<template>
  <div class="behaviour-node sequence vue-flow__node-sequence">
    <div>{{ data.label }}</div>

    <div>Index: {{ props.id }}</div>

    <Handle type="source" :position="Position.Bottom" />
    <Handle type="target" :position="Position.Top" />
  </div>
</template>
