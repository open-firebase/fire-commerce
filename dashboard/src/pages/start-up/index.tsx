import React from 'react'
// import PropTypes from 'prop-types'

import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import { CgMail } from 'react-icons/cg'
import { GoogleLogin } from '../../services/GoogleAuth'

const StartUp: React.FC = () => {
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
        Create Admin
      </Button>
    </VStack>
  )
}

// StartUp.propTypes = {}

export { StartUp }
