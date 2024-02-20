"use client";
import Regular_image_component from "@/component/images";
import "./../../../public/styles/Gallery.scss";
import { Regular_div_title_component } from "@/component/titles";
import { ChevronDown, ChevronUp } from "../../../node_modules/react-bootstrap-icons/dist/index";
import { useContext, useEffect, useState } from "react";
import { State_context } from "@/hooks/Context";
import Main_paginate_video from "@/component/paginate_video";
import Main_header from "@/component/header";
import Main_footer from "@/component/footer";
import { Video_type } from "@/api/api";

function Main_gallery() {
  // we use this usestate for hydration
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // with const total we get whole data from api
  const total: any[] = useContext(State_context);

  // by total we get the data of Video
  const Main_Video: Video_type[] = total[6];

  //defining some useful usestates for the upcoming codes
  const [icon, set_icon] = useState<boolean>(true);
  const [selected, set_selected] = useState<number>(1);
  const [active_category, set_active_category] = useState<number>(1);
  const [category, set_category] = useState<string | null>(null);

  const displayedCategories: { [key: string]: boolean } = {};

  const handle_category = (e: string | null, b: number) => {
    set_category(e);
    set_active_category(b);
  };

  let filteredvideo: Video_type[] | undefined;
  //defining a variable for collecting our all filters
  const filterData: any = (selected: number, category: string | null) => {
    filteredvideo = [...Main_Video];

    if (selected === 1) {
      filteredvideo = filteredvideo.reverse();
    }
    if (selected === 2) {
      const sortByPopularityAndIndex: any = (a: Video_type, b: Video_type) => {
        // This function creates a custom comparison function that sorts the 'Stone' array by popularity and then by index.

        if (a.view > b.view) {
          return -1; // If the popularity of 'a' is greater than the popularity of 'b', return -1.
        } else if (a.view < b.view) {
          return 1; // If the popularity of 'a' is less than the popularity of 'b', return 1.
        } else {
          return -1; // If the popularity of 'a' is equal to the popularity of 'b', return -1.
        }
      };

      const copy_video = [...Main_Video].sort(sortByPopularityAndIndex); // This line creates a copy of the 'Stone' array and sorts it using the 'sortByPopularityAndIndex' function.

      filteredvideo = copy_video; // This line assigns the sorted copy of the 'Stone' array to the 'filteredStones' variable.
    }
    if (category) {
      filteredvideo = filteredvideo.filter((e: any) => {
        return e.category === category;
      });
    } else {
      return filteredvideo;
    }

    return filteredvideo;
  };

  // this function has the filterd stones
  const filteredItems: any[] = filterData(selected, category);

  return (
    <>
      {isClient && (
        <html dir="rtl">
          <head>
            <title>گالری ویدئو</title>
            <meta name="description" content="gallery" />
          </head>
          <body>
            <main>
              <Main_header />
              <section>
                {/* this is banner of videos page  */}
                <Regular_image_component
                  src="/assets/photo/all-article-banner.png"
                  alt="ویدیوها"
                />
              </section>
              <section>
                <Regular_div_title_component
                  title="در این صفحه فهرستی از گالری ویدیو منتشر شده در حیطه سنگ و جواهرات را مشاهده میکنید."
                  class="main-videos-title"
                />
              </section>
              <section>
                {/* This section of code defines a clickable button that toggles the visibility of a submenu containing the video categories */}
                {/* The value of the icon state variable is used to determine the appearance of the button.
           When icon is true, the button has a downward-pointing arrow icon. When icon is false, the button has no icon. 
           This allows the button to serve as a visual indicator of whether the submenu is open or closed. */}
                <div className="main-filter-section-videos">
                  <div
                    onMouseLeave={() => set_icon(true)}
                    onMouseOver={() => set_icon(false)}
                    onClick={() => set_icon(!icon)}
                    className={
                      icon === true
                        ? "category-videos constatnt-filter"
                        : "category-videos-hover constatnt-filter"
                    }
                  >
                    دسته بندی ها
                    {icon && <ChevronUp />}
                    {!icon && (
                      <>
                        {/* The provided code snippet defines a React component for displaying a category selection dropdown.
                   It includes a downward-facing Chevron icon, a placeholder div, and a list of category items. 
                   Each category item has a click handler that calls a function named handle_category to handle the category selection.
                    The active category is indicated by the active_category state variable. */}
                        <ChevronDown />
                        <div className="fill-empty"></div>
                        <div className="main-category-layout">
                          <div
                            onClick={() => handle_category(null, 1)}
                            className={
                              active_category === 1 ? "item-hover" : "item"
                            }
                          >
                            همه
                          </div>
                          {/* It utilizes a map function to iterate over an array of video objects (Main_Video) and render a category item for each object. */}
                          {/* The if (!displayedCategories[e.category]) check ensures that each category is rendered only once. It maintains a displayedCategories object to track the already rendered categories.
                      The <div> element has an onClick handler that calls the handle_category function with two arguments: the category name and the index of the video object in the array (index + 2). 
                        This index is offset by 2 to account for the category item with the text "همه" (meaning "all" in Persian) that is rendered outside the loop. */}
                          {Main_Video?.map((e: any, index: number) => {
                            if (!displayedCategories[e.category]) {
                              displayedCategories[e.category] = true;
                              if (e.category) {
                                return (
                                  <>
                                    <div
                                      className={
                                        active_category === index + 2
                                          ? "item-hover"
                                          : "item"
                                      }
                                      onClick={() =>
                                        handle_category(e.category, index + 2)
                                      }
                                    >
                                      {e.category}
                                    </div>
                                  </>
                                );
                              }
                            }
                          })}
                        </div>
                      </>
                    )}
                  </div>
                  {/* The onclick handler calls the set_selected function with the value 2, which presumably updates the selected state variable to select the "Most Viewed Videos" filter.
               This triggers the conditional class application based on the new selected value. */}
                  <Regular_div_title_component
                    title="پربازدیدترین ها"
                    class={
                      selected === 2
                        ? "filter-cideos-btn-hover hide-filter"
                        : "filter-cideos-btn hide-filter"
                    }
                    onclick={() => set_selected(2)}
                  />

                  <Regular_div_title_component
                    // The onclick handler calls the set_selected function with the value 1, which presumably updates the selected state variable to select the
                    //  "Latest Videos" filter. This triggers the conditional class application based on the new selected value.
                    title="آخرین ویدیوها"
                    class={
                      selected === 1
                        ? "filter-cideos-btn-hover hide-filter"
                        : "filter-cideos-btn hide-filter"
                    }
                    onclick={() => set_selected(1)}
                  />
                  <div className="self-filter">
                    <Regular_div_title_component
                      title="پربازدیدترین ها"
                      class={
                        selected === 2
                          ? "filter-cideos-btn-hover"
                          : "filter-cideos-btn"
                      }
                      onclick={() => set_selected(2)}
                    />
                    <Regular_div_title_component
                      title="آخرین ویدیوها"
                      class={
                        selected === 1
                          ? "filter-cideos-btn-hover"
                          : "filter-cideos-btn"
                      }
                      onclick={() => set_selected(1)}
                    />
                  </div>
                </div>
              </section>
              <section>
                {/* The code uses a custom React component called Main_paginate_video to render the video list. 
          This component likely encapsulates the logic for paginating and displaying the filtered video data. */}
                {/* The elected_object prop provides the filtered video data to be displayed. This likely represents the video data filtered based on the selected filter options. */}
                {/* The itemsPerPage prop specifies the number of videos to display per page. In this case, it's set to 12, indicating that 12 videos will be shown on each page. */}
                <Main_paginate_video
                  main_class="main-video-page-layout"
                  elected_object={filteredvideo}
                  itemsPerPage={21}
                  main_pagination_class="pagination-container"
                />
                <br />
              </section>
            </main>
            <Main_footer />
          </body>
        </html>
      )}
    </>
  );
}

export default Main_gallery;
