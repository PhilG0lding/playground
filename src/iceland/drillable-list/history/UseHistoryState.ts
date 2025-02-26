import { createInjectionState } from '@vueuse/core'
// useCounterStore.ts
import { computed, shallowRef } from 'vue'

const [useProvideCounterStore, useCounterStore] = createInjectionState((initialValue: number) => {
  // state
  const count = shallowRef(initialValue)

  // getters
  const double = computed(() => count.value * 2)

  // actions
  function increment() {
    count.value++
  }

  return { count, double, increment }
})

export { useProvideCounterStore }

export function useCounterStoreWithDefaultValue() {
  return (
    useCounterStore() ?? {
      count: shallowRef(0),
      double: shallowRef(0),
      increment: () => {},
    }
  )
}

export function useCounterStoreOrThrow() {
  const counterStore = useCounterStore()
  if (counterStore == null)
    throw new Error('Please call `useProvideCounterStore` on the appropriate parent component')
  return counterStore
}
