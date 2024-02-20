"use client";
import { Blog_type, Stone_type } from "@/api/api";
import "./../../../../public/styles/All-stone.scss";
import Main_footer from "@/component/footer";
import Main_header from "@/component/header";
import { Regular_div_title_component } from "@/component/titles";
import { State_context } from "@/hooks/Context";
import { useContext, useState } from "react";
import "./../../../../public/styles/Search.scss";
import { ChevronLeft, ChevronRight } from "../../../../node_modules/react-bootstrap-icons/dist/index";
import { showLimitedCharacter } from "@/component/relatedarticle";
import { useParams } from "../../../../node_modules/next/navigation";
import Link from "../../../../node_modules/next/link";
import ReactPaginate from "react-paginate";
// import ReactPaginate from "../../../../node_modules/react-paginate/index";

export interface combine_type {
  url: any;
  content: string;
  name: string;
  title: string;
}

function Main_search_site() {
  // Access state from context and get data and also get params of page
  const total: any[] = useContext(State_context);
  const { id } = useParams<any>();
  const Blog: Blog_type[] = total[0];
  const Stone: Stone_type[] = total[1];
  // this code is for translate browser output and change it to persian
  const decodedWord: string = decodeURIComponent(decodeURIComponent(id));

  // here we create uniqe array to store data from different array to use it
  const combinedResults: combine_type[] = [
    ...Blog.map((blog: Blog_type) => ({
      title: blog.title,
      url: `/Blog/${blog.url}`,
      content: blog.content[0].text,
      name: "مقاله",
    })),
    ...Stone.map((stone: Stone_type) => ({
      title: stone.title,
      url: `/Stone/${stone.url}`,
      content: stone.content[0].text,
      name: "گوهر سنگ",
    })),
  ];

  // this function show seggestion base on include method
  const filteredResults: combine_type[] = combinedResults.filter(
    (result: combine_type) => {
      // Normalize both searchvalue and title for equivalent characters
      const normalizedSearchValue: string = normalizeForEquivalents(
        decodedWord.toLocaleLowerCase()
      );
      const normalizedTitle: string = normalizeForEquivalents(
        result.title.toLocaleLowerCase()
      );

      // Perform the filtering based on normalized values
      return (
        normalizedSearchValue && normalizedTitle.includes(normalizedSearchValue)
      );
    }
  );

  // Function to normalize equivalent Arabic characters
  function normalizeForEquivalents(str: string): string {
    const equivalentChars: any = {
      آ: "ا",
      إ: "ا",
      اِ: "ا",
      اُ: "ا",
      اَ: "ا",
    };

    return str.replace(/[آإاِاُاَ]/g, (char) => equivalentChars[char]);
  }

  const [itemOffset, setItemOffset] = useState<number>(0);

  // Calculations for pagination
  const endOffset: number = itemOffset + 20;
  const currentItems = filteredResults?.slice(itemOffset, endOffset);
  const pageCount: number = Math.ceil(filteredResults?.length / 20);

  // Handle page change
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 20) % filteredResults?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <html dir="rtl">
        <head>
          <title>نمایش جستجو</title>
        </head>
        <body>
          {/* header  */}
          <Main_header />
          <div className="pt-1">
            <Regular_div_title_component
              class="container result-search "
              title={<>نتایج جستجو برای : {decodedWord}</>}
            />
          </div>
          {/* layout for page  */}
          <div className="container main-search-layout">
            {/* show the words that user search  */}

            {/* map all the related item  */}
            {filteredResults.length > 0 ? (
              currentItems &&
              currentItems.map((e: combine_type) => (
                <>
                  <div className="main-result-self-layout">
                    {/* show title  */}
                    <div className="title">{e.title}</div>
                    {/* show if they are blog or stone  */}
                    <div className="name">{e.name}</div>
                    <div className="result-self-layout">
                      {/* show content  */}
                      {showLimitedCharacter(e.content, 300)}
                    </div>
                    <div className="d-flex justify-vontent-center">
                      {/* this link for openning the result  */}
                      <Link className="btn" href={e.url}>
                        بازدید
                      </Link>
                    </div>
                  </div>
                </>
              ))
            ) : (
              // if we dont have result
              <div className="search-not-found">
                متاسفانه نتیجه ای پیدا نشد !
              </div>
            )}
          </div>
          <div className="mt-3 mb-5">
            {filteredResults.length > 0 ? (
              <ReactPaginate
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
                containerClassName="pagination-container" // Class for the pagination container
              />
            ) : (
              ""
            )}
          </div>
          {/* footer  */}
          <Main_footer />
        </body>
      </html>
    </>
  );
}

export default Main_search_site;
