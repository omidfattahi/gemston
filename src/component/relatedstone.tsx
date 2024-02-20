import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./../../public/styles/stone.scss";
import "./../../public/styles/All-stone.scss";
import Image from "next/image";
import { Regular_div_title_component } from "./titles";
import Regular_image_component from "./images";
import { playAudio } from "@/app/Stone/[id]/page";
import Regular_audio_component from "./audio";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import { State_context } from "@/hooks/Context";
import {
  Search_filter_sidebar_color_type,
  Stone_table_type,
  Stone_type,
} from "@/api/api";
import Link from "../../node_modules/next/link";

// this component is use for stones  it has some input
// itemsperpage indicate that how many item we want to show in one page with our pagination
// elected_object is  the filterd our object or something that we want to map it
// main_class is use to define layout for our mapped stones
// main_pagination_class is use for style our pagination
// self_class is use to style every stones by itself

function Related_stone(p: {
  itemsPerPage: number;
  elected_object: any;
  main_class: string;
  main_pagination_class: string;
  self_class: string;
}) {
  // with const total we get whole data from api
  const total: any[] = useContext(State_context);

  // by total we get the data of Stone
  const Stone: Stone_type[] = total[1];

  // by total we get the data of Stone_table
  const Stone_table: Stone_table_type[] = total[2];

  // by total we get the data of Filter
  const Filter: Search_filter_sidebar_color_type[] = total[3];

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState<number>(0);

  // use this usestate for current pagination
  const [currentPage, setCurrentPage] = useState<number>(0);

  // Calculations for pagination

  const perpage: number = p.itemsPerPage;
  const endOffset: number = itemOffset + perpage;
  const currentItems: Stone_type[] = p.elected_object?.slice(
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
          {/* this is our map that we want use it by pagination  */}
          <div className={p.main_class}>
            {currentItems &&
              currentItems.map((e: Stone_type, index: number) => (
                <>
                  {/* this is every stone  */}
                  <div className={p.self_class}>
                    <div className="related-stone-cover" key={index}>
                      {/* with this link onclick on every stone go to its page  */}
                      <Link
                        className="default-link"
                        style={{ width: "100%" }}
                        href={`/Stone/${e.url}`}
                      >
                        {/* this is image of each stone  */}
                        <div>
                          <Image
                            src={e.mapimages[0].url}
                            alt={e.mapimages[0].alt ? e.mapimages[0].alt : ""}
                            width={20000}
                            height={20000}
                            layout="responsive"
                          />
                        </div>
                      </Link>
                      {/* this part we xtract and show every color of each stone that has that color  */}
                      <div className="main-layout-color-part">
                        {Stone_table.map(
                          (a: any) =>
                            a.id === e.id &&
                            Filter.map(
                              (c: any) =>
                                a.color.includes(c.name) && (
                                  <>
                                    <div
                                      style={{
                                        backgroundColor: c.code,
                                      }}
                                      className="filte-colors-every-stones"
                                    ></div>
                                  </>
                                )
                            )
                        )}
                      </div>
                      {/* in this part we create a part that we put the audio of each stone and also the name of each stone  */}
                      <div className="layout-bottom-related-article">
                        {/* this is a stone title  */}
                        <Regular_div_title_component
                          title={e.title}
                          class="related-stone-title"
                        />
                        {/* this is our icon  */}
                        <Regular_image_component
                          onclick={() =>
                            playAudio(e.sound.id ? e.sound.id : "")
                          }
                          class="related-stone-audio"
                          alt="stone name"
                          src="/assets/photo/white-sound.png"
                        />
                        {/* this is our audio  of our stone  */}
                        <Regular_audio_component
                          id={e.sound.id ? e.sound.id : ""}
                          class="d-none"
                          src={e.sound.url}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </section>
        <section>
          {/* this section is contain pagination with different data  base on what we want  */}
          <ReactPaginate
            forcePage={currentPage}
            // **Classes for styling the pagination elements:**
            previousClassName="prev-next-pagination" // Class for the previous page button
            nextClassName="prev-next-pagination" // Class for the next page button
            activeLinkClassName="active-number-pagination" // Class for the currently active page link
            pageLinkClassName="every-number-pagination" // Class for regular page links
            // **Pagination behavior and appearance:**
            breakLabel=" ... " // Label to display when some page numbers are omitted
            marginPagesDisplayed={1} // Number of page links to display on each side of the current page
            nextLabel={<ChevronLeft />} // Icon to display for the next page button
            onPageChange={handlePageClick} // Function to call when a page change occurs
            pageRangeDisplayed={3} // Number of page links to display at a time
            pageCount={pageCount} // Total number of pages to paginate through
            previousLabel={<ChevronRight />} // Icon to display for the previous page button
            // **Layout:**
            containerClassName={p.main_pagination_class} // Class to apply to the overall pagination container element
          />
        </section>
      </main>
    </>
  );
}

export default Related_stone;
