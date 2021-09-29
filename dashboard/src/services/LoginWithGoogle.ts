import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from '@firebase/auth'
import { auth } from './firebase'

export const LoginWithGoogle = () => {
  return signInWithRedirect(auth, new GoogleAuthProvider())
}

export const getGoogleAuth = async () => {
  try {
    const result = await getRedirectResult(auth)

    if (!result) throw Error('Invalid Credentials.')
    const credentials = GoogleAuthProvider.credentialFromResult(result)
    const token = credentials?.accessToken
    const user = result?.user

    return Promise.resolve({ user, token })
  } catch (error) {
    return Promise.reject({ error })
  }
}

export const logout = () => {
  return signOut(auth)
}
