"use client";
import { useParams } from "../../../../node_modules/next/navigation";
import "../../../../public/styles/article.scss";
import Regular_image_component from "@/component/images";
import Regular_h1_title_component from "@/component/titles";
import Regular_content_component from "@/component/content";
import Regular_video_component from "@/component/video";
import Related_articles from "@/component/relatedarticle";
import See_section_every_article from "@/component/seesection";
import { useContext, useEffect, useState } from "react";
import { State_context } from "@/hooks/Context";
import Main_header from "@/component/header";
import Main_footer from "@/component/footer";
import NotFoundPage from "@/app/not-found";
import { Assets_type, Blog_type, content_type } from "@/api/api";

const Each_Article = () => {
  // we use this usestate for hydration
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // find the article of current page
  const total: any[] = useContext(State_context);
  const Blog: Blog_type[] = total[0];
  const { id } = useParams<{ id: string }>();
  const finded_blog: Blog_type | undefined = Blog.find(
    (e: Blog_type) => e.url === id
  );

  //define variable for filterd blog
  let elected_Blog_object: any;

  //if it exist
  if (finded_blog && Blog.length > 0) {
    const selectedObject: Blog_type = finded_blog;

    // find blog with same categories
    const otherObjectsWithSameCategory: Blog_type[] = Blog.filter(
      (object: Blog_type) => {
        return object.categories.some((category: string) =>
          selectedObject.categories.includes(category)
        );
      }
    ).reverse();

    // find blog with other categories
    const otherCategoriesarticle: Blog_type[] = Blog.filter(
      (object: Blog_type) => {
        return !object.categories.some((category: string) =>
          finded_blog.categories.includes(category)
        );
      }
    ).reverse();

    // we show 3 related article we use same category then if it want reach to 3 we use other category
    const allobject: Blog_type[] = [
      ...otherObjectsWithSameCategory,
      ...otherCategoriesarticle,
    ];
    elected_Blog_object = allobject
      .filter((object: Blog_type) => object.id !== id)
      .slice(0, 3);
  }

  //define variable for filterd video
  let first5Videos: any;

  //if it exist
  if (finded_blog && Blog.length > 0) {
    const selectedObject: Blog_type = finded_blog;

    // find video with same categories
    const otherObjectsWithSameCategory: Blog_type[] = Blog.filter(
      (object: Blog_type) => {
        return object.categories.some((category: string) =>
          selectedObject.categories.includes(category)
        );
      }
    ).reverse();

    // find video with other categories
    const otherCategoriesVideos: Blog_type[] = Blog.filter(
      (object: Blog_type) => {
        return !object.categories.some((category: string) =>
          finded_blog.categories.includes(category)
        );
      }
    ).reverse();

    // we show 5 video first we use same category then if it wasnt reach to five we use other category
    const allVideos: Blog_type[] = [
      ...otherObjectsWithSameCategory,
      ...otherCategoriesVideos,
    ];
    first5Videos = allVideos
      .filter((object: Blog_type) => object.id !== id)
      .slice(0, 5);
  }

  // This code can be used to check if a blog post was found by a search query. If the blog post was not found, the code will return a <NotFoundPage/> component.
  if (!finded_blog) {
    return <NotFoundPage />;
  }

  return (
    <>
      {isClient && (
        <html dir="rtl">
          <head>
            {/* show title and metaDescription of this page by mapping them from api object */}
            <title>{finded_blog?.title}</title>
            <meta name="description" content={finded_blog?.metaDescription} />
          </head>
          <body>
            <main>
              {/* this is a header  */}
              <Main_header />

              <section>
                {/* banner for every article page */}
                <Regular_image_component
                  src={finded_blog?.images[0].url}
                  alt={finded_blog?.images[0].alt || ""}
                />
              </section>

              <section>
                {/* title for every article page */}
                {finded_blog && (
                  <Regular_h1_title_component
                    title={finded_blog.title}
                    class="regular-h1-title-style mb-1"
                  />
                )}
              </section>

              <section>
                <div className="main-every-article-page-layout container">
                  {/* map all images of object except the first one since we using it for our banner */}
                  {finded_blog?.images
                    .slice(1)
                    .map((e: Assets_type, index: number) => (
                      <>
                        <div
                          className="every-article-image"
                          key={e.id}
                          style={{ order: e.order ? e.order : "" }}
                        >
                          <Regular_image_component
                            src={e.url}
                            alt={e.alt ? e.alt : ""}
                          />
                        </div>
                      </>
                    ))}

                  {/* map all content of our object */}
                  {finded_blog?.content.map((e: content_type, index: number) => (
                    <div style={{ order: e.order }} key={index}>
                      <Regular_content_component
                        class="every-article-content"
                        text={e.text}
                      />
                    </div>
                  ))}

                  {/* show video of every article page */}
                  {finded_blog && finded_blog.video && (
                    <Regular_video_component
                      order={finded_blog?.video.order}
                      src={finded_blog?.video.url}
                      class="every-article-video"
                      poster={finded_blog?.video.urlImg}
                    />
                  )}
                </div>
              </section>

              <section>
                {/* show related article */}
                <div className="container">
                  <Related_articles
                    itemsPerPage={3}
                    main_pagination_class="d-none"
                    elected_object={elected_Blog_object}
                  />
                </div>
              </section>

              <section>
                {/* show 5 related videos */}
                <div className="container">
                  <See_section_every_article videos={first5Videos} />
                </div>
              </section>
            </main>
            {/* this is a footer  */}
            <Main_footer />
          </body>
        </html>
      )}
    </>
  );
};

export default Each_Article;
