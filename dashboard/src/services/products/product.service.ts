import { addDoc } from 'firebase/firestore'
import * as z from 'zod'

import { collection } from '../firebase'

const schema = z.object({
  productName: z.string(),
  price: z
    .string()
    .transform((v) => (v ? Number(v) : v))
    .refine((v) => typeof v === 'number'),
  stockCount: z
    .string()
    .transform((v) => (v ? Number(v) : v))
    .refine((v) => typeof v === 'number'),
  coverImg: z.string(),
  shortDesc: z.string(),
  desc: z.string(),
  tags: z
    .array(z.string())
    .max(10, { message: '{{filed}} cannot exceed 10 tags.' }),
  // images: z.array(z.string()),
})

type Product = z.infer<typeof schema>

const create = (newProduct: Product) =>
  addDoc(collection('products'), newProduct)

export type { Product }

export { schema, create }
