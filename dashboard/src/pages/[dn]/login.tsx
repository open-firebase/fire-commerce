import React from 'react'
// import PropTypes from 'prop-types'

import { VStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { CgMail } from 'react-icons/cg'

const Login: React.FC = () => {
  return (
    <VStack justifyContent="center" alignItems="center" height="100vh">
      <Button leftIcon={<CgMail />} colorScheme="red" variant="solid">
        Login
      </Button>
    </VStack>
  )
}

// Login.propTypes = {}

export { Login }
