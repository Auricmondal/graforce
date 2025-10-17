import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'sib3yr4f',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
  }
})
