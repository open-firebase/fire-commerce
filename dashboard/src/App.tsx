import React from 'react'
// import PropTypes from 'prop-types'

import { BrowserRouter, Switch as Routes, Redirect } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { RouteWithLayout } from './layouts'
import { StartUp } from './pages/start-up'
import { StartUpSetup } from './pages/start-up/setup'
import { Dashboard } from './pages/[dn]/dashboard'
import { Login } from './pages/[dn]/login'
import { Users } from './pages/[dn]/users'
import { Products } from './pages/[dn]/products'
import { ProductCreate } from './pages/[dn]/products/create'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          {/* start-up pages */}
          <RouteWithLayout exact path="/">
            <Redirect to="/start-up" />
          </RouteWithLayout>
          <RouteWithLayout path="/start-up">
            <StartUp />
          </RouteWithLayout>
          <RouteWithLayout path="/start-up/setup">
            <StartUpSetup />
          </RouteWithLayout>
          {/* [dn] pages */}
          <RouteWithLayout path="/:dn/login">
            <Login />
          </RouteWithLayout>
          <RouteWithLayout path="/:dn/dashboard" layout="authorized">
            <Dashboard />
          </RouteWithLayout>
          <RouteWithLayout path="/:dn/users" layout="authorized">
            <Users />
          </RouteWithLayout>
          <RouteWithLayout exact path="/:dn/products" layout="authorized">
            <Products />
          </RouteWithLayout>
          <RouteWithLayout path="/:dn/products/create" layout="authorized">
            <ProductCreate />
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
