import type { ListItem } from '../ListItem'

type HistoryItem = ListItem<string | number, object, string>

export class HistoryState {
  constructor() {}

  history: HistoryItem[] = []

  addItem: (itemToAdd: HistoryItem) => void = (itemToAdd) => {
    this.history.push(itemToAdd)
  }

  goBack: () => HistoryItem | undefined = () => {
    return this.history.pop()
  }

  getPreviousItem: () => HistoryItem | undefined = () => {
    if (this.history.length < 2) return undefined

    return this.history[this.history.length - 2]
  }
}
