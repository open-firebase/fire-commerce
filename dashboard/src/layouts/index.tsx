import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Route, RouteProps, Redirect } from 'react-router-dom'

import { Authorized } from '@src/layouts/Authorized'
import { UnAuthorized } from '@src/layouts/UnAuthorized'
import { onAuthStateChanged } from '@firebase/auth'
import { auth } from '@src/services/firebase'
import { useAtom } from 'jotai'
import { useAuthUserAtom } from '@src/atoms/AuthUserAtom'

interface RouteWithLayoutProps {
  layout?: 'unauthorized' | 'authorized'
}

const RouteWithLayout: React.FC<RouteWithLayoutProps & RouteProps> = ({
  layout = 'unauthorized',
  children,
  ...props
}) => {
  const [authUser, setAuthUser] = useAtom(useAuthUserAtom)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setAuthUser(user)
    })
  })

  if (layout === 'authorized') {
    return (authUser as any) ? (
      <Route {...props}>
        <Authorized>{children}</Authorized>
      </Route>
    ) : (
      <Redirect to="/" />
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
