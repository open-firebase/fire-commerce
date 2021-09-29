import React from 'react'
// import PropTypes from 'prop-types'

import { Redirect } from 'react-router'
import { useAtom } from 'jotai'
import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import { CgMail } from 'react-icons/cg'

import { useAuthUserAtom } from '@src/atoms/AuthUserAtom'
import { LoginWithGoogle } from '@src/services/LoginWithGoogle'
// import { useHistory } from 'react-router'

const StartUp: React.FC = () => {
  const [user] = useAtom(useAuthUserAtom)
  // const history = useHistory()

  // const onGoogleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault()
  //   LoginWithGoogle()
  // }

  return user ? (
    <Redirect to="/:dn/dashboard" />
  ) : (
    <VStack justifyContent="center" alignItems="center" height="100vh">
      <Button
        leftIcon={<CgMail />}
        colorScheme="red"
        variant="solid"
        onClick={LoginWithGoogle}
      >
        Create Admin
      </Button>
    </VStack>
  )
}

// StartUp.propTypes = {}

export { StartUp }
