import React from 'react'
// import PropTypes from 'prop-types'
import {
  VStack,
  HStack,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  schema as productSchema,
  create,
  Product,
} from '@service/products/product.service'
import { upload } from '@service/file/file.service'

import { FileInput } from '@base/FileInput'
import { TagInput } from '@base/TagInput'

const ProductCreateForm = () => {
  const { handleSubmit, formState, register, setValue } = useForm({
    resolver: zodResolver(productSchema),
  })

  const submitHandler = (data: Product) => {
    console.log(data)
    // create(data)
  }

  return (
    <VStack as="form" spacing="6" onSubmit={handleSubmit(submitHandler)}>
      <FormControl id="name" isRequired>
        <FormLabel>Product Name</FormLabel>
        <Input
          type="text"
          placeholder="product name"
          {...register('productName')}
        />
      </FormControl>

      <FormControl id="price" isRequired>
        <FormLabel>Price</FormLabel>
        <NumberInput min={1}>
          <NumberInputField placeholder="price" {...register('price')} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl id="stock" isRequired>
        <FormLabel>Stock Count</FormLabel>
        <NumberInput min={0}>
          <NumberInputField
            placeholder="Stock count."
            {...register('stockCount')}
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl id="cover-image" isRequired>
        <FormLabel>Cover Image</FormLabel>
        <FileInput
          onChange={(files) => {
            if (files.length > 0)
              upload({
                file: files[0],
                folder: 'test',
                getUploadUrl: (url) => setValue('coverImg', url),
              })
          }}
          multiple={false}
        />
      </FormControl>

      <FormControl id="short-description" isRequired>
        <FormLabel>Short Description</FormLabel>
        {/* TODO: <FormHelperText>{`${formInput.short_description.length}/100`}</FormHelperText> */}
        <Textarea
          maxLength={100}
          size="md"
          placeholder="Short Description for SEO"
          resize="none"
          {...register('shortDesc')}
        ></Textarea>
      </FormControl>

      <FormControl id="description" isRequired>
        <FormLabel>Description</FormLabel>
        <Textarea
          rows={10}
          placeholder="Description"
          size="md"
          resize="none"
          {...register('desc')}
        ></Textarea>
      </FormControl>

      <FormControl id="tags">
        <TagInput name="tags" onChange={(tags) => setValue('tags', tags)} />
      </FormControl>

      {/* <FormControl id="images" isRequired>
        <FormLabel>Product Images</FormLabel>
        <Input
          type="file"
          placeholder="Product Images"
          accept="image/*"
          multiple
        />
      </FormControl> */}

      <Button
        type="submit"
        variant="solid"
        colorScheme="twitter"
        size="md"
        width="100%"
      >
        Submit
      </Button>
    </VStack>
  )
}
// ProductCreateForm.propTypes = {}

export { ProductCreateForm }
