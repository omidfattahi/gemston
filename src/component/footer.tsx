// Client-side rendering directive
"use client";

import React, { useContext } from "react";
import { State_context } from "@/hooks/Context"; // Import context for data
import "../../public/styles/footer.scss"; // Import footer styles
import Regular_image_component from "./images"; // Import image component
import { Regular_div_title_component } from "./titles"; // Import title component
import { Blog_type, ContactUs_type } from "@/api/api"; // Import types for data
import Link from "../../node_modules/next/link";

// Footer component function
function Main_footer() {
  // Access data from context
  const total = useContext(State_context);
  const Blog: Blog_type[] = total[0];
  const About: ContactUs_type[] = total[4];

  return (
    <footer>
      {/* cotaining all footer part  */}
      <div className="all-contents-footer">
        {/* footer diamond image  */}
        <div className="img-div">
          <Regular_image_component
            alt="footer-diamond"
            class="footer-img"
            src="/assets/photo/footer.png"
          />
        </div>

        <div className="footer-main-container">
          {/* article part footer  */}
          <div className="text-center border-left-div">
            <Link href="/Blog"  className="footer-link-title">
              <Regular_div_title_component title="مقالات" />
            </Link>

            <div>
              {Blog.slice(-6)
                .reverse()
                .map((blogPost: any) => (
                  <>
                    <Link
                      key={blogPost.id}
                      href={`/Blog/${blogPost.url}`}
                      
                    >
                      {blogPost.title}
                    </Link>
                  </>
                ))}
            </div>
          </div>

          {/* usefull link part footer  */}
          <div className="text-center border-left-div">
            <Link href="/"  className="footer-link-title">
              <Regular_div_title_component title="لینک های مفید" />
            </Link>

            <Link href="/Gallery" >
              گالری
            </Link>

            <Link href="/Q&A" >
              سوالات متداول
            </Link>

            <Link href="/Aboutus" >
              ارتباط با ما
            </Link>

            <Link href="/Stone" >
              گوهر سنگ
            </Link>
          </div>

          {/* contact us part footer  */}
          <div className="text-center border-left-div ">
            <Link href="/Aboutus"  className="footer-link-title">
              <Regular_div_title_component title="تماس با ما" />
            </Link>

            <div className="contact-us-section-footer">
              <div>
                {/* contact us section which show address,email,map and ... */}
                <div>آدرس: {About[0]?.contactinfo[0].addresstext}</div>

                <div>
                  <Link
                    href={`mailto:${About[0]?.contactinfo[0].emailtext}`}
                    className="email-phone-section"
                  >
                    ایمیل: {About[0]?.contactinfo[0].emailtext}
                  </Link>
                </div>

                <div>
                  <Link
                    href={`tel:${About[0]?.contactinfo[0].phonetext}`}
                    className="email-phone-section"
                  >
                    تلفن: {About[0]?.contactinfo[0].phonetext}
                  </Link>
                </div>

                <div className="socialmedia">
                  {About[0].socialmedia.map((e: any) => (
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
            </div>
          </div>

          {/* logo part footer  */}
          <div className="text-center border-left-div">
            <Link href="/"  className="footer-link-title">
              <Regular_div_title_component title="لیتوس جم" />
            </Link>
            <Regular_image_component
              src="/assets/photo/lithos_logo.png"
              alt="lithos-logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Main_footer;
