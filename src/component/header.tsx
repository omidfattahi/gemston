"use client";
import { List, XLg } from "react-bootstrap-icons";
import "./../../public/styles/header.scss";
import Regular_image_component from "./images";
import { Regular_div_title_component } from "./titles";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "react-bootstrap/Navbar";
import Main_whole_search from "./whole-search";
import Link from "../../node_modules/next/link";

function Main_header() {
  const [position, setPosition] = useState<number>(
    typeof window !== "undefined" ? window.pageYOffset : 0
  );
  const [visible, setVisible] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving: number = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const self_scroll: string = visible ? "visible" : "hidden";
  const [menuclick, setmenuclick] = useState<boolean>(false);
  const [language, set_language] = useState<boolean>(true);
  const path = usePathname();

  return (
    <header>
      {/* contain whole header */}
      <div className={`${self_scroll} main-header-scroll`}>
        {/* pu it in bootstrap navbar */}
        <Navbar expand="lg" className="navbar-settings">
          {/* top part of header  */}
          <div className="collapse-top">
            {/* logo for not responsive header */}
            <Navbar.Brand className="d-flex d-lg-none collapse-title" href="#">
              <Link  href="/">
                <Regular_image_component
                  src="/assets/photo/lithos_logo.png"
                  alt="لیتوس جم"
                  class="d-flex d-lg-none"
                />
              </Link>
            </Navbar.Brand>
            {/* collapse button also change icon as we want */}
            <Navbar.Toggle
              bsPrefix="collapse-btn"
              onClick={() => {
                setmenuclick(!menuclick);
              }}
            >
              {menuclick ? (
                <XLg className="self-collapse-btn" size={25} />
              ) : (
                <List className="self-collapse-btn" size={25} />
              )}
            </Navbar.Toggle>
          </div>
          {/* collapse header */}
          <Navbar.Collapse>
            {/* main layout header in responsive */}
            <div className="main-header-layout">
              {/* right part header */}
              <div className="part-right">
                <Link  href="/">
                  <Regular_image_component
                    src="/assets/photo/lithos_logo.png"
                    alt="لیتوس جم"
                    class="d-none d-lg-flex"
                  />
                </Link>
              </div>
              {/* middle part header */}
              <div className="part-middle">
                <Main_whole_search />
                <div className="main-header-item">
                  <Link  href="/">
                    <Regular_div_title_component
                      class={path === "/" ? "active-menu" : ""}
                      title=" خانه "
                    />
                  </Link>
                  <Link  href="/Stone">
                    <Regular_div_title_component
                      class={path === "/Stone" ? "active-menu" : ""}
                      title=" گوهر سنگ "
                    />
                  </Link>
                  <Link  href="/Blog">
                    <Regular_div_title_component
                      class={path === "/Blog" ? "active-menu" : ""}
                      title=" مقالات "
                    />
                  </Link>
                  <Link  href="/Gallery">
                    <Regular_div_title_component
                      class={path === "/Gallery" ? "active-menu" : ""}
                      title=" گالری ویدیو "
                    />
                  </Link>
                  <Link  href="/Aboutus">
                    <Regular_div_title_component
                      class={path === "/Aboutus" ? "active-menu" : ""}
                      title=" ارتباط با ما "
                    />
                  </Link>
                  <Link  href="/faq">
                    <Regular_div_title_component
                      class={path === "/faq" ? "active-menu" : ""}
                      title=" سوالات متداول "
                    />
                  </Link>
                </div>
              </div>
              {/* left part header */}
              <div className="part-left">
                <div
                  onMouseLeave={() => set_language(true)}
                  className="alt-part-left"
                >
                  <div
                    onClick={() => set_language(!language)}
                    onMouseOver={() => set_language(false)}
                    className="title"
                  >
                    انتخاب زبان
                  </div>
                  {!language && (
                    <>
                      <div className="fill-empty"></div>
                      <div className="main-content">
                        <div className="farsi">FA</div>
                        <div className="english">EN</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {/* because of header fixed position all page content goes under header we fixed this with margin by this div  */}
      <div className="margin-bottom-distance"></div>
    </header>
  );
}

export default Main_header;
