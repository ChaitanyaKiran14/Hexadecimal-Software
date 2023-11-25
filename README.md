Hexadecimal User Management System

This project is a User Management System built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It enables users to view and search for user details along with their associated posts. The backend, implemented with Node.js and Express.js, serves as an API to fetch data from external sources. The frontend, built with React.js, provides a user-friendly interface to interact with the data.

Backend Setup (Node.js & Express.js)

1. Initialize the Backend

# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Run the server
npm run dev

2. API Endpoint - /v1/users
The /v1/users endpoint fetches user and post data from external APIs, combining them based on the userId field. Additionally, it supports user search functionality using the searchText query parameter.

Frontend Setup (React.js)

1. Set Up the Frontend
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Run the React app
npm run dev

2. User Interface - Hexadecimal User Management Dashboard
The React app displays a Hexadecimal User Management Dashboard, providing a visually appealing table to view combined user and post data. The table includes a search input that allows users to search for specific users by name.

3. Integrate Search Functionality
The search input sends a request to the backend API with the search text as a query parameter (/v1/users?searchText=John). The backend filters the results based on the provided search text and returns matching users.

4. Plain CSS Styling
The styling of the table is implemented using plain CSS, emphasizing a clean and eye-catching design without relying on external frameworks or libraries.


Technologies Used :

Backend: Node.js, Express.js
Frontend: React.js
Styling: Plain CSS

Credits :

JSONPlaceholder for providing the external APIs used in this project.

License :

This project is licensed under the MIT License.
