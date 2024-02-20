import React from "react";
import Regular_video_component from "./video";
import { Video_type } from "@/api/api";

function See_section_every_article(p: { videos: Video_type[] }) {
  // Receive videos as a prop
  return (
    <>
      <div className="main-see-video-section">
        {/* Main container for video section */}
        {p.videos?.map((video: Video_type, index: number) => (
          <>
            <Regular_video_component
              key={index}
              class="self-see-video-section"
              src={video.video.url}
              poster={video.video.urlImg}
            />
          </>
        ))}
      </div>
    </>
  );
}

export default See_section_every_article; // Export the component for use in other pages
