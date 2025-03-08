import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/index.ts',
    video: false,
    experimentalStudio: true,
    projectId: 'your-project-id',
  },
});