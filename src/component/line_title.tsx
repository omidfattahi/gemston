// Component for rendering a horizontal line with customizable spacing and styling
function Main_line_title(p: {
  top: number; // Top margin for the line, in pixels
  class: string; // CSS class to apply to the line
}) {
  return (
    <>
      {/* Create a div element to represent the line */}
      <div
        // Apply top margin and CSS class from the props
        style={{ marginTop: `${p.top}px` }}
        className={p.class}
      />
    </>
  );
}

// Export the component for use in other parts of the application
export default Main_line_title;
