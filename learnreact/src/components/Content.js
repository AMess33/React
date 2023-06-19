import React, { useState } from "react";

import NavItems from "/NavItems";
import Contact from "/Contact";
import PhotoGallery from "/PhotoGallery";
import About from "/About";
import background from "../images/wood.webp";

export default function Content() {
  const [currentPage, setCurrentPage] = useState("");

  const renderPage = () => {
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "PhotoGallery") {
      return <PhotoGallery />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>
        <NavItems
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
      <div
        className="content"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        {renderPage()}
      </div>
    </div>
  );
}
