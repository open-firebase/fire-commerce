import React from 'react'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'
import { Box, Text, Image, Stack } from '@chakra-ui/react'

type FileInputProps = Omit<
  React.HtmlHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  ref?: any
  name?: string
  multiple?: boolean
  onChange?: (files: File[]) => void
}

const FileInput: React.FC<FileInputProps> = ({
  ref,
  name,
  multiple,
  onChange,
  ...rest
}) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: multiple ? true : false,
  })

  const files = acceptedFiles.map((file: any) => (
    <Image
      boxSize="100px"
      objectFit="cover"
      key={file.path}
      src={URL.createObjectURL(file)}
      alt="Cover"
    />
  ))

  React.useEffect(() => onChange && onChange(acceptedFiles), [acceptedFiles])

  return (
    <Box border="1px dashed #ccc" minW="xl" textAlign="center">
      <Box {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} name={name} {...rest} />
        <Text>Drag 'n' drop some files here, or click to select files</Text>
      </Box>
      <Box as="aside">
        <Stack direction="row">{files}</Stack>
      </Box>
    </Box>
  )
}

FileInput.propTypes = {
  name: PropTypes.string,
  multiple: PropTypes.bool,
}

export { FileInput }
