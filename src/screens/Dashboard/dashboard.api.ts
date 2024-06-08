import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {IPResponse} from './types';

export const dashboardApi = createApi({
  reducerPath: 'dashboard/api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://ipwho.is/'}),
  endpoints: builder => ({
    getIPDetails: builder.query<IPResponse, string | void>({
      query: ip => (ip ? `${ip}` : ''),
    }),
    getIP: builder.query<IPResponse, void>({
      query: () => '',
    }),
  }),
});

export const {useGetIPDetailsQuery, useGetIPQuery} = dashboardApi;
