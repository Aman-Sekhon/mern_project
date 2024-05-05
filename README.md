# MERN JWT Authentication

## Overview
The MERN Stack JWT Authentication project is a robust web application that demonstrates the implementation of user authentication using JSON Web Tokens (JWT) in a MERN (MongoDB, Express.js, React, Node.js) stack environment. This project provides a secure and scalable solution for managing user authentication and authorization in modern web applications.

The key features of this project include:
- **User Registration**: Allows new users to create an account securely with password hashing and salting.
- **User Login**: Provides a secure login mechanism using JWT tokens for authenticated access to protected routes.
- **Token-based Authentication**: Implements token-based authentication to validate user sessions and grant access to authorized resources.
- **Protected Routes**: Ensures that certain routes are accessible only to authenticated users with valid JWT tokens.
- **Logout Functionality**: Enables users to securely logout, destroying their session and invalidating their JWT token.
- **Responsive UI**: Utilizes React for building a dynamic and user-friendly frontend interface that adapts to different screen sizes.
This project serves as a foundational template for implementing authentication functionality in MERN stack applications, offering developers a comprehensive solution with best practices for user authentication and authorization.

## Technologies Used
- **MongoDB**: NoSQL database for storing user data and session information.
- **Express.js**: Backend framework for building RESTful APIs and handling authentication logic.
- **React**: Frontend library for building dynamic and interactive user interfaces.
- **Node.js**: JavaScript runtime environment for running server-side code.
- **JWT Authentication**: Token-based authentication mechanism for securing user sessions.

## Screenshots
<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/Aman-Sekhon/mern_project/blob/d5df389d350952d2001b23f83ebe9212957bcd62/client/public/Screenshot%20(315).png" width="30%">
    <img src="https://github.com/Aman-Sekhon/mern_project/blob/d5df389d350952d2001b23f83ebe9212957bcd62/client/public/Screenshot%20(317).png" width="30%">
    <img src="https://github.com/Aman-Sekhon/mern_project/blob/d5df389d350952d2001b23f83ebe9212957bcd62/client/public/Screenshot%20(318).png" width="30%">
</div>

## Installation
- **Download Code**: Download code from this repository
- **Unzip Folder**: Extract the downloaded zip file to a location of your choice on your local machine.
- **Install Dependencies**:
  - Open your terminal or command prompt.
  - Navigate to the project directory.
  - Run the following command to install the required dependencies:
    ```bash
     npm i
     ```
    If you encounter any peer dependencies issues, you can try the following command:
    ```bash
    npm --legacy-peer-deps install
    ```
- **Start the Application**: 
  After successfully installing the dependencies, run the following command to start the application:
  ```bash
  npm start
  ```
