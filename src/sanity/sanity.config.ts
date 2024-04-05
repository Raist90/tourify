import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { apiVersion, dataset, projectId } from '@/sanity/env'
import { defaultDocumentNode } from '@/sanity/helpers'
import { schema } from '@/sanity/schema'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ defaultDocumentNode }),
    unsplashImageAsset(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
