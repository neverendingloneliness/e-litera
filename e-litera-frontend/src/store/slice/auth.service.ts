import { apiSlice } from "../api/baseApi";

export interface UserData {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  role: "visitor" | "librarian";
  created_at: string;
  updated_at: string;
  // token: string;
}

export interface LoginResponse {
  success: boolean;
  user: UserData;
}

export interface UserResponse extends UserData {}

export interface LoginCredentials {
  email: string;
  password: string;
}

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<LoginResponse, LoginCredentials>({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),
    }),
    user: builder.query<UserResponse, void>({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useUserQuery, useLogoutMutation } = authApi;
