import React from 'react'
// import PropTypes from 'prop-types'

import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/menu'
import { Box, HStack } from '@chakra-ui/layout'
import { FormControl } from '@chakra-ui/form-control'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { GoSearch } from 'react-icons/go'
import { Avatar } from '@chakra-ui/avatar'

const Header: React.FC = () => {
  return (
    <HStack
      pt="4"
      pb="8"
      pr="6"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box mx="auto">
        <FormControl width="md">
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<GoSearch />} />
            <Input type="text" placeholder="Search..." />
          </InputGroup>
        </FormControl>
      </Box>

      <Menu>
        <MenuButton _hover={{ cursor: 'pointer' }}>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </MenuButton>

        <MenuList>
          <MenuItem>Edit Profile</MenuItem>
          <MenuDivider />
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  )
}

// Header.propTypes = {}

export { Header }
