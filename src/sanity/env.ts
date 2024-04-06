import { CLIENT_ENV } from '@/env/client'

export const apiVersion = CLIENT_ENV.NEXT_PUBLIC_SANITY_API_VERSION

export const dataset = CLIENT_ENV.NEXT_PUBLIC_SANITY_DATASET

export const projectId = CLIENT_ENV.NEXT_PUBLIC_SANITY_PROJECT_ID

export const useCdn = false
