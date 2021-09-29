import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
import { useAtom } from 'jotai'
import { useAuthUserAtom } from '@src/atoms/AuthUserAtom'
import { onAuthStateChanged } from '@firebase/auth'
import { auth } from '@src/services/firebase'

const Dashboard: React.FC = () => {
  const [authUser] = useAtom(useAuthUserAtom)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('User', user)
      console.log('Auth User', authUser)
    })
  })

  return <>Dashboard</>
}
// Dashboard.propTypes = {}

export { Dashboard }
