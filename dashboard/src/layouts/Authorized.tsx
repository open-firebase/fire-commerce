import React from 'react'
import PropTypes from 'prop-types'
import { Grid, GridItem } from '@chakra-ui/react'
import { Header } from './partials/Header'
import { Sidebar } from './partials/Sidebar'

const Authorized: React.FC = ({ children }) => {
  return (
    <Grid templateColumns="300px 1fr">
      <GridItem>
        <Sidebar />
      </GridItem>
      <GridItem>
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
