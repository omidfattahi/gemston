"use client";
import { useContext, useEffect, useState } from "react";
import { State_context } from "@/hooks/Context";
import Regular_h1_title_component, {
  Regular_div_title_component,
} from "@/component/titles";
import "../../../../public/styles/stone.scss";
import Regular_image_component from "@/component/images";
import Regular_audio_component from "@/component/audio";
import Regular_content_component from "@/component/content";
import Regular_video_component from "@/component/video";
import Stone_table from "@/component/table";
import Stone_booresh from "@/component/booresh";
import Related_articles from "@/component/relatedarticle";
import Related_stone from "@/component/relatedstone";
import Main_header from "@/component/header";
import Main_footer from "@/component/footer";
import NotFoundPage from "@/app/not-found";
import { Assets_type, Blog_type, Stone_type, content_type } from "@/api/api";
import { Mic } from "../../../../node_modules/react-bootstrap-icons/dist/index";
import Link from "../../../../node_modules/next/link";
import { useParams } from "../../../../node_modules/next/navigation";

// this function play audio it recives the id of our audio tag then by giving this function to other tag it will do this function
export function playAudio(id: string) {
  const audio = document.getElementById(id) as HTMLAudioElement;
  audio.play();
}

const Each_Stone = () => {
  // we use this usestate for hydration
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // find the object of current page
  const total: any[] = useContext(State_context);
  const Stone: Stone_type[] = total[1];
  const { id } = useParams<{ id: string }>();
  const finded_stone: Stone_type | undefined = Stone.find(
    (e: Stone_type) => e.url === id
  );

  // define usestate for mapimages to change the image
  const [imageUrl, setImageUrl] = useState<{ src: string; alt: string }>({
    src: "",
    alt: "",
  });

  // change the src and alt of image by running this function
  const handleImageClick = (url: string, alt: string) => {
    setImageUrl({ src: url, alt: alt });
  };

  // we use this code because it takes some times to get image from api and put it in usestate and we got errors because page load faster than our images so we recive it with useeffect to prevent this
  useEffect(() => {
    if (
      finded_stone &&
      finded_stone.mapimages &&
      finded_stone.mapimages.length > 0
    ) {
      setImageUrl({
        src: finded_stone.mapimages[0].url,
        alt: finded_stone.mapimages[0].alt || "",
      });
    }
  }, [finded_stone]);

  // define variable for blog and recive blog from context
  let elected_Blog_object: any;
  const Blog: Blog_type[] = total[0];

  //if it exist
  if (finded_stone && Stone.length > 0) {
    const selectedObject: Stone_type = finded_stone;

    // find blogs object that have same category with current stone
    const otherObjectsWithSameCategory: Blog_type[] = Blog.filter(
      (object: Blog_type) => {
        return object.categories.some((category: string) =>
          selectedObject.categories.includes(category)
        );
      }
    ).reverse();

    // find blogs object that dont have same category with current stone
    const otherCategoriesarticle: Blog_type[] = Blog.filter(
      (object: Blog_type) => {
        return !object.categories.some((category: string) =>
          finded_stone.categories.includes(category)
        );
      }
    ).reverse();

    // we show 3 related article we use same category then if it wasnt reach to 3 we use other category
    const allobject: Blog_type[] = [
      ...otherObjectsWithSameCategory,
      ...otherCategoriesarticle,
    ];
    elected_Blog_object = allobject
      .filter((object: Blog_type) => object.id !== id)
      .slice(0, 3);
  }

  // define filter variable for stone
  let elected_Stone_object: Stone_type[] = [];

  //if it exist
  if (finded_stone && Stone.length > 0) {
    const selectedObject: Stone_type = finded_stone;

    // find stones with same categories
    const otherObjectsWithSameCategory: Stone_type[] = Stone.filter(
      (object: Stone_type) => {
        return object.categories.some((category: string) =>
          selectedObject.categories.includes(category)
        );
      }
    ).reverse();

    // find stones with other categories
    const otherCategoriesarticle: Stone_type[] = Stone.filter(
      (object: Stone_type) => {
        return !object.categories.some((category: string) =>
          finded_stone.categories.includes(category)
        );
      }
    ).reverse();

    // we show 5 related stones we use same category then if it wasnt reach to 5 we use other category
    const allobject: Stone_type[] = [
      ...otherObjectsWithSameCategory,
      ...otherCategoriesarticle,
    ];
    elected_Stone_object = allobject
      .filter((object: Stone_type) => object.id !== finded_stone.id)
      .slice(0, 5);
  }

  // This code can be used to check if a blog post was found by a search query. If the blog post was not found, the code will return a <NotFoundPage/> component.
  if (!finded_stone) {
    return <NotFoundPage />;
  }

  return (
    <>
      {isClient && (
        <html dir="rtl">
          <head>
            <title>{finded_stone?.title}</title>
            <meta name="description" content={finded_stone?.metaDescription} />
          </head>
          <body>
            {/* this is header */}
            <Main_header />
            <main>
              <section>
                {finded_stone && (
                  <div className="main-top-stone-layout ">
                    {/* show sound icon to onclick on this icon sound play */}
                    <Mic
                      size={30}
                      onClick={() => playAudio("stoneaudio")}
                      className="stone-name-style "
                    />

                    {/* title for every article page */}
                    <Regular_h1_title_component
                      title={finded_stone.title}
                      class=" mt-3"
                    />
                  </div>
                )}

                {/* sound for every stone */}
                {finded_stone && finded_stone.sound && (
                  <Regular_audio_component
                    class="d-none"
                    id="stoneaudio"
                    src={finded_stone?.sound?.url}
                  />
                )}
              </section>

              <section>
                {/* map all image of mapimages of every stone page  */}
                <div className="main-section-zoom-images-stone">
                  <div className="zoom-images-part-right">
                    {finded_stone?.mapimages.map(
                      (e: Assets_type, index: number) => (
                        <>
                          <Regular_image_component
                            class="self-map-image"
                            onclick={() =>
                              handleImageClick(e.url, e.alt as string)
                            }
                            onmouseover={() =>
                              handleImageClick(e.url, e.alt as string)
                            }
                            src={e.url}
                            alt={e.alt as string}
                          />
                        </>
                      )
                    )}
                  </div>
                  {/* this is a big image of mapimages with onclick or onmouseover will change the src and alt by usestate  */}
                  <div className="zoom-images-part-left">
                    <Regular_image_component
                      class="self-map-image"
                      src={imageUrl?.src}
                      alt={imageUrl?.alt}
                    />
                  </div>
                </div>
              </section>

              <section>
                {/* this div  content can be change by order  */}
                <div className="main-every-stone-page-layout container">
                  {/* map all content images of object */}
                  {finded_stone?.images.map((e: Assets_type, index: number) => (
                    <div
                      className="every-stone-image"
                      key={e.id}
                      style={{ order: e.order ? e.order : "" }}
                    >
                      <Regular_image_component
                        src={e.url}
                        alt={e.alt ? e.alt : ""}
                      />
                    </div>
                  ))}

                  {/* map all content of our object */}
                  {finded_stone?.content.map(
                    (e: content_type, index: number) => (
                      <div style={{ order: e.order }} key={index}>
                        <Regular_content_component
                          class="content-style-stone"
                          text={e.text}
                        />
                      </div>
                    )
                  )}

                  {/* show video of every stone page */}
                  {finded_stone && finded_stone.video && (
                    <Regular_video_component
                      order={finded_stone.video.order}
                      src={finded_stone.video.url}
                      class="every-stone-video"
                      poster={finded_stone.video.urlImg}
                    />
                  )}

                  {/* podcast for every stone */}
                  {finded_stone && finded_stone.sound && (
                    <div
                      style={{ order: finded_stone?.podcast?.order ?? 0 }}
                      className="every-stone-audio"
                    >
                      <Regular_audio_component
                        src={finded_stone?.podcast?.url}
                      />
                    </div>
                  )}

                  {/* show table of every stone page  */}
                  <Stone_table />

                  {/* show booresh images of every stone page  */}
                  <Stone_booresh finded_stone={finded_stone} />
                </div>
              </section>

              <section>
                {/* show related stones  */}
                <Related_stone
                  self_class="self-all-stone-cover"
                  main_class="container main-all-stone-cover"
                  elected_object={elected_Stone_object}
                  itemsPerPage={12}
                  main_pagination_class="d-none"
                />
                <div className="main-btn-related-stone d-flex justifycontent-center">
                  <Link
                    className="default-link related-stone-btn"
                    href="http://localhost:3000/Stone"
                  >
                    لیست گوهر سنگ ها
                  </Link>
                </div>
              </section>

              <section>
                {/* show title of related article in stone page  */}
                <Regular_div_title_component
                  class="related-article-stone-page-title"
                  title="آیا می دانید ؟"
                />
                {/* sho related article in every stone page  */}
                <div className="container mx-auto related-article-stone-page">
                  <Related_articles
                    elected_object={elected_Blog_object}
                    itemsPerPage={3}
                    main_pagination_class="d-none"
                  />
                </div>
              </section>
            </main>
            {/* this is footer */}
            <Main_footer />
          </body>
        </html>
      )}
    </>
  );
};

export default Each_Stone;
