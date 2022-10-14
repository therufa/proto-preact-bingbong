import create from 'zustand'

const useNumberStore  = create((set) => ({
  number: 0,
  increase: () => set(({ number }) => ({ number: number + 1 })),
  decrease: () => set(({ number }) => ({ number: Math.max(number - 1, 0) })),
  reset: () => set({ number: 0 })
}))

export {
  useNumberStore
}