# Beyond Campus

Beyond Campus is a web application that is designed to help online, commuter, and nontraditional college students connect with other students. Many students do not spend a lot of time on campus and it can be difficult for them to meet classmates or find people to study with. Beyond Campus gives students a way to find other students in their area, build study groups, communicate with classmates, and create more of a campus community.

The current version of the project includes a public homepage, a login page, React routing, an Express backend, and communication between the frontend and backend.

## Project Structure

```text
Beyond_Campus
├── frontend
└── backend
```

The `frontend` folder contains the React and Vite application.

The `backend` folder contains the Node.js and Express server.

The frontend and backend must be installed and started separately.

## Required Software

The following software is needed to run this project:

* Node.js
* npm
* A modern web browser
* A terminal application

Node.js 18 or newer is recommended.

There are no paid accounts or outside services needed to run the current version of the application.

## Download the Project

Download the ZIP file and extract it onto the computer.

Open a terminal and move into the main project folder:

```bash
cd Beyond_Campus
```

The frontend and backend will need to be opened in separate terminals because they run at the same time.

## Install and Run the Frontend

From the main project folder, move into the frontend folder:

```bash
cd frontend
```

Install the frontend packages:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The terminal will display the local address for the frontend. It will usually be:

```text
http://localhost:5173
```

Open this address in a browser.

The public homepage can be viewed at:

```text
http://localhost:5173/
```

The login page can be viewed at:

```text
http://localhost:5173/login
```

Keep this terminal open while using the application.

## Install and Run the Backend

Open a second terminal.

Move into the backend folder:

```bash
cd backend
```

Install the backend packages:

```bash
npm install
```

Before starting the backend, an environment file must be created.

## Create the Environment File

Inside the `backend` folder, create a file named:

```text
.env
```

Add the following information to the file:

```text
PORT=3000
FRONTEND_URL=http://localhost:5173
```

A file named `.env.example` is included in the project as a reference.

The `.env` file is not included in the ZIP or public repository because environment files can contain private information.

After creating the environment file, start the backend server:

```bash
npm run dev
```

The backend will usually run at:

```text
http://localhost:3000
```

To make sure the backend is working, open the following address in a browser:

```text
http://localhost:3000/api
```

The browser should display:

```json
{
  "message": "Beyond Campus backend is running."
}
```

Keep this terminal open while testing the application.

## Running the Full Application

The frontend and backend must be running at the same time.

The first terminal should run:

```bash
cd frontend
npm run dev
```

The second terminal should run:

```bash
cd backend
npm run dev
```

After both servers are running, open the following address:

```text
http://localhost:5173
```

The homepage includes links that allow the user to move to the login page. The login page also includes a link that allows the user to return to the homepage.

The login buttons currently send a temporary request to the backend. This is used to show that the frontend and backend are able to communicate with each other. The current login feature does not create real accounts or authenticate users yet.

## Available Commands

Frontend commands:

```bash
npm install
npm run dev
npm run build
npm run lint
```

`npm install` installs the frontend packages.

`npm run dev` starts the React development server.

`npm run build` creates a production build of the frontend.

`npm run lint` checks the frontend code for possible errors.

Backend commands:

```bash
npm install
npm run dev
npm start
```

`npm install` installs the backend packages.

`npm run dev` starts the backend with Nodemon. Nodemon automatically restarts the backend when a backend file is changed.

`npm start` starts the backend with Node without automatically restarting it.

## Security

The backend uses Helmet to add security related HTTP headers.

CORS is configured so that the backend only accepts browser requests from:

```text
http://localhost:5173
```

Express limits incoming JSON requests to 10 kilobytes.

The temporary login route also checks the login method that is sent by the frontend. It currently only accepts phone or Google as supported login methods.

Private environment information is stored inside the `.env` file. The `.env` file and the `node_modules` folders are excluded through `.gitignore`.

## Current Features

The current version of Beyond Campus includes:

* A responsive public homepage
* A login page based on the original Figma design
* Navigation between the homepage and login page
* A copyright footer with the developer's name
* React Router page navigation
* A Node.js and Express backend
* A backend test route
* A temporary login route
* Communication between the frontend and backend
* Helmet security headers
* CORS configuration
* Environment variables
* Basic input checking

## Troubleshooting

If the frontend does not start, make sure the terminal is inside the `frontend` folder before running:

```bash
npm run dev
```

If the backend does not start, make sure the terminal is inside the `backend` folder before running:

```bash
npm run dev
```

If the login page cannot connect to the backend, make sure both servers are running at the same time.

The frontend should run on port `5173`.

The backend should run on port `3000`.

If port `5173` is already being used, Vite may choose a different port. If this happens, update the `FRONTEND_URL` inside the backend `.env` file so it matches the address shown in the frontend terminal.

Restart the backend after changing the `.env` file.

## Developer

Maritza Devicente Hambric