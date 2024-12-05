This file describes the installation process of URL Shortener test task for Deep Origin.
========================================================================================


## Pre-installation Setup
1. You need to have Node runtime version 16.20 or higher. Please navigate to https://nodejs.org and download an appropriate version.
2. Create a PostgreSQL server instance to serve as the database. In the .env file, assign the variables listed in .env.dist with your credentials.

## Installation
To install the project, follow these steps:
1. Clone the repository:

    ```git clone https://github.com/vagison/url-shortener.git```

2. Navigate to the project directory:

    ```cd url-shortener```

3. Install the dependencies:

    ```npm i```


## Environment Configuration
Create a .env file in the root of the project and configure the environment variables listed in .env.dist:

## Running
To run the project, follow these steps:

1. To start the compiled application located in the dist directory using Node you have to run the following commands:

    ```npm run build``` and ```npm start```

3. Alternatively to run the app in development mode with nodemon you have to run the following command:

    ```npm run dev```
   
5. To clean the dist directory, you can use the following command: 

    ```npm run clean```


## Project Description
To see the requirements on which the project was created, please follow the link: https://projectbook.code.brettchalupa.com/web-apps/url-shortener.html


## Project Structure
The folder structure of the project is self explanatory. Here's a brief introduction to it:
-------------------------------------------------------------------------------------------
* Config: Contains all configurations required for database connection, CORS and other settings.
* Constants: Contains predefined values for error and success messages, as well as other constants.
* Controllers: Houses the actual implementations of server-side functions.
* Middlewares: Includes functions meant to be executed when Routes attempt to access Controllers. This also contains error-handling logic, cookie parser, Express validators and more.
* Models: Defines the schemas for server-side entities.
* Queries: Provides functions to retrieve and manipulate data within the database, utilized by models to perform data operations.
* Routes: Represents server-side endpoints that expect calls from the client-side. Routes redirect these calls to Controllers through Middlewares.
* Utils: Serves as a folder to store helper functions, validator schemas, database initializing logic and more.

There are some files in the root directory apart from the src folder:
---------------------------------------------------------------------
* .babelrc.json - contains configuration settings for Babel, a JavaScript compiler that converts ES6+ code into a backward-compatible version of JavaScript that can run in older environments.
* .env.dist - serves as a template for environment variables, providing a sample configuration for the .env file.
* .gitignore - used to exclude files from being pushed to the repository.
* package-lock.json - records the exact versions of packages and their dependencies that were installed, ensuring consistent installs across different environments.
* package.json - includes a list of the packages and their versions used for this project.

Server-side entities
---------------------
* Slug


## Using API endpoints
To use the endpoints, you can visit the Postman URL below and then either fork or download the collection:

https://www.postman.com/grey-equinox-5383/workspace/deep-origin/collection/37208907-0f13d178-b50f-4038-ad2e-409fe9e8fcb5?action=share&creator=37208907

The request names are self-explanatory, and any additional information can be found within the requests themselves.

Note that the global variable "baseURL" should be manually set in your Postman client according to your usage (default is http://localhost:3000) other variables are set during API calls.


## Using GUI
To access the app through the frontend, simply open the app in the address the server is running in your configuration (default is http://localhost:3000) and enjoy the GUI!


## Warning
If you plan to run the app on a different port or domain, please replace appConfig.appUrl in the /src/configs/index.js file. For the frontend, replace the BASE_URL value with your address in the 404.js and script.js files.