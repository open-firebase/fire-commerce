import React from 'react'
import PropTypes from 'prop-types'

import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/breadcrumb'
import { HStack, Text } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'

const AppBreadcrumb: React.FC<{
  links: { link: string; text: string }[]
}> = ({ links, children }) => {
  return (
    <HStack justifyContent="space-between" alignItems="baseline">
      <Breadcrumb pb="8">
        {links.map((link) => (
          <BreadcrumbItem
            key={link.link}
            _hover={
              link.link !== ''
                ? { textDecoration: 'underline' }
                : { textDecoration: 'none' }
            }
          >
            {link.link !== '' ? (
              <Link to={link.link}>{link.text}</Link>
            ) : (
              <Text>{link.text}</Text>
            )}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

      {children}
    </HStack>
  )
}

AppBreadcrumb.propTypes = {
  links: PropTypes.array.isRequired,
}

export { AppBreadcrumb }
