# React.js Starter Template

This project is React.js + Webpack + Babel include express files server.

For starting new project without setup.

### For Beginner
Clone & Modify package.json for your project name, Then run
```npm install```

### Project hierarchy
```
project root - Here for project setup and configuration
|
|---src
|   |
|   |---app - Put your React.js entry files only (For components/services, create new sub directory.)
|   |   |
|   |   |---yourComponent/service
|   |   |
|   |---public
|   |   |
|   |   |---html - Put new page of html here.
|   |   |
|   |   |---static - Put static files images, js, css etc..
|   |   |
|   |   |---react - React will be compiled to this folder.
```
The **app** directory will be entry files of React

You can put multiple entries here.

For example,

index.js, login.js, payment.js will be complied to

index-bundle.js, login-bundle.js, payment-bundle.js

Also create html of each entry file:
```
// login.html
<!DOCTYPE html>
<html>
  ... css js blah
  <body>
    <div id="app" /> //React injected here.
    <script src="react/login-bundle.js"></script> //Locate to your bundle file
  </body>
</html>
```

### Compile Your React Code
```
// Compile and track for changed inside 'app' directory. (for development version)
npm run dev

// Compile and track for changed inside 'app' directory. (for production version)
// Benefit when use CI or hooks deployment.
npm run build

// Compile at once
npm run dev-once
npm run build-once
```

### Also must run a file server in another process.
```
// Development server
npm run server-dev

// Production server
npm run server
```
