/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from 'sanity/cli'
import { CLIENT_ENV } from '@/app/env/client'

const projectId = CLIENT_ENV.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = CLIENT_ENV.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({ api: { projectId, dataset } })
