import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/start'
import { createRouter } from './router'
import './utils/sentry'
import { startTransition } from 'react'

const router = createRouter()

// hydrateRoot(document, <StartClient router={router} />)
// startTransition(() => {
hydrateRoot(document.getElementById('root')!, <StartClient router={router} />, {
  onRecoverableError(error, errorInfo) {
    console.error(error, errorInfo)
  },
})
// })
