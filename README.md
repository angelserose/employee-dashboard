# React Employee Dashboard

A modern, responsive employee management dashboard built with React, TypeScript, and Bootstrap.

## Features

- 📊 Employee Dashboard with data from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)
- 📝 Employee Form with field validation
- 🎯 Modern UI with Bootstrap 5 and Bootstrap Icons
- 🚀 Built with React 18 and TypeScript
- 📱 Fully responsive design
- 🛣️ React Router v6 for navigation

## Setup and Run Locally

1. Clone the repository
```bash
git clone https://github.com/your-username/employee-dashboard.git
cd employee-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The app will open in your default browser at [http://localhost:3000](http://localhost:3000).

## Tech Stack

- React 18
- TypeScript
- React Router v6
- Bootstrap 5
- Bootstrap Icons
- Axios

## Project Structure

```
src/
├── components/        # Reusable components
├── pages/            # Page components
├── services/         # API services
├── hooks/            # Custom React hooks
├── types/            # TypeScript type definitions
└── styles/           # Global styles
```

## Build for Production

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

This is a React application for managing employee data. It features a dashboard that displays a list of users fetched from an external API and includes a form for adding new employee details.

## Features

- **User List**: Displays a list of users with their ID, Name, and Email fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
- **Employee Form**: A form to input employee details including Name, Designation, Location, and Salary.
- **Responsive Navbar**: Navigation links to switch between the Home page and the Employee Form.

## Technologies Used

- React
- TypeScript
- React Router
- CSS (with a chosen CSS library for styling)

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd employee-dashboard
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Project Structure

```
employee-dashboard
├── public
│   └── index.html
├── src
│   ├── index.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── components
│   │   ├── Navbar.tsx
│   │   ├── UserList.tsx
│   │   └── UserTable.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── EmployeeForm.tsx
│   ├── services
│   │   └── api.ts
│   ├── hooks
│   │   └── useFetchUsers.ts
│   ├── types
│   │   └── index.ts
│   └── styles
│       └── globals.css
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is open-source and available under the [MIT License](LICENSE).