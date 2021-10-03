import { atomWithLocalStorage } from '@src/utils/atomWithLocalStorage'
import { User } from 'firebase/auth'

export const useAuthUserAtom = atomWithLocalStorage<User | null>(
  'authUser',
  null,
)
