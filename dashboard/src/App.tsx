import React from 'react'
// import PropTypes from 'prop-types'
import { BrowserRouter, Switch as Routes, Redirect } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { RouteWithLayout } from './layouts'
import { StartUp } from './pages/start-up'
import { StartUpSetup } from './pages/start-up/setup'
import { Dashboard } from './pages/[dn]/dashboard'
import { Login } from './pages/[dn]/login'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          {/* start-up pages */}
          <RouteWithLayout exact path="/">
            <Redirect to="/start-up" />
          </RouteWithLayout>
          <RouteWithLayout exact path="/start-up">
            <StartUp />
          </RouteWithLayout>
          <RouteWithLayout exact path="/start-up/setup">
            <StartUpSetup />
          </RouteWithLayout>
          {/* [dn] pages */}
          <RouteWithLayout exact path="/:dn/login">
            <Login />
          </RouteWithLayout>
          <RouteWithLayout exact path="/:dn/dashboard" layout="authorized">
            <Dashboard />
          </RouteWithLayout>
          {/* error page */}
          <RouteWithLayout path="*">
            <div>404</div>
          </RouteWithLayout>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}
// App.propTypes = {}

export { App }
