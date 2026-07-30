// React state used for dashboard messages
import { useState } from "react";

// React Router link used to move between pages
import { Link } from "react-router-dom";

import AppToolbar from "../components/AppToolbar";

// Dashboard page shown after a demo login
function DashboardPage() {
  // Message shown when a user clicks a future feature
  const [message, setMessage] = useState("");

  // Sample student matches shown on the dashboard
const studentMatches = [
  {
    name: "Hanna",
    school: "UCLA",
    distance: "16 miles away",
    course: "Anthropology",
    image: "/student-hanna.jpg",
    imageTitle:
      "Sample profile image by Pedro ml from Pixabay. Used for Student PeerNest prototype.",
  },
  {
    name: "Sara",
    school: "LMU",
    distance: "11 miles away",
    course: "Science",
    image: "/student-sara.jpg",
    imageTitle:
      "Sample profile image by EJBS1991 from Pixabay. Used for Student PeerNest prototype.",
  },
  {
    name: "Jason",
    school: "USC",
    distance: "10 miles away",
    course: "Math",
    image: "/student-jason.jpg",
    imageTitle:
      "Sample profile image by Pexels from Pixabay. Used for Student PeerNest prototype.",
  },
  {
    name: "Kyle",
    school: "CSUN",
    distance: "0.5 miles away",
    course: "English",
    image: "/student-kyle.jpg",
    imageTitle:
      "Sample profile image by GlassesShop from Pixabay. Used for Student PeerNest prototype.",
  },
];

  // Major categories shown as discovery buttons
  const majors = [
    "Art",
    "Science",
    "Linguistics",
    "Fashion",
    "Anthropology",
    "Music",
    "English",
  ];

  // Nearby schools shown as discovery buttons
  const schools = ["USC", "UCLA", "CSUN", "LMU", "UCI", "CSULB", "CSUDH"];

  // Shows a temporary message for features that will be built later
  function handleComingSoon(featureName) {
    setMessage(`${featureName} will be added in a future version.`);
  }

  return (
    <div className="dashboard-page">
      {/* Page header with logo and navigation */}
      <header className="home-header">
        <Link to="/" className="home-logo" aria-label="Student PeerNest homepage">
          <span className="logo-symbol" aria-hidden="true">
            SP
          </span>
          <span>Student PeerNest</span>
        </Link>

        <nav className="home-navigation" aria-label="Main navigation">
          <Link to="/about">About</Link>
          <Link to="/login" className="header-login-button">
            Log Out
          </Link>
        </nav>
      </header>

      <AppToolbar />

      {/* Main dashboard content */}
      <main className="dashboard-main">
        {/* Dashboard welcome section */}
        <section className="dashboard-welcome">
          <p className="dashboard-location">Los Angeles</p>

          <h1>Discover</h1>

          <p>
            Find classmates, study partners, and nearby students who understand
            your schedule and goals.
          </p>
        </section>

        {/* Dashboard search section */}
        <section className="dashboard-search-section" aria-label="Search students">
          <label className="dashboard-search-label" htmlFor="student-search">
            Search Friends
          </label>

          <div className="dashboard-search-row">
            <input
              id="student-search"
              type="text"
              placeholder="Search friends"
              aria-label="Search friends"
            />

            <button
              type="button"
              onClick={() => handleComingSoon("Student search")}
              aria-label="Search for students"
            >
              Search
            </button>
          </div>
        </section>

        {/* Student match cards */}
        <section className="dashboard-section" aria-labelledby="match-heading">
          <div className="dashboard-section-header">
            <h2 id="match-heading">Student Matches</h2>
            <button
              type="button"
              onClick={() => handleComingSoon("View all student matches")}
            >
              View all
            </button>
          </div>

          <div className="student-card-row">
            {studentMatches.map((student) => (
              <article className="student-match-card" key={student.name}>
                <span className="student-new-label">New</span>

                <img
                  className="student-avatar"
                  src={student.image}
                  alt={`Sample profile image for ${student.name}`}
                  title={student.imageTitle}
                />

                <p className="student-distance">{student.distance}</p>

                <h3>{student.name}</h3>

                <p>{student.school}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Major discovery section */}
        <section className="dashboard-section" aria-labelledby="major-heading">
          <div className="dashboard-section-header">
            <h2 id="major-heading">Majors</h2>
            <button
              type="button"
              onClick={() => handleComingSoon("Major discovery")}
            >
              View all
            </button>
          </div>

          <div className="dashboard-chip-row">
            {majors.map((major) => (
              <button
                type="button"
                className="dashboard-chip"
                key={major}
                onClick={() => handleComingSoon(`${major} student discovery`)}
              >
                {major}
              </button>
            ))}
          </div>
        </section>

        {/* Nearby school section */}
        <section className="dashboard-section" aria-labelledby="school-heading">
          <div className="dashboard-section-header">
            <h2 id="school-heading">Schools Near You</h2>
            <button
              type="button"
              onClick={() => handleComingSoon("Nearby school discovery")}
            >
              View all
            </button>
          </div>

          <div className="dashboard-chip-row">
            {schools.map((school) => (
              <button
                type="button"
                className="dashboard-chip"
                key={school}
                onClick={() => handleComingSoon(`${school} student discovery`)}
              >
                {school}
              </button>
            ))}
          </div>
        </section>

        {/* Around me section with fake map graphic */}
        <section className="dashboard-section" aria-labelledby="around-me-heading">
          <h2 id="around-me-heading">Around Me</h2>

          <p className="dashboard-small-text">
            People with Music as a major near CSULB.
          </p>

          <div className="dashboard-map" aria-label="Sample map of nearby students">
            <div className="map-road map-road-one"></div>
            <div className="map-road map-road-two"></div>
            <div className="map-road map-road-three"></div>

            <button
              type="button"
              className="map-connect-button"
              onClick={() => handleComingSoon("Connect with Kyle")}
            >
              Peter is Nearby, Connect Now!
            </button>

            <div className="map-pin map-pin-main">You</div>
            <div className="map-student map-student-one">Leslie</div>
            <div className="map-student map-student-two">Ben</div>
            <div className="map-student map-student-three">Layla</div>
            <div className="map-student map-student-four">Peter</div>
          </div>
        </section>

        {/* Dashboard status message */}
        {message && (
          <p className="dashboard-message" role="status">
            {message}
          </p>
        )}
      </main>

      {/* Copyright footer */}
      <footer className="home-footer">
        <p>&copy; 2026 Maritza Devicente Hambric</p>
      </footer>
    </div>
  );
}

// Makes the dashboard page available to the application router
export default DashboardPage;