import React, { useState } from 'react'

import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, VStack } from '@chakra-ui/layout'
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/number-input'
import { Textarea } from '@chakra-ui/textarea'
import { WithContext as Tags } from 'react-tag-input'

import { AppBreadcrumb } from '../../../components/AppBreadcrumb'
import { productBreadcrumb } from '../../../constants/breadcrumbs'
import { Button } from '@chakra-ui/button'

interface TagType {
  id: string
  text: string
}

const KeyCodes = {
  comma: 188,
  enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

const ProductCreate: React.FC = () => {
  const [tags, setTags] = useState<TagType[]>([{ id: '', text: '' }])

  const { create } = productBreadcrumb

  const handleDelete = (i: number) => {
    setTags(tags.filter((tag, index) => index !== i))
  }

  const handleAddition = (tag: TagType) => {
    setTags([...tags, tag])
  }

  const handleCreateProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    alert('create')
  }

  return (
    <Box p="8">
      <AppBreadcrumb links={create}></AppBreadcrumb>

      <Box
        p="8"
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="md"
        boxShadow="md"
      >
        <VStack spacing="6">
          <FormControl id="name" isRequired>
            <FormLabel>Product Name</FormLabel>
            <Input type="text" placeholder="product name" />
          </FormControl>

          <FormControl id="price" isRequired>
            <FormLabel>Price</FormLabel>
            <NumberInput min={1}>
              <NumberInputField placeholder="price" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="stock" isRequired>
            <FormLabel>InStock</FormLabel>
            <NumberInput min={0}>
              <NumberInputField placeholder="Instock" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="cover-image" isRequired>
            <FormLabel>Cover Image</FormLabel>
            <Input
              type="file"
              placeholder="Cover Image for SEO"
              accept="image/*"
            />
          </FormControl>

          <FormControl id="short-description" isRequired>
            <FormLabel>Short Description</FormLabel>
            <Textarea
              placeholder="Short Description for SEO"
              size="md"
              maxLength={100}
            ></Textarea>
          </FormControl>

          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder="Description" size="md"></Textarea>
          </FormControl>

          <FormControl id="tags" isRequired>
            <FormLabel>Tag</FormLabel>
            <Tags
              tags={tags}
              delimiters={delimiters}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              inputFieldPosition="bottom"
              autocomplete
            />
          </FormControl>

          <FormControl id="images" isRequired>
            <FormLabel>Product Images</FormLabel>
            <Input
              type="file"
              placeholder="Product Images"
              accept="image/*"
              multiple
            />
          </FormControl>

          <Button
            type="submit"
            variant="solid"
            colorScheme="twitter"
            size="md"
            width="100%"
            onClick={handleCreateProduct}
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </Box>
  )
}

export { ProductCreate }
