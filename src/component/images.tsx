import Image from "next/image"; // Import the Image component from Next.js

// Component for creating images with various options
const Regular_image_component = (p: {
  onmouseover?: any; // Optional function to call on mouse over
  onclick?: any; // Optional function to call on click
  src: any; // Mandatory URL of the image
  alt: string; // Mandatory alt text for the image
  order?: number; // Optional order for positioning the image
  class?: string; // Optional CSS class for styling
}) => {
  return (
    <div
      // Apply event handlers, order, and class from props
      onMouseOver={p.onmouseover}
      onClick={p.onclick}
      style={{ order: p.order }}
      className={p.class}
    >
      <Image
        // Set image properties
        width={20000}
        height={20000}
        src={p.src}
        alt={p.alt}
        layout="responsive" // Ensure responsive image behavior
      />
    </div>
  );
};

// Export the component for use in other parts of the application
export default Regular_image_component;
