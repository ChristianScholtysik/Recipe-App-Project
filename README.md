# Recipe App

Welcome to the Recipe App! This is a web application built with React, TypeScript, Tailwind CSS, and Supabase. The app allows users to browse and view recipes, including detailed ingredient lists and preparation instructions.
[Figma File:](https://www.figma.com/design/IrnliGaGibn1p1GD8Kj7Uo/Rezeptwelt?node-id=1-48&t=S5JXdYLtzLS8RX2K-0)

## Features

- **Home Page**: Includes a hero section and an overview of the app's purpose.
- **Recipes Page**: Lists all available recipes with the ability to click on any recipe to view details.
- **Single Recipe Page**: Displays detailed information about a selected recipe, including ingredients, instructions, and additional information.
- **About Us Page**: Provides information about the team behind the app.
- **Dark Mode**: Toggle between light and dark themes.

## Project Structure

The project is structured as follows:

- `src/components/`: Contains reusable components like `Footer`, `Header`, `Hero`, and `NavBar`.
- `src/pages/`: Contains the main pages of the app (`Home`, `AboutUs`, `Recipes`, `SearchResultList`, and `SingleRecipe`).
- `src/Context/`: Contains the `DarkModeContext` for managing theme toggling.
- `src/lib/`: Contains utility functions like `supabaseClient` for interacting with the Supabase backend.
- `src/types/`: Contains TypeScript types generated from Supabase.

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **TypeScript**: For static typing.
- **Tailwind CSS**: For utility-first CSS styling.
- **Supabase**: Backend-as-a-Service providing a Postgres database and authentication.
- **Vite**: Build tool for faster development and production builds.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or above)
- npm or yarn

### Installation

1. Clone the repository:

   git clone https://github.com/your-username/recipe-app.git
   cd recipe-app

2. Install dependencies:

npm install
or
yarn install

3. Set up environment variables:
   Create a .env file in the root directory and add your Supabase credentials:
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

4. Start the development server:
   npm run dev
   or
   yarn dev
   Open http://localhost:3000 to view the app.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.

### Acknowledgments

- [Supabase](https://supabase.io/) for providing a great BaaS platform.
- [Vite](https://vitejs.dev/) for fast builds and hot module replacement.
- [Tailwind CSS](https://tailwindcss.com/) for a great utility-first CSS framework.

### Key Points:

- **Features**: Describes what the app does.
- **Project Structure**: Overview of how the project is organized.
- **Tech Stack**: Lists the technologies used.
- **Getting Started**: Instructions to set up the project locally.
- **Contributing**: Encourages contributions.
- **License**: Licensing information.
