import { getParams } from '@/lib/utils';
import { ApiParams } from '@/types/custom';
import { ProductsResponse } from '@/types/products';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, ApiParams>({
    query: (params) => {
        const queryParams = getParams(params);
        return {
          url: `/products`,
          method: 'GET',
          params: queryParams,
        };
      },
    }),
  }),
});


export const { useGetProductsQuery } = productsApi;

export default productsApi;