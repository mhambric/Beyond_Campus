import { Link } from "react-router-dom";
import AppToolbar from "../components/AppToolbar";

// Messenger page for future student messages
function MessagesPage() {
  return (
    <div className="dashboard-page">
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

      <main className="dashboard-main">
        <section className="dashboard-welcome">
          <h1>Messenger</h1>
          <p>
            This page will allow students to send messages, start conversations,
            and connect with study partners in a future version.
          </p>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2026 Maritza Devicente Hambric</p>
      </footer>
    </div>
  );
}

export default MessagesPage;