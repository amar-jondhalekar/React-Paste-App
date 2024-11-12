# Paste Manager Application

## Overview

The Paste Manager application is a web-based platform where users can create, view, update, and delete text-based pastes. These pastes are stored locally and can be easily shared with others. The application is built with React, Redux, and React Router. It supports CRUD operations, user authentication, and a responsive UI.

---

## Features

- **Create a Paste**: Add new pastes with titles and content.
- **Update a Paste**: Edit previously created pastes.
- **Delete a Paste**: Remove unwanted pastes.
- **Search for Pastes**: Filter pastes by title.
- **View a Paste**: View the details of any paste by ID.
- **Local Storage**: All data is persisted in the browser's local storage for easy access.
- **Toast Notifications**: Feedback on actions such as success or error (using `react-hot-toast`).

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: State management library for handling the global state of the app.
- **React Router**: For navigation between different components and pages.
- **LocalStorage**: For persisting paste data.
- **Toast Notifications**: Feedback mechanism for various actions in the app (`react-hot-toast`).

---

## Project Structure

├── public/
│ └── index.html
├── src/
│ ├── assets/ # Images, Icons, and other static assets
│ ├── components/ # React components for the app
│ │ ├── Navbar.js # Navigation bar component
│ │ ├── Home.js # Home page component
│ │ ├── Paste.js # Paste listing page
│ │ ├── ViewPaste.js # Single paste view page
│ ├── redux/ # Redux related files
│ │ └── pasteSlice.js # Redux slice for pastes
│ ├── App.css # Main app styling
│ ├── App.js # Root component for routing
│ ├── index.css # Global styles
│ ├── index.js # App entry point
└── package.json # Project dependencies and scripts

## Installation

1. **Clone the repository:**

```bash
   git clone https://github.com/amar-jondhalekar/React-Paste-App.git
   cd paste-manager
```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   This will open the application in your default browser at `http://localhost:5173/`.

---

## Usage

Once the application is running, you will be able to:

- **Home Page**: Create a new paste, navigate to pastes, or search for pastes.
- **Pastes Page**: View a list of created pastes. You can edit, delete, or copy them to the clipboard.
- **View Paste**: View the content of a paste with options to edit or copy.

---

## Tables

### Available Paste Data Structure

| Field       | Type   | Description                               |
| ----------- | ------ | ----------------------------------------- |
| `_id`       | string | Unique identifier for each paste.         |
| `title`     | string | Title of the paste.                       |
| `content`   | string | Content of the paste.                     |
| `createdAt` | string | Date and time when the paste was created. |

---

## Contributing

We welcome contributions to the project. Here's how you can get started:

1. Fork the repository.
2. Clone your fork to your local machine.
3. Create a new branch (`git checkout -b feature-branch`).
4. Make your changes and commit them (`git commit -m 'Add new feature'`).
5. Push your changes (`git push origin feature-branch`).
6. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Author

- **Author**: [Amar Jondhalekar](https://github.com/amar-jondhalekar)
