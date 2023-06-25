import React from "react";

function NavItems({ currentPage, handlePageChange }) {
  return (
    <div className="navBar">
      <ul className="">
        <li className="">
          <a
            href="#About"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            Our Story
          </a>
        </li>
        <li className="">
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
        <li className="">
          <a
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavItems;
