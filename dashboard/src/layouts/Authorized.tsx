import React from 'react'
import PropTypes from 'prop-types'
import { useAtom } from 'jotai'
import { Grid, GridItem } from '@chakra-ui/react'

import { Header } from './partials/Header'
import { Sidebar } from './partials/Sidebar'
import { useIsSidebarOpen } from '@src/atoms/ToggleSidebarAtom'

const Authorized: React.FC = ({ children }) => {
  const [isSidebarOpen] = useAtom(useIsSidebarOpen)

  return (
    <Grid templateColumns={isSidebarOpen ? '300px 1fr' : '100px 1fr'}>
      <GridItem overflowY="auto" maxH="100vh">
        <Sidebar />
      </GridItem>
      <GridItem overflowY="auto" maxH="100vh">
        <Header />
        {children}
      </GridItem>
    </Grid>
  )
}

Authorized.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export { Authorized }
