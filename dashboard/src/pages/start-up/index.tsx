import React from 'react'
// import PropTypes from 'prop-types'

import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import { CgMail } from 'react-icons/cg'

const StartUp: React.FC = () => {
  const onGoogleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    alert('ok')
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
