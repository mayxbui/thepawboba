import { reactive, computed } from 'vue'

const state = reactive({ items: [] })

export function useCart() {
  function addItem(drink, options) {
    const key = buildKey(drink.id, options)
    const existing = state.items.find(i => i.key === key)
    if (existing) {
      existing.qty += options.qty
    } else {
      state.items.push({
        key,
        id: drink.id,
        name: drink.name,
        description: drink.description,
        price: options.unitPrice,
        image: drink.image,
        qty: options.qty,
        size: options.size,
        sweetness: options.sweetness,
        ice: options.ice,
        milk: options.milk,
        toppings: options.toppings,
      })
    }
  }

  function removeItem(key) {
    const idx = state.items.findIndex(i => i.key === key)
    if (idx !== -1) state.items.splice(idx, 1)
  }

  function updateQty(key, qty) {
    const item = state.items.find(i => i.key === key)
    if (item) item.qty = qty
  }

  const totalItems = computed(() => state.items.reduce((s, i) => s + i.qty, 0))

  return { items: state.items, addItem, removeItem, updateQty, totalItems }
}

function buildKey(drinkId, options) {
  return [drinkId, options.size, options.sweetness, options.ice, options.milk,
    (options.toppings ?? []).map(t => t.name).sort().join(',')
  ].join('|')
}
