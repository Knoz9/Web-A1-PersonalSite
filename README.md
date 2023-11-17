# Website Project Documentation

Welcome to my website project. This documentation provides instructions on how to set up and run the project.

[Here](https://coursepress.lnu.se/courses/web-programming/html-css/assignment) are the assignment instructions.

## Preview of one of the pages:
![image](/Screenshot.png)

## Cloning the Repository

To clone the repository to your local machine, follow these steps:

1. Open a terminal.
2. Run the following command:

   ```
   git clone (Url to clone)
   ```

## Installing Dependencies

Before running the project, you need to install the necessary dependencies. Navigate to the project directory and run:

```
npm install
```

## Running Linters

To ensure code quality, linters are used. Run the following command to check the code:

- For HTML:

  ```
  npx htmlhint ./public
  ```

- For CSS:

  ```
  npx stylelint "**/*.css"
  ```

Replace the paths and commands according to your linter setup.

## Starting the Webserver

To view the website, start the webserver using the following command:

```
npm run http-server
```

If that does not work, try this command:

```
npm run dev
```

To verify linting, run this command:

```
npm run lint
```

This will start a local server. You might need to adjust the command based on how you've set up your server script in `package.json`.

## Accessing the Website

Once the server is running, you can access the website by going to:

```
http://localhost:8080
```

Replace `8080` with the port number your server is running on, if different.
