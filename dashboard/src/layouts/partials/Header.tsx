import React from 'react'
// import PropTypes from 'prop-types'

import { useHistory } from 'react-router'
import { useAtom } from 'jotai'
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

import { logout } from '@src/services/LoginWithGoogle'
import { useAuthUserAtom } from '@src/atoms/AuthUserAtom'

const Header: React.FC = () => {
  const history = useHistory()

  const [, setUser] = useAtom(useAuthUserAtom)

  return (
    <HStack py="4" pr="6" justifyContent="space-between" alignItems="center">
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
          <MenuItem
            onClick={() => {
              logout().then(() => {
                setUser(null)
                history.push('/')
              })
            }}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  )
}

// Header.propTypes = {}

export { Header }
