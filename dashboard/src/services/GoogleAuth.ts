import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const provider = new GoogleAuthProvider()
const auth = getAuth()

export const GoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const credential = GoogleAuthProvider.credentialFromResult(result)
    const token = credential?.accessToken
    const user = result.user

    return { user, token }
  } catch (error) {
    return { error }
  }
}

// signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result)
//       const token = credential?.accessToken
//       const user = result.user

//       return { user, token }
//     })
//     .catch((error) => {
//       const errorCode = error.code
//       const errorMessage = error.message

//       return { errorCode, errorMessage }
//     })
