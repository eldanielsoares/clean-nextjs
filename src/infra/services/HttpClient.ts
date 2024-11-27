import { env } from '@/config/env';
import axios from 'axios';

export const HttpClient = axios.create({
  baseURL: env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
