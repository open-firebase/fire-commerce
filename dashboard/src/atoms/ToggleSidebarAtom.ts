import { atom } from 'jotai'

const isSidebarOpenAtom = atom(false)

export const useIsSidebarOpen = atom(
  (get) => get(isSidebarOpenAtom),
  (get, set) => {
    set(isSidebarOpenAtom, !get(isSidebarOpenAtom))
  },
)
