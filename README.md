
# Vite React Project

This is a Vite React project with the following folder structure:

```
|-- .vscode
|-- .yarn
|-- node_modules
|-- public
|-- src
  |-- App.tsx
  |-- index.css
  |-- main.tsx
  |-- theme.ts
  |-- vite-env.d.ts
  |-- interfaces
    |-- main.ts
  |-- components
    |-- main
      |-- TableComponent.tsx
    |-- pages
      |-- Dashboard.tsx
    |-- datasource
      |-- Data.ts
```

## Installation

1. Clone the repository using the following link:

```bash
git clone https://github.com/abhishekpandit2029/Manufac-Assignment.git
```

2. Navigate to the project directory:

```bash
cd Manufac-Assignment
```

3. Install the project dependencies:

```bash
yarn install
```

## Development

To start the development server, use the following command:

```bash
npm run dev
```

This will start the Vite development server and you can view your project at `http://localhost:5173/`.

## Folder Structure

- **App.tsx**: The main application component. This serves as the root component for your application.
- **index.css**: Global CSS styles for the entire application.
- **main.tsx**: The entry point for the React application, where the React app is rendered into the DOM.
- **theme.ts**: Contains theme-related configurations, such as color palettes and typography settings.
- **vite-env.d.ts**: TypeScript declaration file for Vite environment variables.

### Interfaces
- **interfaces/main.ts**: This file contains TypeScript interfaces and types that are used throughout the application to ensure type safety.

### Components
- **components/main/TableComponent.tsx**: A reusable table component used in various parts of the application.
- **components/pages/Dashboard.tsx**: The Dashboard page component, which is one of the main pages of the application.
- **components/datasource/Data.ts**: Contains data-related functionalities, such as fetching and processing data.

## Contributing

We welcome contributions! If you have any ideas, suggestions, or bug reports, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. You can find more details in the LICENSE file.
