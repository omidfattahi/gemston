"use client";
import Regular_image_component from "@/component/images";
import "../../public/styles/loader.scss";
import Regular_h1_title_component from "@/component/titles";
// The Main_loader component returns a React element that consists of a div element with the class "d-flex vh-100 main-loader-content".
// This container element defines the overall layout of the loading indicator.
function Main_loader() {
  return (
    <>
      {/* whole page layout */}
      <div className=" d-flex vh-100 main-loader-content">
        {/* related git  */}
        <Regular_image_component
          src="/assets/photo/loading-loader.gif"
          alt="lithos-loader"
          class="loader-img"
        />
        <div>
          {/* simple title  */}
          <Regular_h1_title_component
            title="لطفا چند لحظه منتظر بمانید!..."
            class="mt-4"
          />
        </div>
      </div>
    </>
  );
}

export default Main_loader;
