<script lang="ts" setup>
import { type NodeProps, Position, Handle } from '@vue-flow/core'
import { type BehaviourNodeData } from '@/tree-designer/nodes/BehaviourNode'

interface CustomNodeProps extends NodeProps {
  id: string
  data: BehaviourNodeData
}
const props = defineProps<CustomNodeProps>()
</script>

<template>
  <div class="behaviour-node task vue-flow__node-task">
    <div>{{ data.label }}</div>

    <div>Index: {{ props.id }}</div>

    <Handle type="target" :position="Position.Top" />
  </div>
</template>
