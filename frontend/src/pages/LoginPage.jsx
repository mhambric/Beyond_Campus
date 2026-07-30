// React state used for login messages and loading status
import { useState } from "react";

// React Router link used to move between pages
import { Link, useNavigate } from "react-router-dom";

// Backend URL used for local development or online deployment
const API_URL =
  import.meta.env.VITE_API_URL ||
  (window.location.hostname === "localhost" ? "http://localhost:3000" : "");

// Login page for the Student PeerNest application
function LoginPage() {
  // Message returned from the backend
  const [message, setMessage] = useState("");

  // Tracks whether a login request is being processed
  const [isLoading, setIsLoading] = useState(false);

  // Moves the user to another page after a successful demo login
  const navigate = useNavigate();

  // Sends the selected login method to the backend
  async function sendLoginRequest(loginMethod) {
    setIsLoading(true);
    setMessage("");

    try {
      // Sends the login method to the Express backend
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loginMethod: loginMethod,
        }),
      });

      // Converts the backend response into JSON
      const data = await response.json();

      // Displays an error message if the request was not successful
      if (!response.ok) {
        setMessage(data.message || "Login request failed.");
        return;
      }

      // Displays the successful response from the backend
      setMessage(data.message);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);

    } catch (error) {
      // Logs connection errors for testing
      console.error("Login request error:", error);

      setMessage(
        "The frontend could not connect to the backend. Make sure both servers are running."
      );
    } finally {
      // Stops the loading message after the request finishes
      setIsLoading(false);
    }
  }

  // Sends a phone login request
  function handlePhoneLogin() {
    sendLoginRequest("phone");
  }

  // Sends a Google login request
  function handleGoogleLogin() {
    sendLoginRequest("google");
  }

  return (
    // Full login page wrapper with header and login content
    <div className="login-wrapper">
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
            Log In
          </Link>
        </nav>
      </header>

      {/* Main login page layout */}
      <main className="login-page">
        <section className="login-container">
          {/* Login page illustration */}
          <div className="login-image">
            <img
              src="/login-students.png"
              alt="Students connecting and studying together"
              title="Student PeerNest student illustration"
            />
          </div>

          {/* Login content and buttons */}
          <div className="login-content">
            {/* Main login page heading */}
            <h1>
              Connect With Other
              <br />
              Students In Your Area
            </h1>

            {/* Login method buttons */}
            <div className="login-options">
              {/* Phone login button */}
              <button
                type="button"
                className="phone-login-button"
                onClick={handlePhoneLogin}
                disabled={isLoading}
              >
                <span className="button-icon" aria-hidden="true">
                  ☎
                </span>

                {isLoading ? "Connecting..." : "Log in with Phone"}
              </button>

              {/* Google login button */}
              <button
                type="button"
                className="google-login-button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
              >
                <span className="google-icon" aria-hidden="true">
                  G
                </span>

                {isLoading ? "Connecting..." : "Log in with Google"}
              </button>
            </div>

            {/* Link for future account registration */}
            <p className="signup-text">
              Do not have an account? <a href="#">Sign Up</a>
            </p>

            {/* Displays the backend response message */}
            {message && (
              <p className="form-message" role="status">
                {message}
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

// Makes the login page available to the application router
export default LoginPage;