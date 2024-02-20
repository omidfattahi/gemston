import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import ReactPaginate from "react-paginate";
import "./../../public/styles/All-stone.scss";
import "./../../public/styles/Gallery.scss";
import Regular_video_component from "./video";
import { Video_type } from "@/api/api";

// Component for rendering a paginated list of videos
function Main_paginate_video(p: {
  itemsPerPage: number; // Number of videos to display per page
  main_pagination_class: string; // CSS class for pagination container
  main_class: string; // CSS class for main video container
  elected_object: any; // Data containing videos to display
}) {
  // State to manage the current page offset
  const [itemOffset, setItemOffset] = useState<number>(0);

  // use this usestate for current pagination
  const [currentPage, setCurrentPage] = useState<number>(0);

  // Calculations for pagination

  const perpage: number = p.itemsPerPage;
  const endOffset: number = itemOffset + perpage;
  const currentItems: Video_type[] = p.elected_object?.slice(
    itemOffset,
    endOffset
  );
  const pageCount: number = Math.ceil(p.elected_object?.length / perpage);

  // Handle page change
  const handlePageClick = (event: any) => {
    const newOffset: number =
      (event.selected * perpage) % p.elected_object?.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected);
  };

  // Update item offset and current page when filtered blog changes
  useEffect(() => {
    const newPageCount: number = Math.ceil(p.elected_object?.length / perpage);
    const lastPage: number = Math.max(0, newPageCount - 1);

    if (currentPage > lastPage) {
      setItemOffset(lastPage * perpage);
      setCurrentPage(lastPage);
    }
  }, [p.elected_object]);

  return (
    <>
      <main>
        <section>
          {/* Section for displaying the videos */}
          <div className={p.main_class}>
            {/* Map through current items and render videos */}
            {currentItems &&
              currentItems.map((e: any, index: number) => (
                <>
                  <Regular_video_component
                    key={index} // Ensure unique keys for video components
                    class="self-video-paginate"
                    src={e.video.url} // Video source URL
                    poster={e.video.urlImg} // Video poster image URL
                  />
                </>
              ))}
          </div>
        </section>
        <section>
          {/* Section for pagination controls */}
          <ReactPaginate
            forcePage={currentPage}
            previousClassName="prev-next-pagination"
            nextClassName="prev-next-pagination"
            activeLinkClassName="active-number-pagination"
            pageLinkClassName="every-number-pagination"
            breakLabel=" ... "
            marginPagesDisplayed={1}
            nextLabel={<ChevronLeft />} // Icon for next page button
            onPageChange={handlePageClick} // Handle page change events
            pageRangeDisplayed={3} // Number of page links to display
            pageCount={pageCount} // Total number of pages
            previousLabel={<ChevronRight />} // Icon for previous page button
            containerClassName={p.main_pagination_class} // CSS class for pagination container
          />
        </section>
      </main>
    </>
  );
}

// Export the component for use in other parts of the application
export default Main_paginate_video;
