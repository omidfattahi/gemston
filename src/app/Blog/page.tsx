"use client";
import Regular_image_component from "@/component/images";
import { useEffect, useState } from "react";
import Regular_h1_title_component, {
  Regular_div_title_component,
} from "@/component/titles";
import "../../../public/styles/All-article.scss";
import { useContext } from "react";
import { State_context } from "@/hooks/Context";
import "./../../../public/styles/article.scss";
import Related_articles from "@/component/relatedarticle";
import { ChevronDown, ChevronUp } from "../../../node_modules/react-bootstrap-icons/dist/index";
import Main_header from "@/component/header";
import Main_footer from "@/component/footer";
import { Blog_type } from "@/api/api";

//main component for all-article page
const All_Articles = () => {
  // we use this usestate for hydration
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // access blog data
  const total: any[] = useContext(State_context);
  const Blog: Blog_type[] = total[0];

  // this  usestate use for active filter style
  const [top_filter, set_top_filter] = useState<number>(2);

  // this usestate for open category
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // //filter blog by their category
  const blog_categories: any = {};
  const [selectedCategories, SetselectedCategories] = useState<string | null>(
    null
  );

  // this usestate use for activation of category
  const [activeItem, setActiveItem] = useState<number>(1);

  //show contents of choosen category with this method
  const handleCategoryClick = (category: string | null, e: number) => {
    SetselectedCategories(category);
    setActiveItem(e);
  };

  //created a const called filterData which we have different if conditions inside it that work like a switch case . whenever we click the filter we want
  //te related if statement executes
  let filteredblog: Blog_type[] | undefined;
  const filterData = (
    top_filter: number,
    selectedCategories: string | null
  ) => {
    filteredblog = [...Blog];

    if (top_filter === 0) {
      filteredblog = filteredblog;
    }

    if (top_filter === 1) {
      const sortByViewsAndIndex: any = (a: Blog_type, b: Blog_type) => {
        // This function creates a custom comparison function that sorts the 'Stone' array by views and then by index.

        if (a.views > b.views) {
          return -1; // If the views of 'a' is greater than the views of 'b', return -1.
        } else if (a.views < b.views) {
          return 1; // If the views of 'a' is less than the views of 'b', return 1.
        } else {
          return -1; // If the views of 'a' is equal to the views of 'b', return -1.
        }
      };

      const sortedStonesCopy: Blog_type[] = [...Blog].sort(sortByViewsAndIndex); // This line creates a copy of the 'Stone' array and sorts it using the 'sortByPopularityAndIndex' function.

      filteredblog = sortedStonesCopy;
    }

    //reverse it to show from newest to oldest
    if (top_filter === 2) {
      filteredblog = filteredblog.reverse();
    }

    //filter them by their category
    if (selectedCategories) {
      filteredblog = filteredblog.filter((e: any) =>
        e.categories.includes(selectedCategories)
      );
    }

    // if value was null show all article
    if (selectedCategories === null) {
      filteredblog = filteredblog;
    }

    return filteredblog;
  };

  // with this we van have multiple filter at the same time
  const filteredItems: any = filterData(top_filter, selectedCategories);

  // Iterate through each article in the Blog array
  Blog.map((article: any) => {
    // Destructure the id, title, and categories properties from the article
    const {
      id,
      title,
      categories,
    }: { id: string; title: string; categories: string } = article;

    // Process each category for the article
    for (const category of categories) {
      // Check if the category doesn't exist in the blog_categories object yet
      if (!blog_categories.hasOwnProperty(category)) {
        // Create a new empty array for this category
        blog_categories[category] = [];
      }

      // Add the article's ID and title to the array for this category
      blog_categories[category].push({ id, title });
    }
  });

  return (
    <>
      {isClient && (
        <html dir="rtl">
          <head>
            <title>همه مقالات</title>
            <meta name="description" content="" />
          </head>
          <body>
            <main>
              {/* this is a header  */}
              <Main_header />
              {/* show banner */}
              <section>
                <Regular_image_component
                  src="/assets/photo/all-article-banner.png"
                  alt="articlebanner"
                />
              </section>

              {/* show title and some explanations of this page  */}
              <section className="container">
                <Regular_h1_title_component
                  title="همه مقالات"
                  class="text-center mt-2"
                />
                <Regular_div_title_component
                  title="در این صفحه فهرستی از مطالب منتشر شده در حیطه سنگ و جواهرات را مطالعه میکنید."
                  class="text-center all-article-description"
                />
              </section>

              <section>
                {/* this div contains whole page filter in 3 part  */}
                <div className="whole-filter">
                  {/* this part contain top part filter  */}
                  <div className="main-filter-top-part">
                    <div className="first-filter">
                      <div
                        onMouseOver={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                        onClick={() => setIsOpen(!isOpen)}
                        className="category-btn"
                      >
                        <div className="empty-space"></div>
                        <Regular_div_title_component title="دسته بندی ها" />
                        {isOpen ? <ChevronDown /> : <ChevronUp />}

                        {/* creates each category and show them as a button in the categories section which can filter blog by their related category */}
                        {isOpen && (
                          <div className="all-article-category">
                            <div
                              className={
                                activeItem === 1 ? "item" : "item-active"
                              }
                              onClick={() => handleCategoryClick(null, 1)}
                            >
                              همه
                            </div>

                            {Object.keys(blog_categories).map(
                              (category, index) => (
                                <>
                                  <div
                                    onClick={() =>
                                      handleCategoryClick(category, index + 2)
                                    }
                                    className={
                                      activeItem === index + 2
                                        ? "item"
                                        : "item-active"
                                    }
                                  >
                                    {category}
                                  </div>
                                </>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="second-filter">
                      <div
                        // filter by most viewed blogs
                        className={
                          top_filter === 1 ? "filter-btn-active" : "filter-btn"
                        }
                        onClick={() => set_top_filter(1)}
                      >
                        پر بازدیدترین ها
                      </div>

                      <div
                        // filter by latest blogs
                        className={
                          top_filter === 2 ? "filter-btn-active" : "filter-btn"
                        }
                        onClick={() => set_top_filter(2)}
                      >
                        اخرین مقالات
                      </div>
                    </div>

                    <div className="all-article-lenght">
                      {/* show the number of existing blogs  */}
                      <div>{Blog.length} مقالات</div>
                    </div>
                  </div>

                  {/* show all article in page  */}
                  <Related_articles
                    elected_object={filteredblog}
                    itemsPerPage={21}
                    main_pagination_class="pagination-container"
                  />
                </div>
              </section>
            </main>
            {/* this is footer of our website */}
            <Main_footer />
          </body>
        </html>
      )}
    </>
  );
};
export default All_Articles;
