import React from 'react'
// import PropTypes from 'prop-types'

import { Link as RLink } from 'react-router-dom'
import { useAtom } from 'jotai'
import { Box, Text, IconButton, VStack, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import {
  AiOutlineDashboard,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from 'react-icons/ai'
import { FaList, FaUsers } from 'react-icons/fa'
import { FcSalesPerformance, FcSettings } from 'react-icons/fc'

import { useIsSidebarOpen } from '@src/atoms/ToggleSidebarAtom'

const Link = styled(RLink)({
  display: 'flex',
  alignItems: 'center',
})

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(useIsSidebarOpen)

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
      borderRight="1px"
      borderColor="gray.200"
      px={isSidebarOpen ? '8' : '4'}
      position="relative"
    >
      <Box>
        <VStack py="4" alignItems={isSidebarOpen ? 'flex-start' : 'center'}>
          <Text h="48px">{isSidebarOpen ? 'Website Logo' : 'Icon'}</Text>
        </VStack>

        <VStack
          spacing="6"
          alignItems={isSidebarOpen ? 'flex-start' : 'center'}
        >
          <Link
            to={{
              pathname: '/:dn/dashboard',
            }}
          >
            <IconButton
              variant="ghost"
              aria-label="dashboard"
              icon={<AiOutlineDashboard />}
              mr={isSidebarOpen ? '2' : '0'}
            />
            {isSidebarOpen && 'Dashboard'}
          </Link>

          <Link
            to={{
              pathname: '/:dn/users',
            }}
          >
            <IconButton
              variant="ghost"
              aria-label="users"
              icon={<FaUsers />}
              mr={isSidebarOpen ? '2' : '0'}
            />
            {isSidebarOpen && 'Users'}
          </Link>

          <Link to="/:dn/products">
            <IconButton
              variant="ghost"
              aria-label="products"
              icon={<FaList />}
              mr={isSidebarOpen ? '2' : '0'}
            />
            {isSidebarOpen && 'Products'}
          </Link>

          <Link to="/">
            <IconButton
              variant="ghost"
              aria-label="campaigns"
              icon={<FaList />}
              mr={isSidebarOpen ? '2' : '0'}
            />
            {isSidebarOpen && 'Campaigns'}
          </Link>

          <Link to="/">
            <IconButton
              variant="ghost"
              aria-label="orders"
              icon={<FaList />}
              mr={isSidebarOpen ? '2' : '0'}
            />
            {isSidebarOpen && 'Orders'}
          </Link>

          <Link to="/">
            <IconButton
              variant="ghost"
              aria-label="sales"
              icon={<FcSalesPerformance />}
              mr={isSidebarOpen ? '2' : '0'}
            />
            {isSidebarOpen && 'Sales'}
          </Link>

          <Link to="/">
            <IconButton
              variant="ghost"
              aria-label="campaigns"
              icon={<FcSettings />}
              mr={isSidebarOpen ? '2' : '0'}
            />
            {isSidebarOpen && 'Settings'}
          </Link>
        </VStack>
      </Box>

      {/* <Box pt="8">
        <List spacing={6}>
          <ListItem>
            <Link
              to={{
                pathname: '/:dn/dashboard',
              }}
            >
              <ListIcon as={AiOutlineDashboard} />
              {isSidebarOpen && 'Dashboard'}
            </Link>
          </ListItem>

          <ListItem>
            <Link
              to={{
                pathname: '/:dn/users',
              }}
            >
              <ListIcon as={FaUsers} />
              {isSidebarOpen && 'Users'}
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/:dn/products">
              <ListIcon as={FaList} />
              {isSidebarOpen && 'Products'}
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/">
              <ListIcon as={FaList} />
              {isSidebarOpen && 'Campaigns'}
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/">
              <ListIcon as={FaList} />
              {isSidebarOpen && 'Orders'}
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/">
              <ListIcon as={FcSalesPerformance} />
              {isSidebarOpen && 'Sales'}
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/">
              <ListIcon as={FcSettings} />
              {isSidebarOpen && 'Settings'}
            </Link>
          </ListItem>
        </List>
      </Box> */}

      <VStack mt="6" py="4" alignItems={isSidebarOpen ? 'flex-end' : 'center'}>
        <IconButton
          onClick={setIsSidebarOpen}
          icon={
            isSidebarOpen ? <AiOutlineDoubleLeft /> : <AiOutlineDoubleRight />
          }
          size="md"
          aria-label="Left/Right Arrow"
          variant="outline"
          rounded="full"
        />
      </VStack>
    </Flex>
  )
}

// Sidebar.propTypes = {}

export { Sidebar }
