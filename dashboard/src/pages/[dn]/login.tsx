import React from 'react'
// import PropTypes from 'prop-types'

import { VStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { CgMail } from 'react-icons/cg'
import { GoogleLogin } from '../../services/GoogleAuth'

const Login: React.FC = () => {
  const onGoogleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const { user, token, error } = await GoogleLogin()

    console.log('User: ', user)
    console.log('Token: ', token)
    console.log('Error: ', error)
  }

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
