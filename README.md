
# API Chaining Dashboard

This project is a responsive web application designed to showcase the ability to handle API interactions effectively. It demonstrates both GET and POST requests, implementing a series of API calls that chain together to create a seamless user experience. As shown in the demo video, the application fetches data from an API, uses the response data to create a new resource, and subsequently retrieves related information based on that resource.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   https://github.com/Sk-Siva/api-chaining-app.git
   cd your-repo
2. **Install the dependencies**
    npm install
3. **Start your Appplication**
    npm start

# Technologies Used

**React:** Core library for building the user interface.
**Axios :** A promise-based HTTP client used for making asynchronous API requests (GET and POST) and handling responses, including error handling.
**Tailwind CSS:** A utility-first CSS framework used for rapid UI development, making it easy to create custom and responsive designs without writing custom CSS.

# Approach

**API Chaining:** The application makes a series of asynchronous API calls. Initially, it fetches all users, extracts necessary data from the response, and uses that data to create a post.
**State Management:** React's state management system is utilized to handle the state of the application effectively, ensuring that data is consistent and reflects user interactions.
**Data Transformation:** The response data from API calls is transformed as needed to fit the requirements of subsequent API requests. This includes mapping fields and managing asynchronous updates using Promises and async/await syntax.

# Assumptions and Decisions

**User Familiarity:** Assumed that users have a basic understanding of web applications and can navigate them easily.
**Choice of Libraries:** Selected Axios for making API requests due to its robust features and ease of handling JSON responses.
**Error Handling:** Implemented error handling using try-catch blocks to manage API errors gracefully and provide feedback to users.

# Features

**Fetch Users:** Retrieve a list of users from the API and display them in a responsive format.
**Create Post:** Allow users to create a post using the data fetched from the API. The creation process utilizes fields from the initial user fetch.
**Retrieve Comments:** After creating a post, fetch comments based on the post ID, showcasing the chaining of API requests.
**Responsive Design:** The application is fully responsive, ensuring a good user experience across devices and screen sizes.

# Known Issues

**Network Dependency:** The application relies on network availability for API calls; errors may occur if the network is down.
**UI Responsiveness:** While the application is responsive, certain elements may require additional tweaks for optimal performance on very small screens.

# Deployment

 - You Can visit the application  by clicking this link https://sk-siva.github.io/event-management-app
