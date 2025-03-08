# NY Times Most Popular

A React application that displays the most popular articles from The New York Times using their public API.

## Features

- Browse most popular articles from The New York Times
- Filter articles by time period (1 day, 7 days, 30 days)
- View detailed information about each article
- Responsive design that works on desktop and mobile devices

## Technologies Used

- React 19
- TypeScript
- Vite
- React Router v7
- Axios
- TailwindCSS 4
- Vitest for unit testing
- Cypress for E2E testing

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v8 or higher recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:hbghaffar01/haseeb-News-Task.git
   cd nytimes-most-popular
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your NY Times API key:

   ```
   VITE_NYT_API_KEY=your_api_key_here
   ```

   You can obtain an API key from [The New York Times Developer Portal](https://developer.nytimes.com/).

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm test` - Run unit tests
- `npm run test:watch` - Run unit tests in watch mode
- `npm run test:coverage` - Run unit tests with coverage report
- `npm run cypress` - Open Cypress test runner
- `npm run cypress:run` - Run Cypress tests in headless mode

## Testing

### Unit Tests

This project uses Vitest for unit testing. Components are tested using React Testing Library.

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### E2E Tests

End-to-end testing is handled with Cypress.

```bash
# Open Cypress Test Runner
npm run cypress

# Run Cypress tests headlessly
npm run cypress:run
```

## Folder Structure

```
nytimes-most-popular/
├── cypress/                 # Cypress E2E tests
├── public/                  # Public assets
├── src/
│   ├── assets/              # Static assets
│   ├── components/          # React components
│   │   ├── common/          # Shared components
│   │   └── features/        # Feature-specific components
│   │   └── layout/          # Application layout components
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API services
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main App component
│   └── main.tsx             # Entry point
├── test/                    # Unit tests
│   └── e2e/                 # Cypress Test code
│   └── unit/                # vitest Test code
└── README.md                # Project documentation
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [The New York Times API](https://developer.nytimes.com/) for providing access to their content
- [Vite](https://vitejs.dev/) for the excellent build tool
- [React](https://reactjs.org/) for the UI library
- [TailwindCSS](https://tailwindcss.com/) for styling
