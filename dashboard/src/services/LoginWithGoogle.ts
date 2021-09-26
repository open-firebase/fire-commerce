import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
} from '@firebase/auth'
import { auth } from './firebase'

export const LoginWithGoogle = async () => {
  signInWithRedirect(auth, new GoogleAuthProvider())
}

export const getGoogleAuth = async () => {
  try {
    const result = await getRedirectResult(auth)

    if (!result) throw Error('Invalid Credentials.')
    const credentials = GoogleAuthProvider.credentialFromResult(result)
    const token = credentials?.accessToken
    const user = result?.user

    return { user, token }
  } catch (error) {
    return { error }
  }
}
