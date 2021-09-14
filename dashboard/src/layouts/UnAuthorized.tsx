import React from 'react'
import PropTypes from 'prop-types'

const UnAuthorized: React.FC = ({ children }) => {
  return <>{children}</>
}

UnAuthorized.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export { UnAuthorized }
