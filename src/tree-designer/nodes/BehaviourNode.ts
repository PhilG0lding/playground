import type { Node } from '@vue-flow/core'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type BehaviourNode = Node<BehaviourNodeData, {}, BehaviourNodeTypes>

export type BehaviourNodeTypes = 'root' | 'selector' | 'sequence' | 'decorator' | 'task'

export interface BehaviourNodeData {
  label: string
}
