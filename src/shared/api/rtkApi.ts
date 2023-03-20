import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import 'isomorphic-fetch'

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL ?? 'localhost:3000'
  }),
  endpoints: (_builder) => ({})
})
