# Creating a new React Project

- First, install ["Create React app"] (https://github.com/facebook/create-react-app)
- Create React app simplifies development process and display a preview of the output in localhost. It will also help in optimizing our code before we push it to a production server.
- Install Node.js to execute the steps
- Commands to create and run a new react app:
```
npx create-react-app my-app
cd my-app
npm start
```
- It will automatically open localhost:3000

Project Structure
- src will contain your source code files
- package.json will contain all dependencies for this project eg. react.
- npm install will look into package.json file and will download and install all the required packages and dependencies into the project folder. Its by default included in npx create-react-app my-app.
- After you run npm install, you will have a **node_modules** folder which will hold all your dependencies.
- npm start will start the server and look for changes in file and preview it in the browser. It will also convert the code to be compatible with the browser.