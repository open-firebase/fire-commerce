import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

import { onAuthStateChanged } from '@firebase/auth'
import { auth } from '@src/services/firebase'

const Dashboard: React.FC = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {})
  })

  return <>Dashboard</>
}
// Dashboard.propTypes = {}

export { Dashboard }
