import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light position-fixed vh-100"
      style={{ width: "250px"}} // Push sidebar below header
    >
      {/* Sidebar Navigation */}
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-house-door me-2"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/search" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-person me-2"></i> Search <span className="badge bg-success ms-2">Manage</span>
          </Link>
        </li>
        <li>
          <Link to="/user/contacts/add" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-person-plus me-2"></i> Create Room <span className="badge bg-primary ms-2">3</span>
          </Link>
        </li>
        <li>
          <Link to="/user/contacts" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-book me-2"></i> Notifications
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-chat me-2"></i> privacy
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-box-arrow-right me-2"></i> chat
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-chat-square-text me-2"></i> Feedback
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
