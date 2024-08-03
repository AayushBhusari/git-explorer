# GitHub Users Explorer

## Project Overview

GitHub Users Explorer is a React application that allows users to explore GitHub profiles based on their popularity. Users can view a list of popular GitHub profiles and click on individual profiles to see more detailed information. This project was inspired by FreeCodeCamp's video on React Router, and it aims to demonstrate proficiency in modern web development practices and technologies.

## Features

- **Fetch and Display GitHub Users**: Fetch data from the GitHub API and display a list of users with more than 1000 followers.
- **Responsive Design**: The application is designed to be responsive and works well on different screen sizes.
- **User Details Page**: Users can click on a profile to see detailed information, including the avatar, bio, and public repository count.
- **Loading Spinner**: While fetching data, a loading spinner is displayed to enhance user experience.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **React Router**: For handling routing within the application.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Spinners**: For loading animations.
- **GitHub API**: To fetch user data from GitHub.

## Skills Learned

- **React and TypeScript Integration**: Enhanced understanding of how to use TypeScript with React for type safety.
- **API Integration**: Learned how to fetch data from an external API and handle asynchronous operations.
- **Responsive Design**: Improved skills in creating responsive and adaptive user interfaces with Tailwind CSS.
- **Routing in React**: Developed a deeper understanding of client-side routing using React Router.
- **Error Handling**: Implemented basic error handling mechanisms for network requests.

## How to Run the Project

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/github-users-explorer.git
   cd github-users-explorer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:5173` to see the application in action.

## Project Structure

```plaintext
github-users-explorer/
├── public/
├── src/
│   ├── components/
│   │   ├── User.tsx
│   │   ├── Users.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── styles/
│   ├── utils/
│   ├── api/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Future Enhancements

- **Pagination**: Implement pagination for the user list to handle large sets of data.
- **Improved Error Handling**: Provide more detailed error messages and fallback UI components.

## Credits

This project was inspired by FreeCodeCamp's video on React Router. Special thanks to the FreeCodeCamp community for providing valuable resources and tutorials.

---

Thank you for checking out this project! If you have any questions or suggestions, feel free to open an issue or contribute to the repository.
