# Employee Dashboard

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