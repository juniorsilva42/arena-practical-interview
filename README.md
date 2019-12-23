
## Arena - Frontend Practical Interview  :zap:
> A small interface project to query and get the most popular JS repositories on github.
--------------------

Candidate: Ivanicio Junior   
E-mail: jsiilva@outlook.com.br   
Phone: +55 89 994112266  
[Linkedin](https://www.linkedin.com/in/jsilva49/) - [Github](https://github.com/jsiilva1/)

--------------------
  
## Table of Contents
- [Overview](#overview)
- [Technology](#technology)
- [Quick Start](#quick-start)
- [CLI Brief](#cli-brief)
- [Programming Standards - Airbnb Style Guides](#programming-standards---airbnb-style-guides)
  - [The Rules](#the-rules)
  
## Overview
#### Tech and running app:
- written using ES6;
- uses Yarn for package dependency management;
- uses [Airbnb Standard Style](https://github.com/airbnb/javascript);
- Project with manual compilation with Webpack 4;
- Developed on Linux Ubuntu 19.10 Budgie Distro Platform;
## Main Technologies
Here's a brief overview of technology stack:
-  **[React](https://reactjs.org/)** - as lib to create UI;
-  **[Redux](https://www.npmjs.com/package/redux)** - as a predictable state container;
-  **[Redux-thunk](https://www.npmjs.com/package/redux-thunk)** - as a tool async calls of redux actions;
-  **[Styled-components](https://www.npmjs.com/package/styled-components)** - as a tool to styling screens with pure js;
 - **[Axios](https://www.npmjs.com/package/axios)** - Promise based HTTP client;
 - **[Webpack](https://https://webpack.js.org/)** - To handle with bootstrap app;
 - **[Jest](https://https://webpack.js.org/)** - To handle with app tests;
 
A brief overview of the project file structure
```
├── config
├── public
├── theme
├── src
   ├── __tests__ 
   ├── containers
   ├── store 
	 ├── ducks
	 ├── helpers
   ├── shared 
     ├── components
     ├── utils
```
- config: contains all config of project builds;        
- public: contains all static project files;       
- theme: global css (css-in-js) settings, object and more, of project;            
- src        
-- tests: contain all functional and unit tests;     
-- containers: acts as a page component that connects to the redux global store.         
-- store: contain all action types, action creators and reducers, based on Duck Pattern.        
-- shared: contains all items that are commonly used in the project;       
	---- components
	---- utils

## Quick Start
1. Pull the repo branch
2. Install the dependencies with `yarn or npm install`
3. Run the application in development mode with `yarn dev`
4. Access `http://localhost:3000/`

## CLI Brief
- `yarn dev` - start the app locally/development 
- `yarn test` - run tests
- `yarn lint` - lint codebase using Airbnb Standard Style
- `yarn lint:fix` - fix code according to ESlint Airbnb Style guide

## Programming Standards - Airbnb Style Guides
### The Rules

- **2 spaces** – for indentation
- **Single quotes for strings** – except to avoid escaping
- **No unused variables** – this one catches *tons* of bugs!
- **No semicolons** – [It's][1] [fine.][2] [Really!][3]
- **Never start a line with `(`, `[`, or `` ` ``**
  - This is the **only** gotcha with omitting semicolons – *automatically checked for you!*
  - [More details][4]
- **Space after keywords** `if (condition) { ... }`
- **Space after function name** `function name (arg) { ... }`
- Always use `===` instead of `==` – but `obj == null` is allowed to check `null || undefined`.
- Always handle the node.js `err` function parameter
- Always prefix browser globals with `window` – except `document` and `navigator` are okay
  - Prevents accidental use of poorly-named browser globals like `open`, `length`,
    `event`, and `name`.

---

Made by Ivanicio Jr 
