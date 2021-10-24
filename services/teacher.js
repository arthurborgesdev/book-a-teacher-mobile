import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const teacherApi = createApi({
  reducerPath: 'teacherApi',
  tagTypes: ['teacher'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://book-a-teacher.herokuapp.com/api/v1/' }),
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => '/teachers',
      providesTags: ['teacher'],
    }),
  }),
});

export const { useGetTeachersQuery } = teacherApi;