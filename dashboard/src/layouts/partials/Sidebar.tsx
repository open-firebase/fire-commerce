import React from 'react'
// import PropTypes from 'prop-types'

import { Box, List, ListIcon, ListItem, Text } from '@chakra-ui/layout'
import {
  AiOutlineDashboard,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from 'react-icons/ai'
import { FaList, FaUsers } from 'react-icons/fa'
import { FcSalesPerformance, FcSettings } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { useIsToggleSidebarAtom } from '../../atoms/ToggleSidebarAtom'
import { IconButton } from '@chakra-ui/button'

const Sidebar: React.FC = () => {
  const [isToggleSidebar, setIsToggleSidebar] = useAtom(useIsToggleSidebarAtom)

  return (
    <Box
      height="100vh"
      borderRight="1px"
      borderColor="gray.200"
      px={isToggleSidebar ? '16' : '8'}
      position="relative"
    >
      <Box pt="4" pb="8">
        <Text>{isToggleSidebar ? 'Website Logo' : 'Icon'}</Text>
      </Box>

      <Box pt="8">
        <List spacing={6}>
          <ListItem>
            <Link
              to={{
                pathname: '/:dn/dashboard',
              }}
            >
              <ListIcon as={AiOutlineDashboard} />
              {isToggleSidebar && 'Dashboard'}
            </Link>
          </ListItem>

          <ListItem>
            <Link
              to={{
                pathname: '/:dn/users',
              }}
            >
              <ListIcon as={FaUsers} />
              {isToggleSidebar && 'Users'}
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/:dn/products">
              <ListIcon as={FaList} />
              {isToggleSidebar && 'Products'}
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/">
              <ListIcon as={FaList} />
              {isToggleSidebar && 'Campaigns'}
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/">
              <ListIcon as={FaList} />
              {isToggleSidebar && 'Orders'}
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/">
              <ListIcon as={FcSalesPerformance} />
              {isToggleSidebar && 'Sales'}
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/">
              <ListIcon as={FcSettings} />
              {isToggleSidebar && 'Settings'}
            </Link>
          </ListItem>
        </List>
      </Box>

      <Box position="absolute" bottom="0" right="0" mt={6}>
        <IconButton
          onClick={setIsToggleSidebar}
          icon={
            isToggleSidebar ? <AiOutlineDoubleLeft /> : <AiOutlineDoubleRight />
          }
          size="lg"
          aria-label="Left/Right Arrow"
          variant="link"
        />
      </Box>
    </Box>
  )
}

// Sidebar.propTypes = {}

export { Sidebar }
