// React Router link used to move between pages
import { Link } from "react-router-dom";

// Public homepage for the Student PeerNest application
function HomePage() {
  return (
    <div className="home-page">
      {/* Homepage header with logo and login navigation */}
      <header className="home-header">
        {/* Logo also works as a link back to the homepage */}
        <Link to="/" className="home-logo" aria-label="Student PeerNest homepage">
          <span className="logo-symbol" aria-hidden="true">
            SP
          </span>
          <span>Student PeerNest</span>
        </Link>

        {/* Navigation links */}
        <nav className="home-navigation" aria-label="Main navigation">
          <Link to="/about">About</Link>

          <Link to="/login" className="header-login-button">
            Log In
          </Link>
        </nav>
      </header>

      {/* Main homepage content */}
      <main>
        {/* Main introduction and hero image section */}
        <section className="home-hero">
          {/* Application description and action buttons */}
          <div className="home-hero-content">
            <p className="home-label">Connect Beyond the Classroom</p>

            <h1>Find students who understand your schedule and goals.</h1>

            <p className="home-description">
              Student PeerNest helps online, commuter, and nontraditional students
              connect with classmates in their area. Students can find study
              partners, build study groups, communicate with other students, and
              find campus community.
            </p>

            {/* Buttons for login and additional information */}
            <div className="home-buttons">
              <Link to="/login" className="home-primary-button">
                Get Started
              </Link>

              <a href="#how-it-works" className="home-secondary-button">
                Learn More
              </a>
            </div>
          </div>

          {/* Homepage student illustration */}
          <div className="home-hero-image">
            <img
              src="/home-page.png"
              alt="Students connecting with each other"
              title="Student PeerNest homepage illustration"
            />
          </div>
        </section>

        {/* Explanation of the main application process */}
        <section id="how-it-works" className="how-it-works">
          <h2>How Student PeerNest Works</h2>

          {/* Three main steps for using the application */}
          <div className="home-feature-grid">
            {/* Step one create a student profile */}
            <Link to="/login" className="home-feature-card feature-card-link">
              <p className="feature-number">1</p>
              <h3>Create a Profile</h3>
              <p>
                Add your school, major, courses, location, availability, and study
                preferences.
              </p>
            </Link>

            {/* Step two search for compatible students */}
            <article className="home-feature-card">
              <p className="feature-number">2</p>
              <h3>Find Students</h3>
              <p>
                Search for students with similar courses, majors, schedules, and study
                goals.
              </p>
            </article>

            {/* Step three communicate with other students */}
            <article className="home-feature-card">
              <p className="feature-number">3</p>
              <h3>Start Connecting</h3>
              <p>
                Send a message and decide whether to study online or meet in a
                public location. A great way to connect with your fellow classmates!
              </p>
            </article>
          </div>
        </section>
      </main>

      {/* Copyright footer */}
      <footer className="home-footer">
        <p>&copy; 2026 Maritza Devicente Hambric</p>
      </footer>
    </div>
  );
}

// Makes the homepage available to the application router
export default HomePage;