import React, { useState, useEffect } from "react";
import { ArrowUp } from "react-bootstrap-icons";

// ScrollToTop component for creating a scroll-to-top button
function ScrollToTop({ smooth = true }) {
  // State to control button visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Function to handle scroll events and show/hide the button
  const handleScroll = () => {
    setIsVisible(window.pageYOffset > 300); // Show if scrolled more than 300px
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto", // Smooth or instant scrolling
    });
  };

  useEffect(() => {
    // Add scroll event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="d-flex justify-content-end">
      {/* Button container with visibility based on scroll state */}
      <div
        className="scroll-to-top-btn"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        <div className="scroll-top-btn" onClick={scrollToTop}>
          {/* Scroll to top icon using ArrowUp from react-bootstrap-icons */}
          <ArrowUp className="icon" size={35} />
        </div>
      </div>
    </div>
  );
}

// Export the component for use in other parts of the application
export default ScrollToTop;
