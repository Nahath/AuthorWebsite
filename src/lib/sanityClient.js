import { createClient } from '@sanity/client'

export default createClient({
  projectId: 'bk3eqagp',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})
