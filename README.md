# realtime-chat-backend (TASK 2)

**COMPANY** : CODTECH IT SOLUTIONS

**NAME** : RUSHABH PRADEEP PATEL

**INTERN ID** : CT08JZS

**DOMAIN**: BACKEND WEB DEVELOPMENT

**BATCH DURATION**: January 5th, 2025 to February 5th, 2025.

**MENTOR NAME** : NEELA SANTHOSH KUMAR

**DESCRIPTION**
This project provides a backend for a real-time chat application. It allows users to create chat rooms, send and retrieve messages, and authenticate securely using JWT tokens. The backend is built using Node.js, Express, MongoDB, and JWT for authentication.

**Tasks Completed So Far**

**1. Setup and Initialization**
Set up the initial backend structure with Node.js and Express.
Configured MongoDB for storing user data, messages, and chat room information.
Installed necessary dependencies like express, mongoose, bcryptjs, jsonwebtoken, dotenv, and nodemon.

**2. User Authentication**
Implemented User Registration and Login functionality using JWT authentication.
Used bcryptjs for securely hashing user passwords.
Integrated JWT tokens in the authentication process for secure access to protected routes.

**3. Chat Room Management**
Implemented the ability to create new chat rooms via a POST request.
Checked for duplicate room names to prevent the creation of existing rooms.
Stored chat room details in the MongoDB database.

**4. Messaging System**
Created the functionality for sending messages in specific chat rooms.
Implemented an API endpoint to retrieve messages for a given chat room.
Each message is associated with a room and user (sender) using the Message model.

**5. Real-Time Communication**
Implemented support for real-time chat by storing messages and retrieving them for specific rooms.

**6. Error Handling**
Added comprehensive error handling for server errors, invalid operations (e.g., duplicate rooms), and token validation failures.
Ensured the API returns clear and meaningful error messages for easier debugging and user experience.

**7. Environment Configuration**
Configured environment variables using dotenv to manage sensitive data like MongoDB URI and JWT secret.
Set up a .env file for easy configuration and portability across environments.

**8. Route Protection**
Protected certain routes (such as creating rooms and sending messages) using JWT authentication to ensure only authorized users can perform these actions.
Developed middleware (authMiddleware) to check the validity of JWT tokens before allowing access to protected routes.

**9. Testing with Postman**
Tested all API endpoints using Postman to ensure proper functionality.
Ensured that the system behaves as expected for all routes (e.g., login, room creation, message sending).
Verified JWT authentication by testing routes with and without the token.

**Summary**
The Real-Time Chat Backend project aims to provide a scalable backend solution for building real-time chat applications. So far, we've implemented essential features such as user authentication (login/register), chat room creation, and message sending/receiving. All actions are secured using JWT authentication, ensuring that only authorized users can access protected endpoints. The chat system supports multiple rooms, each containing messages from users, and messages can be fetched for any specific room.

With MongoDB as the database, we ensure that data such as users, rooms, and messages are stored efficiently. This project sets a strong foundation for building full-fledged real-time chat applications.
