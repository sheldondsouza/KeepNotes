# KeepNotes

A MERN stack project which keeps notes of the users up to date.

## Overview

**KeepNotes** is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, manage, and organize their notes securely and efficiently. The app features a user-friendly interface and robust backend to ensure your notes are always available and up-to-date.

## Features

- **User Authentication**: Secure signup and login functionality.
- **Create Notes**: Add new notes quickly and easily.
- **Edit Notes**: Update your existing notes.
- **Delete Notes**: Remove notes you no longer need.
- **View Notes**: See all your notes in a simple dashboard.
- **Responsive Design**: Works on both desktop and mobile devices.

## Tech Stack

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sheldondsouza/KeepNotes.git
   cd KeepNotes
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Configure environment variables**
   - Create a `.env` file in the `server` directory.
   - Add your MongoDB URI and any other required environment variables.

5. **Run the server**
   ```bash
   npm start
   ```

6. **Run the client**
   ```bash
   cd ../client
   npm start
   ```

7. Access the app at `http://localhost:3000`

## Folder Structure

```
KeepNotes/
├── client/   # React frontend
├── server/   # Express backend
├── README.md
└── ...       # Other configuration and setup files
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please contact [sheldondsouza](https://github.com/sheldondsouza).
