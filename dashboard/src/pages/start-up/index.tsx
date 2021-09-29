import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import { CgMail } from 'react-icons/cg'
import { getGoogleAuth, LoginWithGoogle } from '@src/services/LoginWithGoogle'
import { useHistory } from 'react-router'

const StartUp: React.FC = () => {
  const history = useHistory()

  const onGoogleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    LoginWithGoogle()
  }

  useEffect(() => {
    console.log('start-up index re-render')
    getGoogleAuth()
      .then(() => {
        history.push('/:dn/dashboard')
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <VStack justifyContent="center" alignItems="center" height="100vh">
      <Button
        leftIcon={<CgMail />}
        colorScheme="red"
        variant="solid"
        onClick={onGoogleLogin}
      >
        Create Admin
      </Button>
    </VStack>
  )
}

// StartUp.propTypes = {}

export { StartUp }
