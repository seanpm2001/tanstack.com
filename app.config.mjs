import { sentryVitePlugin } from '@sentry/vite-plugin'
import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  vite: () => {
    return {
      plugins: [
        sentryVitePlugin({
          authToken: process.env.SENTRY_AUTH_TOKEN,
          org: 'tanstack',
          project: 'tanstack-com',
        }),
      ],
    }
  },
})
