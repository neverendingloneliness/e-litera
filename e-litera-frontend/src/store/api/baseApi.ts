import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { logout } from '../slice/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL, 
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState 
    const token = state.auth.token

    if (token) {
      headers.set("Authorization", `Bearer ${token}`)
    }
    headers.set("Accept", "Application/JSON");
    return headers
  },
})

const baseQueryWithAuth: typeof baseQuery = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    api.dispatch(logout())
    window.location.href = "/login"
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth,
  endpoints: () => ({}), 
})