import Image from "next/image";
import "./../../public/styles/article.scss";
import { Regular_div_title_component } from "./titles";
import Regular_content_component from "./content";
import Regular_image_component from "./images";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import ReactPaginate from "react-paginate";
import "./../../public/styles/All-stone.scss";
import { useEffect, useState } from "react";
import { Blog_type } from "@/api/api";
import Link from "../../node_modules/next/link";

// Function to limit text length
export function showLimitedCharacter(text: string, limit: number) {
  if (text.length <= limit) {
    return text;
  } else {
    return text.substring(0, limit) + "...";
  }
}

// Component for displaying related articles with pagination
const Related_articles = (p: {
  elected_object: any; // Data to display
  main_class?: string; // Optional main class
  itemsPerPage: number;
  main_pagination_class: string;
}) => {
  // State for pagination
  const [itemOffset, setItemOffset] = useState<number>(0);

  // use this usestate for current pagination
  const [currentPage, setCurrentPage] = useState<number>(0);

  // Calculations for pagination

  const perpage: number = p.itemsPerPage;
  const endOffset: number = itemOffset + perpage;
  const currentItems: Blog_type[] = p.elected_object?.slice(
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
      <div className="main-related-article-page">
        {/* Map through current items and display each article */}
        {currentItems &&
          currentItems.map((e: Blog_type, index: number) => (
            <>
              <div className="self-related-article-page">
                <Link
                  className="default-link set-margin-article "
                  style={{ width: "100%" }}
                  href={`/Blog/${e.url}`}
                >
                  <div className="" key={index}>
                    <div>
                      {/* Display article image */}
                      <Image
                        src={e.images[0].url}
                        alt="reger"
                        width={20000}
                        height={20000}
                        layout="responsive"
                      />
                    </div>
                    {/* Display article title */}
                    <Regular_div_title_component
                      title={e.title}
                      class="related-article-title"
                    />
                    {/* Display article content (limited to 120 characters) */}
                    <Regular_content_component
                      class="related-article-content"
                      text={showLimitedCharacter(e.content[0].text, 120)}
                    />
                    <hr className="related-article-line" />
                    <div className="related-article-down-part">
                      {/* Display article views and creation date */}
                      <div>
                        <Regular_image_component
                          alt="views"
                          class="eye"
                          src="/assets/photo/eye-icon.svg"
                        />
                        {e.views}
                      </div>
                      <div>{e.createdArt}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          ))}
      </div>
      <ReactPaginate
        forcePage={currentPage}
        // **Classes for styling:**
        previousClassName="prev-next-pagination" // Class for previous button
        nextClassName="prev-next-pagination" // Class for next button
        activeLinkClassName="active-number-pagination" // Class for active page link
        pageLinkClassName="every-number-pagination" // Class for regular page links
        // **Pagination behavior:**
        breakLabel=" ... " // Label for omitted page numbers
        marginPagesDisplayed={1} // Number of pages displayed on each side
        nextLabel={<ChevronLeft />} // Icon for next button
        onPageChange={handlePageClick} // Function called when page changes
        pageRangeDisplayed={3} // Number of page links to display
        pageCount={pageCount} // Total number of pages
        previousLabel={<ChevronRight />} // Icon for previous button
        // **Layout:**
        containerClassName={p.main_pagination_class} // Class for the pagination container
      />
    </>
  );
};
export default Related_articles;
