# Notes API

Welcome to the Notes API! This project is a RESTful API built using Node.js, Express.js, and MongoDB, designed to allow users to create, read, update, and delete notes. The API uses JSON Web Tokens (JWT) for user authentication and secure access to notes.

## Features

- **User Authentication**: Secure user registration and login using JWT tokens.
- **CRUD Operations**: Create, Read, Update, and Delete notes.
- **Token-Based Access**: Only authenticated users can access and manipulate their notes.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user data and notes.
- **JWT (JSON Web Tokens)**: For secure user authentication.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Shashank9759/Notes-Api.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd Notes-Api
    ```

3. **Install the dependencies**:

    ```bash
    npm install
    ```

4. **Set up environment variables**:

    Create a `.env` file in the root directory and add the following:

    ```env
    PORT=3000
    MONGODB_URI=mongodb+srv://shashank9759:shashank@cluster0.yz4pbq0.mongodb.net/notes_db?retryWrites=true&w=majority&appName=AtlasApp
    JWT_SECRET=abc123
    ```

5. **Run the server**:

    ```bash
    npm start
    ```

    The server should now be running on `http://localhost:3000`.

## API Endpoints

### Authentication

- **Register**: `POST /user/signup`
- **Login**: `POST /user/signin`

### Notes

- **Get All Notes**: `GET /notes`
- **Create Note**: `POST /notes`
- **Get Note by ID**: `GET /notes/:id`
- **Update Note**: `PUT /notes/:id`
- **Delete Note**: `DELETE /notes/:id`

## Contributing

Feel free to fork this repository and make changes. Pull requests are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact me at [shashankranjantech@gmail.com].

---

Happy coding!
