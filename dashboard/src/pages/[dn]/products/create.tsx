import React from 'react'

import { Box } from '@chakra-ui/layout'

import { AppBreadcrumb } from '@src/components/AppBreadcrumb'
import { productBreadcrumb } from '@src/constants/breadcrumbs'
import { ProductCreateForm } from '@src/components/ProductCreateForm'

const ProductCreate: React.FC = () => {
  const { create } = productBreadcrumb

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
        <ProductCreateForm />
      </Box>
    </Box>
  )
}

export { ProductCreate }
