# Student PeerNest

Student PeerNest is a web application that is designed to help online, commuter, and nontraditional college students connect with other students. Many students do not spend a lot of time on campus, and it can be difficult for them to meet classmates or find people to study with. Student PeerNest gives students a way to find other students in their area, build study groups, communicate with classmates, and create more of a campus community.

The current version of the project includes a public homepage, an About page, a login page, a logged in Discovery dashboard, placeholder pages for Feed, Messenger, and Profile, React routing, an Express backend, and communication between the frontend and backend.

## Hosted Version

The app is hosted on Vercel.

```text
https://student-peernest-rho.vercel.app
```

The deployed backend test route can be viewed at:

```text
https://student-peernest-rho.vercel.app/api
```

The login feature is still a demo feature. It only confirms that the frontend and backend can communicate. It does not create real accounts, store passwords, or authenticate users yet.

## Project Structure

```text
Student-PeerNest
├── api
│   └── index.js
├── backend
├── frontend
├── README.md
├── package.json
├── package-lock.json
└── vercel.json
```

The `frontend` folder contains the React and Vite application.

The `backend` folder contains the local Node.js and Express server.

The `api` folder contains the Vercel backend API route that is used when the app is deployed online.

The `vercel.json` file contains deployment settings for the Vercel version of the project.

The frontend and backend must be installed and started separately for local development.

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
cd Student-PeerNest
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

The About page can be viewed at:

```text
http://localhost:5173/about
```

The login page can be viewed at:

```text
http://localhost:5173/login
```

The Discovery dashboard can be viewed at:

```text
http://localhost:5173/dashboard
```

The Feed page can be viewed at:

```text
http://localhost:5173/feed
```

The Messenger page can be viewed at:

```text
http://localhost:5173/messages
```

The Profile page can be viewed at:

```text
http://localhost:5173/profile
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
  "message": "Student PeerNest backend is running."
}
```

Keep this terminal open while testing the application.

## Running the Full Application Locally

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

The homepage includes links that allow the user to move to the About page and login page. The login page includes consistent navigation, so users can return to Home or About without using the browser back button.

The login buttons currently send a temporary request to the backend. This is used to show that the frontend and backend are able to communicate with each other. After a successful demo login, the user is moved to the Discovery dashboard. The current login feature does not create real accounts or authenticate users yet.

## Vercel Deployment

The deployed version uses Vercel to host the frontend and the backend API route.

For the Vercel version, the backend route is located in:

```text
api/index.js
```

The Vercel backend test route is:

```text
https://student-peernest-rho.vercel.app/api
```

The login demo route is:

```text
https://student-peernest-rho.vercel.app/api/login
```

The login route is used by the login page to test that the React frontend can send information to the Express backend and receive a response.

This is not real authentication yet. It does not create accounts, store passwords, or sign users in.

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

## Technologies and Libraries

This project uses:

* HTML
* CSS
* JavaScript
* React
* Vite
* React Router
* React Icons
* Google Fonts
* Node.js
* Express
* CORS
* Helmet
* dotenv
* Nodemon
* Vercel

The About page in the app includes more information about the project technologies, libraries, design credit, and image credits.

## Week 6 and 7 Frontend Design Updates

For the Week 6 and 7 frontend design deliverable, I continued improving the frontend design and user experience for Student PeerNest.

The updates include:

* Updated Student PeerNest branding
* A simple SP logo symbol in the header
* Updated favicon
* Improved color scheme and styling
* Google Font styling using the CSS import method
* React Icons for logged in toolbar navigation
* A logged in Discovery dashboard
* Toolbar navigation for Discovery, Feed, Messenger, and Profile
* Placeholder pages for Feed, Messenger, and Profile
* Sample student profile images on the Discovery dashboard
* Image credits added to the About page
* More noticeable login demo message
* Fixed Google capitalization in the backend login response
* Consistent navigation on the Login page
* A clickable Create a Profile card on the homepage
* Accessibility updates such as alt text, aria labels, focus states, and semantic page sections
* Mobile responsive layout updates

## Security

The backend uses Helmet to add security related HTTP headers.

CORS is configured so that the backend only accepts browser requests from the frontend.

For local development, the frontend usually runs at:

```text
http://localhost:5173
```

Express limits incoming JSON requests to 10 kilobytes.

The temporary login route also checks the login method that is sent by the frontend. It currently only accepts phone or Google as supported login methods.

Private environment information is stored inside the `.env` file. The `.env` file, `.env.local` file, `node_modules` folders, and `dist` folders are excluded through `.gitignore`.

The current login feature is a demo only. The app does not store passwords or authenticate real users yet.

## Current Features

The current version of Student PeerNest includes:

* A responsive public homepage
* An About page with project information, technologies, libraries, and image credits
* A login page based on the original Figma design
* A Discovery dashboard after demo login
* Toolbar navigation for logged in pages
* Placeholder Feed, Messenger, and Profile pages
* Navigation between the homepage, About page, login page, dashboard, feed, messenger, and profile pages
* A copyright footer with the developer's name
* React Router page navigation
* React Icons in the logged in toolbar
* Google Font styling
* A Node.js and Express backend
* A backend test route
* A temporary login route
* Communication between the frontend and backend
* Helmet security headers
* CORS configuration
* Environment variables
* Basic input checking
* SEO meta tags in the HTML file
* Semantic page structure
* Vercel deployment
* A Vercel API route for the deployed backend demo

## Image Credits

The profile images are sample images used for the Student PeerNest prototype. They do not represent real Student PeerNest users.

The About page includes citations for:

* Jason sample profile image from Pixabay
* Sara sample profile image from Pixabay
* Hanna sample profile image from Pixabay
* Kyle sample profile image from Pixabay
* Homepage education illustration from Storyset
* Login page people illustration from Storyset

## Future Features

Future versions of Student PeerNest may include:

* Real user authentication
* Student profiles
* Study group creation
* Messaging between students
* Location based student matching
* Course filters
* Search and discovery features
* A working sign up feature

The current login and sign up features are demo or future features only.

## Troubleshooting

If the frontend does not start, make sure the terminal is inside the `frontend` folder before running:

```bash
npm run dev
```

If the backend does not start, make sure the terminal is inside the `backend` folder before running:

```bash
npm run dev
```

If the login page cannot connect to the backend locally, make sure both servers are running at the same time.

The frontend should run on port `5173`.

The backend should run on port `3000`.

If port `5173` is already being used, Vite may choose a different port. If this happens, update the `FRONTEND_URL` inside the backend `.env` file so it matches the address shown in the frontend terminal.

Restart the backend after changing the `.env` file.

If the deployed Vercel version does not update right away, check that the latest changes were pushed to GitHub and then check the Vercel Deployments tab.

## Developer

Maritza Devicente Hambric