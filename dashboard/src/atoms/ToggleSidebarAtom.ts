import { atom } from 'jotai'

const isToggleSidebarAtom = atom(false)

export const useIsToggleSidebarAtom = atom(
  (get) => get(isToggleSidebarAtom),
  (get, set) => {
    set(isToggleSidebarAtom, !get(isToggleSidebarAtom))
  },
)
