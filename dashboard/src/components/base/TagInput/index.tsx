import React from 'react'
// import PropTypes from 'prop-types'
import { FormLabel, Input, HStack } from '@chakra-ui/react'

import { TagElement } from '../TagElement'

interface TagInputProps {
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onChange?: (tags: string[]) => void
  name: string
}

const TagInput: React.FC<TagInputProps> = ({ name, onChange }) => {
  const [tags, setTags] = React.useState<string[]>([])

  const handleAddTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value

    const canAdd =
      tags.length === 0 ||
      !tags.map((tag) => tag === inputValue).filter((tag) => tag === true)[0]

    if (e.key === 'Enter' && inputValue !== '' && tags.length < 10 && canAdd) {
      setTags([...tags, inputValue])
      e.currentTarget.value = ''
      // prevent form to submit on every tag enter
      e.preventDefault()
    }
  }

  React.useEffect(() => onChange && onChange(tags), [tags])

  return (
    <>
      <FormLabel>Tag</FormLabel>
      <HStack my="2">
        {tags.map((tag, index) => {
          return (
            <TagElement
              key={`${tag}-${index}`}
              value={tag}
              onClose={() => {
                setTags((currentTags) => {
                  return currentTags.filter((t) => t !== tag)
                })
              }}
            />
          )
        })}
      </HStack>
      <Input type="text" nam={name} onKeyPress={handleAddTags} />
    </>
  )
}
// TagInput.propTypes = {}

export { TagInput }
