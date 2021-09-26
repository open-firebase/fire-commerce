import React from 'react'
// import PropTypes from 'prop-types'

import {
  VStack,
  Box,
  Heading,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Button,
} from '@chakra-ui/react'

const StartUpSetup: React.FC = () => {
  return (
    <VStack justifyContent="center" alignItems="center" height="90vh">
      <Heading as="h3">Website Onboarding</Heading>
      <Box bgColor="gray.50" boxShadow="md" rounded="md" width="50%" p="10">
        <FormControl>
          <FormLabel>Website Name</FormLabel>
          <Input type="text" bg="white" placeholder="your website name" />
          <FormHelperText>e.g. Koala</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Dashboard Name</FormLabel>
          <Input type="text" bg="white" placeholder="your dashboard name" />
          <FormHelperText>e.g. yourwebsite.com/dashboard_name</FormHelperText>
        </FormControl>

        <Button
          variant="link"
          float="right"
          mt="8"
          fontWeight="bold"
          fontSize="2xl"
        >
          Next
        </Button>
      </Box>
    </VStack>
  )
}

// StartUpSetup.propTypes = {}

export { StartUpSetup }
