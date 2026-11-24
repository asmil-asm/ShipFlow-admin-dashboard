"use client";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import "./Header.css";
interface HeaderProps {
  onOpenSidebar?: () => void;
}

export default function Header({ onOpenSidebar }: HeaderProps) {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="header-left">
          <button
            onClick={onOpenSidebar}
            className="mobile-menu-btn"
            aria-label="Open Menu"
          >
            <HiOutlineBars3 className="text-2xl" />
          </button>

          <div className="search-box">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by tracking number, customer..."
              className="search-input"
            />
          </div>
        </div>

        <div className="header-actions">
          <button
            className="notification-btn"
            aria-label="Notifications"
          >
            <IoMdNotificationsOutline className="text-2xl" />
            <span className="notification-dot" />
          </button>

          <div className="header-divider" />

          <div className="profile-box">
            <div className="profile-avatar">AF</div>
            <div className="profile-info">
              <p className="profile-name">Ahmed Farsi</p>
              <span className="profile-role">Super Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}