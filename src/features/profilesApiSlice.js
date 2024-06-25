import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profilesApi = createApi({
  reducerPath: "profilesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://crudcrud.com/api",
  }),
  endpoints: (builder) => ({
    getProfiles: builder.query({
      query: (profiles) => ({
        url: "/8a637c1c696a473aa8a9b8351274e5c0",
        method: "GET",
      }),
    }),
    saveProfiles: builder.mutation({
      query: (profiles) => ({
        url: "/8a637c1c696a473aa8a9b8351274e5c0",
        method: "POST",
        body: profiles,
      }),
    }),
  }),
});

export const { useGetProfilesQuery, useSaveProfilesMutation } = profilesApi;
