import React from 'react'
import PropTypes from 'prop-types'
import { Route, RouteProps } from 'react-router-dom'

import { Authorized } from '../layouts/Authorized'
import { UnAuthorized } from '../layouts/UnAuthorized'

interface RouteWithLayoutProps {
  layout?: 'unauthorized' | 'authorized'
}

const RouteWithLayout: React.FC<RouteWithLayoutProps & RouteProps> = ({
  layout = 'unauthorized',
  children,
  ...props
}) => {
  if (layout === 'authorized') {
    return (
      <Route {...props}>
        <Authorized>{children}</Authorized>
      </Route>
    )
  }

  return (
    <Route {...props}>
      <UnAuthorized>{children}</UnAuthorized>
    </Route>
  )
}
RouteWithLayout.propTypes = {
  layout: PropTypes.any,
}

export { RouteWithLayout }
