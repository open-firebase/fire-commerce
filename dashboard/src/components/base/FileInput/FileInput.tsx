import React from 'react'
// import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'
import { Box, Text } from '@chakra-ui/react'

const FileInput: React.FC = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()

  const files = acceptedFiles.map((file) => (
    <li key={(file as any).path}>
      {(file as any).path} - {file.size} bytes
    </li>
  ))

  return (
    <Box>
      <Box {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Text>Drag 'n' drop some files here, or click to select files</Text>
      </Box>
      <Box as="aside">
        <h4>Files</h4>
        <ul>{files}</ul>
      </Box>
    </Box>
  )
}
// FileInput.propTypes = {}

export { FileInput }
