import React from 'react'

import { Box } from '@chakra-ui/layout'
import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/table'
import { Button } from '@chakra-ui/button'
import { Link } from 'react-router-dom'

import { AppBreadcrumb } from '@src/components/AppBreadcrumb'
import { productBreadcrumb } from '@src/constants/breadcrumbs'

const Products: React.FC = () => {
  const { list } = productBreadcrumb

  return (
    <Box p="8">
      <AppBreadcrumb links={list}>
        <Button variant="solid" colorScheme="facebook">
          <Link to="/:dn/products/create">Create</Link>
        </Button>
      </AppBreadcrumb>

      <Box
        p="8"
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="md"
        boxShadow="md"
      >
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
    </Box>
  )
}

export { Products }
