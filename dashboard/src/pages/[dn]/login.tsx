import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

import { VStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { CgMail } from 'react-icons/cg'
import { getGoogleAuth, LoginWithGoogle } from '@src/services/LoginWithGoogle'

const Login: React.FC = () => {
  const onGoogleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await LoginWithGoogle()
  }

  useEffect(() => {
    getGoogleAuth().then((result) => {})
  }, [])

  return (
    <VStack justifyContent="center" alignItems="center" height="100vh">
      <Button
        leftIcon={<CgMail />}
        colorScheme="red"
        variant="solid"
        onClick={onGoogleLogin}
      >
        Login
      </Button>
    </VStack>
  )
}

// Login.propTypes = {}

export { Login }
