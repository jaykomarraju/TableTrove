TableTrove
==========

TableTrove is a web application that allows users to upload CSV files, view them as tables, and save these datasets with titles and descriptions. This application makes it easy to import, visualize, and share data from CSV documents.

Features
--------

*   **CSV File Upload**: Users can upload CSV files and view their contents.
*   **Data Visualization**: Display the CSV data in a structured, web-based table format.
*   **Save and Publish Datasets**: Users can save datasets with a title and description, making it easy to organize and share data.
*   **Responsive Design**: Ensures a seamless experience across different devices.

Technology Stack
----------------

### Frontend

*   **React**: For building the user interface.
*   **React Router**: For handling routing.
*   **Styled Components**: For component styling.

### Backend

*   **Java with Spring Boot**: For creating RESTful APIs.
*   **Maven**: For managing dependencies.

### Database

*   **MongoDB**: For storing user-uploaded datasets, titles, and descriptions.

### Additional Tools

*   **Papaparse**: A powerful, in-browser CSV parser for React to handle CSV files.
*   **Mongoose**: MongoDB object modeling for Node.js.

Installation

*   Clone the repository.
*   Install the dependencies using `npm install`.
*   Run the application using `npm start`.
*   The application will be available at `localhost:3000`.
*   Backend should be started by run `./mvnw spring-boot:run` in the backend folder.
*   The backend server will be available at `localhost:8080`.