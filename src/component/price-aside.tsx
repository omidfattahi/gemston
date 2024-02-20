// Component for rendering a price filter option
function Main_price_aside(p: {
  text: string; // Text to display for the filter option
  price_filter?: any; // Optional function to call when the option is clicked
  checked: boolean; // Whether the option is checked or not
  handlechange: any; // Function to handle changes to the radio button
}) {
  return (
    <>
      <div className="main-layout-accordion-body-price">
        {/* Container for the price filter option */}
        <div onClick={p.price_filter} className="input-part">
          {/* Label and radio button for the price filter */}
          <label>
            <input
              type="radio"
              name="price" // Group radio buttons together for price filtering
              onChange={p.handlechange} // Handle changes to the radio button
              checked={p.checked} // Set the checked state
            />
            {/* Display the text for the filter option */}
            {p.text}
          </label>
        </div>
      </div>
    </>
  );
}

// Export the component for use in other parts of the application
export default Main_price_aside;
