"use client";
import Main_header from "@/component/header";
import Regular_image_component from "@/component/images";
import { State_context } from "@/hooks/Context";
import { useContext, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./page.scss";
import Regular_h1_title_component, {
  Regular_div_title_component,
  Regular_h2_title_component,
  Regular_h3_title_component,
  Regular_h4_title_component,
} from "@/component/titles";
import Main_line_title from "@/component/line_title";
import Related_stone from "@/component/relatedstone";
import Link from "next/link";
import Main_paginate_video from "@/component/paginate_video";
import Regular_content_component from "@/component/content";
import Related_articles from "@/component/relatedarticle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Main_footer from "@/component/footer";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Main_search_filter from "@/component/search_filter";
import Main_scroll_top_btn from "@/component/scroll_top";
import {
  Index_type,
  Blog_type,
  Stone_type,
  Video_type,
  Assets_type,
  why_type,
  Socialmedia,
} from "@/api/api";

function Index() {
  // we use this usestate for hydration
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const total: any[] = useContext(State_context);
  const index: Index_type[] = total[7];

  // by total we get the data of Stone
  const Stone: Stone_type[] = total[1];
  // by total we get the data of Video
  const Main_Video: Video_type[] = total[6];

  // by total we get the data of Blog
  const Blog: Blog_type[] = total[0];

  const sortByPopularityAndIndex: any = (a: Video_type, b: Video_type) => {
    // This function creates a custom comparison function that sorts the 'video' array by popularity and then by index.

    if (a.view > b.view) {
      return -1; // If the popularity of 'a' is greater than the popularity of 'b', return -1.
    } else if (a.view < b.view) {
      return 1; // If the popularity of 'a' is less than the popularity of 'b', return 1.
    } else {
      return -1; // If the popularity of 'a' is equal to the popularity of 'b', return -1.
    }
  };

  const copy_video: Video_type[] = [...Main_Video].sort(
    sortByPopularityAndIndex
  ); // This line creates a copy of the 'Stone' array and sorts it using the 'sortByPopularityAndIndex' function.

  return (
    <>
      {isClient && (
        <html dir="rtl">
          <head>
            <title>سنگ لیتوس</title>
            <meta content="metaforindex" />
          </head>
          <body>
            <main>
              {/* showing header */}
              <Main_header />
              <section>
                {/* showing banner slider from api */}
                <Carousel className="main-carousel" variant="dark">
                  {index[0]?.slider?.map((e: Assets_type, index: number) => (
                    <Carousel.Item key={index}>
                      <Regular_image_component
                        alt={e.alt ? e.alt : ""}
                        src={e.url}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </section>
              <section>
                {/* the code effectively renders a title element with a decorative line to create a visually appealing and structured header section.
           It utilizes custom components to manage the styling and layout of the title and line elements, ensuring consistency and maintainability. */}
                <div className="container mt-5">
                  <Main_line_title top={-20} class="border-title-line" />
                  <Regular_h1_title_component
                    class="bordered-title"
                    title=" انواع گوهر سنگ ها "
                  />
                </div>
                {/* the code effectively renders the related gemstone section using a custom component, managing the layout, styling, 
            and pagination of the related gemstone list. It utilizes props to customize the displayed data and hide the pagination for a concise presentation. */}
                <Related_stone
                  self_class="self-all-stone-cover"
                  main_class="container main-all-stone-cover"
                  elected_object={[...Stone].reverse()}
                  itemsPerPage={5}
                  main_pagination_class="d-none"
                />
                <div className="main-btn-related-stone d-flex justifycontent-center">
                  <Link
                    className="default-link related-stone-btn"
                    href="/Stone"
                  >
                    لیست گوهر سنگ ها
                  </Link>
                </div>
              </section>
              <section>
                {/* the code effectively combines the related gemstone button and the search filter component to enhance the user experience.
             The button provides easy access to the full gemstone list, while the search filter allows users to narrow down their search results. */}
                <div className="container mt-3">
                  <Main_line_title top={-20} class="border-title-line" />
                  <Regular_h2_title_component
                    class="bordered-title"
                    title=" معادن گوهر سنگ های ایران و جهان"
                  />
                </div>
                <Main_search_filter />
              </section>
              <section>
                {/* The Main_paginate_video component with the main_class="main-video-index-layout" class, elected_object={copy_video} prop, 
          itemsPerPage={2} prop, and main_pagination_class="d-none" prop renders a paginated list of videos. The elected_object={copy_video} prop provides the video data,
           likely coming from a local copy of the video array. The itemsPerPage={2} prop limits the number of videos displayed per page to two. 
           The main_pagination_class="d-none" prop hides the pagination elements, indicating that the list fits on a single page. */}
                <div className="container mt-3">
                  <Main_line_title top={-20} class="border-title-line" />
                  <Regular_h3_title_component
                    class="bordered-title"
                    title=" برترین ویدئوهای ماه"
                  />
                  <Main_paginate_video
                    main_class="main-video-index-layout"
                    elected_object={copy_video}
                    itemsPerPage={2}
                    main_pagination_class="d-none"
                  />
                </div>
              </section>
              <section>
                <div className="container mt-5">
                  <Main_line_title top={-20} class="border-title-line" />
                  <Regular_h4_title_component
                    class="bordered-title"
                    title="  چرا ما؟ "
                  />
                  {/* The code utilizes a map function to render the why-children elements dynamically. 
               The index[0]?.why?.map() expression iterates through the why property of the first element in the index array. */}
                  <div className="main-why-section">
                    {index[0]?.why?.map((e: why_type, index: number) => (
                      <div className="why-children" key={index}>
                        <Regular_image_component
                          class="why-image"
                          src={e.image?.url}
                          alt={e.image?.alt ? e.image?.alt : ""}
                        />
                        <Regular_content_component text={e.text} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section>
                {/* The div element with the class "mt-3 mb-3" contains a Related_articles component that renders a list of related articles.
           The elected_object={[...Blog].reverse()} prop provides the article data, likely from a local copy of the Blog array. 
           The itemsPerPage={3} prop limits the number of articles displayed to three. The main_pagination_class="d-none" prop hides the pagination elements, 
           indicating that the list fits on a single page. */}
                <div className="container mt-5">
                  <Main_line_title top={-20} class="border-title-line" />
                  <Regular_h4_title_component
                    class="bordered-title"
                    title="  آیا می دانید ؟  "
                  />
                  <div className="mt-3 mb-3">
                    <Related_articles
                      elected_object={[...Blog].reverse()}
                      itemsPerPage={3}
                      main_pagination_class="d-none"
                    />
                  </div>
                </div>
              </section>
              <section>
                {/* The div element with the className="part-right" class contains an Regular_image_component that renders the expert's profile image. 
          The src={index[0]?.expert.image.url} prop specifies the image source URL and the alt={index[0]?.expert.image.alt} prop provides alternative text for accessibility
           purposes. */}
                <div className="container mt-5">
                  <Main_line_title top={-20} class="border-title-line" />
                  <Regular_h4_title_component
                    class="bordered-title"
                    title="  کارشناسی سنگ "
                  />
                </div>
                <div className="main-expert">
                  <div className="part-right">
                    {index[0]?.expert.image.alt && (
                      <Regular_image_component
                        src={index[0]?.expert.image.url}
                        alt={index[0]?.expert.image.alt}
                      />
                    )}
                  </div>
                  <div className="part-left">
                    <div className="content">{index[0]?.expert.text}</div>
                    <div className="input">
                      <input type="text" />
                      <button> ثبت </button>
                    </div>
                    {/* The div element with the className="icon" class displays a list of the expert's social media icons.
           The index[0]?.expert.socialmedia.map() expression iterates through the expert's social media links and renders corresponding icons using Link tags.
            Each icon includes a regular image component and a href={e.link} attribute for linking to the respective social media profile. */}
                    <div className="icon">
                      {index[0]?.expert.socialmedia.map((e: Socialmedia) => (
                        <>
                          <Link href={e.link}>
                            <Regular_image_component src={e.url} alt={e.alt} />
                          </Link>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <section>
                {/* defining title for the upcoming section */}
                <div className="container mt-5">
                  <Main_line_title top={-20} class="border-title-line" />
                  <Regular_h4_title_component
                    class="bordered-title"
                    title="  رایج ترین تراش ها"
                  />
                </div>
              </section>
              <section>
                <div className="container main-slider-layout">
                  {/* The code snippet defines a full-width swiper with custom navigation buttons for displaying gemstone photos and titles. It utilizes the Swiper */}
                  <div className="custom-prev-button">
                    <ChevronRight size={30} color="#967446" />
                  </div>
                  {/* The Swiper component with the className="mySwiper pt-3 pb-3" is used to create the main slider. It includes various configuration options: */}
                  <Swiper
                    autoplay={{
                      disableOnInteraction: false, // Stop autoplay on user interaction?
                    }}
                    speed={500}
                    slidesPerView={5}
                    spaceBetween={20}
                    loop={true}
                    freeMode={true}
                    modules={[FreeMode, Navigation, Autoplay]}
                    navigation={{
                      nextEl: ".custom-next-button",
                      prevEl: ".custom-prev-button",
                    }}
                    className="mySwiper pt-3 pb-3 "
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                      },
                      640: {
                        slidesPerView: 2,
                      },
                      992: {
                        slidesPerView: 4,
                      },
                      1200: {
                        slidesPerView: 5,
                      },
                    }}
                  >
                    {/* The div element with the className=" p-5" contains a list of SwiperSlide elements, each representing a single slide in the carousel. 
                The index and key props ensure that the swiper can identify and manage individual slides. */}
                    <div className=" p-5">
                      {/* For each gemstone in the booresh array, the code renders a SwiperSlide element with a unique identifier key={index} to ensure proper 
                identification in the swiper. Each slide consists of a main-swiper-slide component that contains the image and title of the respective gemstone */}
                      {index[0]?.booresh?.map(
                        (
                          e: {
                            title: string;
                            image: Assets_type;
                          },
                          index: number
                        ) => (
                          <SwiperSlide key={index}>
                            <div className="main-swiper-slide">
                              <Regular_image_component
                                src={e.image.url}
                                alt={e.image.alt ? e.image.alt : ""}
                              />
                              <Regular_div_title_component title={e.title} />
                            </div>
                          </SwiperSlide>
                        )
                      )}
                    </div>
                  </Swiper>
                  <div className="custom-next-button">
                    <ChevronLeft size={30} color="#967446" />
                  </div>
                </div>
              </section>
              <section>
                {/* scroll to up button */}
                <Main_scroll_top_btn />
              </section>
            </main>
            <Main_footer />
          </body>
        </html>
      )}
    </>
  );
}

export default Index;
