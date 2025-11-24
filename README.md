# Project Management App  
A full-stack Project Management application built using **React (Vite) + Material UI** for the frontend and **ASP.NET Core Web API + Clean Architecture + EF Core InMemory DB** for the backend.

This project demonstrates:
- Clean Architecture implementation  
- React + Material UI UI components  
- Axios-based API integration  
- CRUD operations  
- Redux Toolkit state management  
- InMemory database for quick local development

---
## How to Run the Project Locally

This project is split into two parts:

- Backend – ASP.NET Core Web API

- Frontend – React (Vite)

Follow the steps below to run the application on a local machine.
### Backend Setup (ASP.NET Core)
1. Navigate to the backend project:
    ```
    cd ProjectManagement.Server
    ```
2. Restore dependencies:
   ```
   dotnet restore
   ```
3. Run the API:
   ```
   dotnet run
   ```
4. The API will be available at
   ```
   http://localhost:5047
   ```
5. Swagger UI for Testing the API Endpoints
   ```
   http://localhost:5047/swagger
   ```
### Frontend Setup (React + Vite)
1. Open another terminal and navigate to the frontend:
   ```
   cd ProjectManagement.ClientApp
   ```
2. Install the dependencies
   ```
   npm install
   ```
3. Start the front end:
   ```
   npm run dev
   ```
4. The application will run on:
   ```
   http://localhost:5173
   ```
### Environment Variables
Inside the ProjectManagement.ClientApp folder, create a .env file with:
   ```
   VITE_API_BASE_URL=http://localhost:5047/api
   ```
### Run Both Frontend and Backend Together
Inside ProjectManagement.ClientApp, you can run both the ASP.NET backend and React frontend with a single command:
  ```
  npm run both
  ```
