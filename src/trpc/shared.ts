import { CLIENT_ENV } from '@/env/client'
import { type AppRouter } from '@/server/api/root'
import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'
import superjson from 'superjson'

export const transformer = superjson

function getBaseUrl() {
  if (typeof window !== 'undefined') return ''
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return `${CLIENT_ENV.APP_URL}`
}

export function getUrl() {
  return getBaseUrl() + '/api/trpc'
}

/**
 * Inference helper for inputs.
 *
 * @example
 *   type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>

/**
 * Inference helper for outputs.
 *
 * @example
 *   type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>
