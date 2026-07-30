// React Router navigation link used for toolbar links
import { NavLink } from "react-router-dom";

// Icons used for the logged in student toolbar
import { FaCompass, FaNewspaper, FaComments, FaUser } from "react-icons/fa";

// Toolbar for logged in student pages
function AppToolbar() {
  return (
    <nav className="app-toolbar" aria-label="Student app navigation">
      <NavLink to="/dashboard" className="toolbar-link">
        <FaCompass className="toolbar-icon" aria-hidden="true" />
        <span>Discover</span>
      </NavLink>

      <NavLink to="/feed" className="toolbar-link">
        <FaNewspaper className="toolbar-icon" aria-hidden="true" />
        <span>Feed</span>
      </NavLink>

      <NavLink to="/messages" className="toolbar-link">
        <FaComments className="toolbar-icon" aria-hidden="true" />
        <span>Messenger</span>
      </NavLink>

      <NavLink to="/profile" className="toolbar-link">
        <FaUser className="toolbar-icon" aria-hidden="true" />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}

// Makes the toolbar available to logged in pages
export default AppToolbar;