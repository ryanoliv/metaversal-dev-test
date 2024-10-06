# User Posts Feed and Profiles Application

This is a web application built with Next.js and Tailwind to display a user posts feed and user profiles. It is responsive and handles various states, such as loading and errors, effectively. The application makes use of data caching to optimize performance.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
  - [Running Production Build Locally](#running-production-build-locally)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

The goal of this project is to build a user posts feed and user profiles using data provided by an API. The application ensures responsive design, error handling, and data caching for efficient performance.

## Features

- **Responsive UI**: Built with Tailwind CSS to ensure mobile-friendly design.
- **State Management**: Loading and error states are handled to provide a better user experience.
- **HTTPS Request Caching**: Data is cached using HTTPS request caching to reduce API calls and improve performance.
- **Local Data Storage**: Data is also cached in local storage to optimize data retrieval and reduce the number of requests to the API.
- **Intersection Observer**: Used to fetch additional posts when scrolling down.

## Technologies Used

- **Next.js**: Framework for building server-side rendered React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React**: JavaScript library for building interactive user interfaces.
- **TypeScript**: For static typing and reducing runtime errors.

## Getting Started

### Prerequisites

Ensure that you have the following installed on your local development environment:

- **Node.js**: [Download and install Node.js](https://nodejs.org/en/download/). The project works best with Node.js version 14 or later.
- **Yarn or npm**: Yarn is the preferred package manager, but npm will also work.

### Installation

1. **Clone the Repository**

   ```sh
   git clone https://github.com/ryanoliv/metaversal-dev-test.git
   ```

2. **Navigate to the Project Directory**

   ```sh
   cd metaversal-dev-test
   ```

3. **Install Dependencies**

   You can use either `npm` or `yarn` to install the project dependencies:

   Using Yarn:

   ```sh
   yarn install
   ```

   Using npm:

   ```sh
   npm install
   ```

### Running Locally

1. **Create a `.env.local` File**

   Create a `.env.local` file in the root of your project directory to store environment-specific configurations, such as API URLs or keys.

   ```plaintext
   # Example contents of .env.local
   NEXT_PUBLIC_API_BASE_URL=https://dummyjson.com
   ```

2. **Run the Development Server**

   Using Yarn:

   ```sh
   yarn dev
   ```

   Using npm:

   ```sh
   npm run dev
   ```

3. **Access the Application**

   Once the server is running, open your browser and navigate to:

   ```
   http://localhost:3000
   ```

   The application should be running locally, and you can start exploring it.

### Building for Production

If you want to build the application for production, run:

Using Yarn:

```sh
yarn build
```

Using npm:

```sh
npm run build
```

This command creates an optimized production build in the `.next` directory.

### Running Production Build Locally

To test the production build locally, run:

Using Yarn:

```sh
yarn start
```

Using npm:

```sh
npm run start
```

Then open your browser and navigate to:

```
http://localhost:3000
```

## Deployment

This application is deployed on [Vercel](https://metaversal-dev-test.vercel.app/). To deploy this application on platforms such as Vercel or Netlify yourself, follow these steps:

1. **Deploy with Vercel**

   - Log in to your [Vercel](https://vercel.com/) account.
   - Import the repository from GitHub.
   - Set the environment variables using `.env.local`.
   - Deploy the application.

2. **Deploy with Netlify**

   - Log in to your [Netlify](https://www.netlify.com/) account.
   - Create a new site by importing the repository.
   - Set the environment variables as needed.
   - Deploy the application.

## Project Structure

Below is an overview of the folder structure used in the project:

```
├── src
│   └── app
│       ├── [username]          # Dynamic user profile page
│       ├── components          # Reusable React components (e.g., UserCard, SkeletonCard)
│       ├── contexts            # Context files (e.g., HeaderTitleContext)
│       ├── fonts               # Font files for custom fonts
│       ├── hooks               # Custom hooks (e.g., useFetchPosts, useFetchUsers)
│       ├── types               # TypeScript type definitions
│       ├── globals.css         # Global CSS styling for the project
│       ├── layout.tsx          # Layout file for consistent UI across pages
│       └── page.tsx            # Home page of the application
├── public                      # Static assets (e.g., images, favicon)
├── .eslintrc.json              # ESLint configuration file
├── .gitignore                  # Files and directories to ignore in Git
├── next-env.d.ts               # TypeScript Next.js environment declarations
├── next.config.mjs             # Next.js configuration file
├── package.json                # Dependencies and scripts
├── package-lock.json           # Locked versions of dependencies
├── postcss.config.mjs          # PostCSS configuration for Tailwind CSS
├── README.md                   # Project documentation
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration file
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request to contribute to the project.

To contribute:

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---
