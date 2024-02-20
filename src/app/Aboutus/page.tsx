"use client";
import Regular_image_component from "@/component/images";
import { useContext, useEffect, useState } from "react";
import { State_context } from "@/hooks/Context";
import "../../../public/styles/about-us.scss";
import Regular_h1_title_component, {
  Regular_div_title_component,
  Regular_h2_title_component,
  Regular_h3_title_component,
} from "@/component/titles";
import Main_header from "@/component/header";
import Main_footer from "@/component/footer";
import { ContactUs_type, Person_type, Socialmedia } from "@/api/api";
import Regular_content_component from "@/component/content";
import Link from "../../../node_modules/next/link";

const About_us = () => {
  // access about us data
  const total: any[] = useContext(State_context);
  const About: ContactUs_type[] = total[4];
  // we use this usestate for hydration
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <html dir="rtl">
          <head>
            {/* show title and metadescription of the page */}
            <title>درباره ما</title>
            <meta content={About[0]?.metaDescription} />
          </head>
          <body>
            {/* this is a header  */}
            <Main_header />
            <main>
              <section>
                {/* banner of the page */}
                <Regular_image_component
                  src="/assets/photo/aboutus-banner.png"
                  alt="about-us"
                />
              </section>

              <section>
                <div className="container">
                  {/* title of the page */}
                  <Regular_h1_title_component
                    class="d-flex justify-content-center mt-2"
                    title={About[0]?.title}
                  />

                  {/* content of the page */}
                  <Regular_content_component
                    text={About[0]?.content}
                    class="content"
                  />
                </div>
              </section>

              <section>
                <Regular_h2_title_component
                  class="d-flex justify-content-center container"
                  title="تیم ما"
                />
                <div className="person-main-section container">
                  {/* map image and contents of person section from our object */}
                  {About[0]?.person.map((e: Person_type) => (
                    <>
                      <div
                        className="person-inner-section"
                        style={{ order: e.order ? e.order : "" }}
                      >
                        <Regular_image_component src={e.url} alt={e.alt} />
                        <Regular_div_title_component
                          title={e.name}
                          class="person-name-title"
                        />
                        <p className="text">{e.text}</p>
                        <div className="d-flex justify-content-center">
                          <button>Go somewhere</button>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </section>

              <section>
                {/* title for contact us section */}
                <Regular_h3_title_component
                  title="تماس با ما"
                  class="d-flex justify-content-center mt-3"
                />

                <div className="contact-us-section container">
                  <div className="data-section">
                    {/* contact us section which show address,email,map and ... */}
                    <div className="address">
                      آدرس: {About[0]?.contactinfo[0].addresstext}
                    </div>

                    <div>
                      {/* showing email address */}
                      <Link
                        href={`mailto:${About[0]?.contactinfo[0].emailtext}`}
                        className="email-phone-section"
                      >
                        ایمیل: {About[0]?.contactinfo[0].emailtext}
                      </Link>
                    </div>

                    <div className="mt-2">
                      {/* showing phone number */}
                      <Link
                        href={`tel:${About[0]?.contactinfo[0].phonetext}`}
                        className="email-phone-section"
                      >
                        تلفن: {About[0]?.contactinfo[0].phonetext}
                      </Link>
                    </div>
                    {/* map socialmedia icons and links and show them */}
                    <div className="socialmedia-section">
                      {About[0].socialmedia.map((e: Socialmedia) => (
                        <>
                          <Link href={e.link}>
                            <Regular_image_component
                              src={e.url}
                              alt={e.alt}
                              class="socialmedia-icon"
                            />
                          </Link>
                        </>
                      ))}
                    </div>
                  </div>
                  {/* show map address */}
                  <div className="map-section">
                    <iframe
                      style={{ borderRadius: "5px" }}
                      src={About[0]?.mapaddress}
                      className="w-100"
                      height={300}
                      loading="lazy"
                    ></iframe>
                  </div>
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

export default About_us;
