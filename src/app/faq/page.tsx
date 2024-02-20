"use client";
import { useContext, useState, useEffect } from "react";
import { State_context } from "@/hooks/Context";
import Main_accordion from "@/component/accordion";
import "../../../public/styles/q&a.scss";
import "../../../public/assets/photo/form.png";
import Main_header from "@/component/header";
import Main_footer from "@/component/footer";
import { Blog_type, Qa_type, Question_type } from "@/api/api";
import Regular_h1_title_component, {
  Regular_div_title_component,
  Regular_h2_title_component,
  Regular_h3_title_component,
} from "@/component/titles";
import Regular_content_component from "@/component/content";
import Main_input_part from "@/component/input-section";
import Link from "../../../node_modules/next/link";

const Questions = () => {
  // we use this usestate for hydration
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // put blog ond faq object in a variable
  const total: any[] = useContext(State_context);
  const faq: Question_type[] = total[5];
  const Blog: Blog_type[] = total[0];

  const blog_categories: any = {};
  // map blog object to obtain their title and id to show the title of the article of each category
  Blog.map((article: Blog_type) => {
    const {
      url,
      title,
      categories,
    }: { url: string; title: string; categories: string[] } = article;

    for (const category of categories) {
      if (!blog_categories.hasOwnProperty(category)) {
        blog_categories[category] = [];
      }

      blog_categories[category].push({ url, title });
    }
  });
  //a refresh prevelance function for form when we submit it
  const handlesubmit = (event: any) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <>
      {isClient && (
        <html dir="rtl">
          <head>
            {/* show title of the page and metadescription00 */}
            <title>سوالات متداول</title>
            <meta name="description" content="" />
          </head>
          <body>
            {/* this is a header  */}
            <Main_header />
            <main>
              <div className="main-layout pt-3">
                <section>
                  {/* show title of page */}
                  <Regular_h1_title_component
                    title={faq[0]?.title}
                    class="d-flex justify-content-center "
                  />
                </section>

                <section>
                  <div className="main-qa-layout">
                    <div className="qa-question">
                      {/* creates accordion of question and answer section and show their texts by mapping faq object */}
                      {faq[0]?.QA.map((e: Qa_type) => (
                        <>
                          <Main_accordion text={e.question}>
                            <div className="accordion-inner-answer">
                              {e.answer}
                            </div>
                          </Main_accordion>
                        </>
                      ))}
                    </div>

                    <div className="sidebar">
                      <Regular_h2_title_component
                        class="d-flex justify-content-center"
                        title="مقالات مرتبط"
                      />
                      {/* show categories and their related aticle's titles by mapping the previous blog_categories variable we created at the above */}
                      {Object.keys(blog_categories).map((category) => (
                        <div key={category}>
                          <div className="category-title-sidebar">
                            {category}
                          </div>
                          <div className="every-item">
                            {blog_categories[category]
                              .slice(-3)
                              .reverse()
                              .map((articleData: any) => (
                                <>
                                  <Link
                                    href={`/Blog/${articleData.url}`}
                                    className="self-item"
                                  >
                                    {articleData.title}
                                  </Link>
                                </>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section>
                  <div className="main-form-question">
                    <Regular_h3_title_component
                      class="d-flex justify-content-center"
                      title=" فرم ثبت سوال "
                    />
                    <Regular_content_component
                      class="content"
                      text="جهت هر گونه سوالات ، پیشنهادات و راهنمایی بیشتر می توانید
                      فرم ثبت سوال را تکمیل کنید.."
                    />

                    <form className="main-form" onSubmit={handlesubmit}>
                      <Main_input_part
                        layout_class="layout"
                        input_class="input"
                        type="email"
                        label="ایمیل"
                      />
                      <Main_input_part
                        layout_class="layout"
                        input_class="input"
                        type="text"
                        label="عنوان درخواست"
                      />
                      <label className="label">
                        شرح درخواست
                        <textarea className="textarea" />
                      </label>
                      <button>ثبت</button>
                    </form>
                  </div>
                </section>
              </div>
            </main>
            {/* this is a footer  */}
            <Main_footer />
          </body>
        </html>
      )}
    </>
  );
};

export default Questions;
