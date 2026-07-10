import { Link } from "react-router-dom";

// About page with project information, technology credits, and image citation
function AboutPage() {
  return (
    <div className="about-page">
      {/* Header navigation */}
      <header className="home-header">
        <Link to="/" className="home-logo">
          Beyond Campus
        </Link>

        <nav className="home-navigation">
          <Link to="/">Home</Link>

          <Link to="/login" className="header-login-button">
            Log In
          </Link>
        </nav>
      </header>

      {/* Main about page content */}
      <main className="about-main">
        {/* Introduction section */}
        <section className="about-hero">
          <h1>About Beyond Campus</h1>

          <p>
            Beyond Campus is a web application I created to help online,
            commuter, and nontraditional college students connect with other
            students. Many students do not spend a lot of time on campus, so it
            can be harder to meet classmates, find study partners, or feel part
            of a campus community.
          </p>

          <p>
            The goal of Beyond Campus is to make it easier for students to find
            people with similar classes, schedules, study goals, and locations.
          </p>
        </section>

        {/* About the developer section */}
        <section className="about-section">
          <h2>About the Developer</h2>

          <p>
            My name is Maritza Devicente Hambric. I am a Computer Science
            student at Oregon State University. I also have a background in
            Anthropology, which has helped me think about technology from a
            user centered and community focused perspective.
          </p>

          <p>
            I created this project because I understand how isolating online
            school can feel. Beyond Campus is meant to support students who may
            be balancing school, work, family, health, commuting, or other life
            responsibilities while still trying to build academic connections.
          </p>
        </section>

        {/* Project status section */}
        <section className="about-section">
          <h2>Current Project Status</h2>

          <p>
            The current version of Beyond Campus includes a public homepage, a
            login page, a backend server, and communication between the frontend and backend.
          </p>

          <p>
            The login buttons are currently demo features. They send a request
            to the backend to show that the frontend and backend can communicate.
            The app does not create real accounts, store passwords, or
            authenticate real users yet.
          </p>
        </section>

        {/* Technologies section */}
        <section className="about-section">
          <h2>Technologies and Libraries Used</h2>

          <p>
            This project uses frontend and backend technologies to create a
            full stack web application.
          </p>

          <ul>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                React
              </a>{" "}
              is used to build the frontend user interface.
            </li>

            <li>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                Vite
              </a>{" "}
              is used to run and build the frontend React application.
            </li>

            <li>
              <a
                href="https://reactrouter.com/"
                target="_blank"
                rel="noreferrer"
              >
                React Router
              </a>{" "}
              is used to move between the homepage, login page, and about page.
            </li>

            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                JavaScript
              </a>{" "}
              is used for the application logic.
            </li>

            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noreferrer"
              >
                HTML
              </a>{" "}
              is used for page structure and semantic elements.
            </li>

            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noreferrer"
              >
                CSS
              </a>{" "}
              is used for layout, colors, spacing, and responsive design.
            </li>

            <li>
              <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
                Node.js
              </a>{" "}
              is used to run the backend JavaScript server.
            </li>

            <li>
              <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
                Express
              </a>{" "}
              is used to create backend routes and responses.
            </li>

            <li>
              <a
                href="https://www.npmjs.com/package/cors"
                target="_blank"
                rel="noreferrer"
              >
                CORS
              </a>{" "}
              is used so the frontend can send requests to the backend.
            </li>

            <li>
              <a
                href="https://helmetjs.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Helmet
              </a>{" "}
              is used to add security related HTTP headers to the backend.
            </li>

            <li>
              <a
                href="https://www.npmjs.com/package/dotenv"
                target="_blank"
                rel="noreferrer"
              >
                dotenv
              </a>{" "}
              is used to load environment variables from the backend .env file.
            </li>
          </ul>
        </section>

        {/* Design credit section */}
        <section className="about-section">
          <h2>Design Credit</h2>

          <p>
            The layout and visual design for Beyond Campus were based on my own
            original Figma prototype. I used the prototype as a guide when
            creating the homepage and login page in React.
          </p>

          <p>
          I created the page layouts with CSS and organized the app with clear page
          sections.
          </p>

        </section>

                {/* Image citation section */}
                    <section className="about-section">
        <h2>Image Credits</h2>

        <p>
            The education illustration used on the homepage is from{" "}
            <a
            href="https://storyset.com/education"
            target="_blank"
            rel="noreferrer"
            >
            Education illustrations by Storyset
            </a>
            .
        </p>

        <p>
            The people illustration used on the login page is from{" "}
            <a href="https://storyset.com/people" target="_blank" rel="noreferrer">
            People illustrations by Storyset
            </a>
            .
        </p>
        </section>

        {/* Future features section */}
        <section className="about-section">
          <h2>Future Features</h2>

          <p>
            Future versions of Beyond Campus may include real authentication,
            student profiles, study partner search, location based matching,
            course filters, study group creation, messaging, and online hosting.
          </p>
        </section>
      </main>

      {/* Copyright footer */}
      <footer className="home-footer">
        <p>&copy; 2026 Maritza Devicente Hambric</p>
      </footer>
    </div>
  );
}

// Makes the about page available to the application router
export default AboutPage;