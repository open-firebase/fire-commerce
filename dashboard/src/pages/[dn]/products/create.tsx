import React, { useState } from 'react'

import { FormControl, FormLabel, FormHelperText } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, HStack, VStack } from '@chakra-ui/layout'
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/number-input'
import { Textarea } from '@chakra-ui/textarea'

import { AppBreadcrumb } from '../../../components/AppBreadcrumb'
import { productBreadcrumb } from '../../../constants/breadcrumbs'
import { Button } from '@chakra-ui/button'
import TagElement from '../../../components/TagElement'

interface formInputType {
  name: string
  price: number
  stock: number
  short_description: string
  description: string
  tag: string
}

const ProductCreate: React.FC = () => {
  const [formInput, setFormInput] = useState<formInputType>({
    name: '',
    price: 0,
    stock: 0,
    short_description: '',
    description: '',
    tag: '',
  })
  const [tags, setTags] = React.useState<string[]>([])

  const { create } = productBreadcrumb

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value })
  }

  const handleAddTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value

    const canAdd =
      tags.length === 0 ||
      !tags.map((tag) => tag === inputValue).filter((tag) => tag === true)[0]

    if (e.key === 'Enter' && inputValue !== '' && tags.length < 10 && canAdd) {
      setTags([...tags, formInput.tag])
      setFormInput({ ...formInput, tag: '' })
    }
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
            <Input
              type="text"
              onChange={handleInputChange}
              value={formInput.name}
              name="name"
              placeholder="product name"
            />
          </FormControl>

          <FormControl id="price" isRequired>
            <FormLabel>Price</FormLabel>
            <NumberInput min={1}>
              <NumberInputField
                onChange={handleInputChange}
                value={formInput.price}
                name="price"
                placeholder="price"
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="stock" isRequired>
            <FormLabel>InStock</FormLabel>
            <NumberInput min={0}>
              <NumberInputField
                onChange={handleInputChange}
                value={formInput.stock}
                name="stock"
                placeholder="Instock"
              />
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
            <FormHelperText>{`${formInput.short_description.length}/100`}</FormHelperText>
            <Textarea
              onChange={handleInputChange}
              value={formInput.short_description}
              name="short_description"
              maxLength={100}
              size="md"
              placeholder="Short Description for SEO"
              resize="none"
            ></Textarea>
          </FormControl>

          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              rows={10}
              onChange={handleInputChange}
              value={formInput.description}
              name="description"
              placeholder="Description"
              size="md"
              resize="none"
            ></Textarea>
          </FormControl>

          <FormControl id="tags" isRequired>
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
            <Input
              type="text"
              onChange={handleInputChange}
              onKeyPress={handleAddTags}
              value={formInput.tag}
              name="tag"
              placeholder="tags..."
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
