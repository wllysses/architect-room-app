"use server";

import axios from "axios";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/next-auth";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const session = await getServerSession(nextAuthOptions);

  if (session?.token) {
    config.headers.Authorization = `Bearer ${session?.token}`;
  }

  return config;
});

export const registerUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await fetch("http://localhost:3001/api/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
  const data = await response.json();
  return await data;
};

export const createProfile = async ({
  cau,
  phone,
  date_of_birth,
  city,
  state,
  user_id,
}: {
  cau: string;
  phone: string;
  date_of_birth: Date;
  city: string;
  state: string;
  user_id: string;
}) => {
  const response = await api.post("/profiles/create", {
    cau,
    phone,
    date_of_birth: new Date(date_of_birth).toISOString(),
    city,
    state,
    user_id,
  });
  const { data } = response;
  return await data;
};
