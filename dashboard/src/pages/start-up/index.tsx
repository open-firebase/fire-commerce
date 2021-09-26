import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import { CgMail } from 'react-icons/cg'
import { getGoogleAuth, LoginWithGoogle } from '../../services/LoginWithGoogle'

const StartUp: React.FC = () => {
  const onGoogleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await LoginWithGoogle()
  }

  useEffect(() => {
    getGoogleAuth().then((result) => {
      console.log(result.user)
    })
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
