<script setup lang="ts">
import { ref } from 'vue'
import type { Edge, NodeMouseEvent } from '@vue-flow/core'
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { type BehaviourNode } from '@/tree-designer/nodes/BehaviourNode'
import OffCanvas from '@/components/common/OffCanvas.vue'
import { Offcanvas } from 'bootstrap'
import SelectorNode from '@/components/treeview/NodeTypes/SelectorNode.vue'
import RootNode from '@/components/treeview/NodeTypes/RootNode.vue'
import TaskNode from '@/components/treeview/NodeTypes/TaskNode.vue'
import SequenceNode from '@/components/treeview/NodeTypes/SequenceNode.vue'

const editingNode = ref<BehaviourNode | null>(null)

const onNodeClick = (event: NodeMouseEvent) => {
  editingNode.value = event.node as BehaviourNode

  const offcanvasElementList = document.querySelectorAll('.offcanvas')
  ;[...offcanvasElementList].map((offcanvasEl) => new Offcanvas(offcanvasEl).show())
}

// these are our nodes
const nodes = ref<BehaviourNode[]>([
  {
    id: '1',
    type: 'root',
    position: { x: 250, y: 5 },
    data: { label: 'Node 1' },
  },

  // default node, you can omit `type: 'default'` as it's the fallback type
  {
    id: '2',
    type: 'sequence',
    position: { x: 100, y: 100 },
    data: { label: 'Node 2' },
  },

  // An output node, specified by using `type: 'output'`
  {
    id: '3',
    type: 'selector',
    position: { x: 400, y: 200 },
    data: { label: 'Node 3' },
  },

  // this is a custom node
  // we set it by using a custom type name we choose, in this example `special`
  // the name can be freely chosen, there are no restrictions as long as it's a string
  {
    id: '4',
    type: 'task', // <-- this is the custom node type name
    position: { x: 400, y: 200 },
    data: {
      label: 'Node 4',
    },
  },
])

// these are our edges
const edges = ref<Edge[]>([
  // default bezier edge
  // consists of an edge id, source node id and target node id
  {
    id: 'e1->2',
    source: '1',
    target: '2',
  },

  // set `animated: true` to create an animated edge path
  {
    id: 'e2->3',
    source: '2',
    target: '3',
    animated: true,
  },

  // a custom edge, specified by using a custom type name
  // we choose `type: 'special'` for this example
  {
    id: 'e3->4',
    //type: 'special',
    source: '3',
    target: '4',

    // all edges can have a data object containing any data you want to pass to the edge
    data: {
      hello: 'world',
    },
  },
])
</script>

<template>
  <div class="col px-0">
    <VueFlow
      :nodes="nodes"
      :edges="edges"
      :style="{ background: '#fbfbfb' }"
      :fit-view-on-init="true"
      :snap-to-grid="true"
      :snap-grid="[15, 15]"
      @node-click="onNodeClick"
    >
      <Background variant="lines" :gap="15" pattern-color="#dedede" />
      <template #node-root="rootProps">
        <RootNode v-bind="rootProps" />
      </template>
      <template #node-selector="selectorNodeProps">
        <SelectorNode v-bind="selectorNodeProps" />
      </template>
      <template #node-task="taskProps">
        <TaskNode v-bind="taskProps" />
      </template>
      <template #node-sequence="sequenceProps">
        <SequenceNode v-bind="sequenceProps" />
      </template>

      <!-- <template #edge-special="specialEdgeProps">
        <SpecialEdge v-bind="specialEdgeProps" />
      </template> -->
    </VueFlow>
  </div>
  <OffCanvas id="tree-off-canvas" class="text-bg-light" :static="true" position="end">
    <template v-slot:header>
      <div>
        <h3>{{ editingNode?.data?.label }}</h3>
      </div>
    </template>
    <template v-slot:body>
      <div>Type: {{ editingNode?.type }}</div>
    </template>
  </OffCanvas>
</template>

<style lang="scss">
/* import the necessary styles for Vue Flow to work */
@import '@vue-flow/core/dist/style.css';

/* import the default theme, this is optional but generally recommended */
@import '@vue-flow/core/dist/theme-default.css';

@import '@/tree-designer/assets/tree-designer.scss';
</style>
