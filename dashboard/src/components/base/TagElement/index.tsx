import React from 'react'
import PropTypes from 'prop-types'

import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/tag'

const TagElement: React.FC<{
  value: string
  onClose: () => void
}> = ({ value, onClose }) => {
  return (
    <Tag size="sm" variant="solid" colorScheme="blue">
      <TagLabel>{value}</TagLabel>
      <TagCloseButton onClick={() => onClose()}></TagCloseButton>
    </Tag>
  )
}

TagElement.propTypes = {
  value: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export { TagElement }
