import React from "react";

function NavItems({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#About"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          Our Story
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#PhotoGallery"
          onClick={() => handlePageChange("PhotoGallery")}
          className={
            currentPage === "PhotoGallery" ? "nav-link active" : "nav-link"
          }
        >
          Photo Gallery
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavItems;
