"use client";
import { State_context } from "@/hooks/Context";
import { useContext, useState } from "react";
import Regular_image_component from "./images";
import { Regular_div_title_component } from "./titles";
import Regular_content_component from "./content";
import { showLimitedCharacter } from "./relatedarticle";
import { ArrowLeft } from "react-bootstrap-icons";
import { Map_type, Stone_type } from "@/api/api";
import Link from "../../node_modules/next/link";

function Main_search_filter() {
  // Access state from context and get values that we need
  const total: any[] = useContext(State_context);
  const Stone: Stone_type[] = total[1];
  const Map_Image: Map_type[] = total[8];

  // State for active map and search query
  const [active, set_active] = useState<number>(1); // Initially show Iran map
  const [search, set_search] = useState<string>("");

  // Filter stones based on search query
  const filteredStones: Stone_type[] = Stone.filter(
    (stone: Stone_type) => stone.title === search
  );

  const handle_filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    set_search(e.target.value); // Update search query on input change
  };

  // we find related map of every stone base on their names
  const find_map: Map_type | undefined = Map_Image.find((e: Map_type) => {
    return e.title === search;
  });

  // this case is also find map of default stone
  const find_default_map: Map_type | undefined = Map_Image.find(
    (e: Map_type) => {
      return e.title === Stone[0].title;
    }
  );

  return (
    // this is container for mine section of index
    <div className="main-mine-layout mb-5 container">
      <div className="main-search-index">
        <input
          type="text"
          placeholder=" معادن سنگ مورد نظر خود را پیدا کنید"
          className="input"
          value={search}
          onChange={handle_filter}
        />
        {/* Dropdown for search suggestions */}
        <div className="main-drop-down">
          {/* Display suggestions that start with the search value */}
          {Stone.filter((stone: Stone_type) => {
            const searchvalue: string = search.toLocaleLowerCase();
            const title: string = stone.title.toLocaleLowerCase();
            // Check for equivalent words using a mapping
            const equivalentWords: any = {
              آ: "ا",
              اِ: "ا",
              اُ: "ا",
              اَ: "ا",
              // ا: "ا",
              // Add more equivalent words as needed
            };

            const normalizedSearchValue: any =
              equivalentWords[searchvalue] || searchvalue;

            return (
              normalizedSearchValue && title.includes(normalizedSearchValue)
            );
          }).map(
            (stone: Stone_type) =>
              !(search === stone.title) && (
                <div
                  key={stone.title}
                  onClick={() => set_search(stone.title)}
                  className="item"
                >
                  {stone.title}
                </div>
              )
          )}
        </div>
        {/* this map run when we found related result in search  */}
        {filteredStones.length > 0 && (
          <div className="filtered-content">
            {filteredStones.map((stone: Stone_type, index: number) => (
              <>
                <Regular_div_title_component
                  class="mine-title"
                  title={stone.title}
                />
                <Regular_content_component
                  class="mine-content"
                  text={showLimitedCharacter(stone.content[0]?.text, 300)}
                >
                  <Link href={`Stone/${stone.url}`}>
                    بیشتر بخوانید <ArrowLeft />
                  </Link>
                </Regular_content_component>
                <div className="mine-images">
                  <Regular_image_component
                    src={stone.mapimages[0]?.url}
                    alt={stone.mapimages[0]?.alt ? stone.mapimages[0]?.alt : ""}
                  />
                  <Regular_image_component
                    src={stone.mapimages[1]?.url}
                    alt={stone.mapimages[1]?.alt ? stone.mapimages[1]?.alt : ""}
                  />
                  <Regular_image_component
                    src={stone.mapimages[2]?.url}
                    alt={stone.mapimages[2]?.alt ? stone.mapimages[2]?.alt : ""}
                  />
                </div>
              </>
            ))}
          </div>
        )}
        {/* Render default content if no search results are found */}
        {filteredStones.length === 0 && (
          <div className="filtered-content">
            {/* Display title of the first stone as default */}
            <Regular_div_title_component
              class="mine-title"
              title={Stone[0].title}
            />
            {/* Render limited content from the first stone */}
            <Regular_content_component
              class="mine-content"
              text={showLimitedCharacter(Stone[0].content[0]?.text, 300)}
            >
              {/* Link to the first stone's page */}
              <Link  href={`Stone/${Stone[0].id}`}>
                بیشتر بخوانید <ArrowLeft />
              </Link>
            </Regular_content_component>
            {/* Display up to 3 images from the first stone */}
            <div className="mine-images">
              {Stone[0].mapimages[0]?.alt &&
                Stone[0].mapimages[1]?.alt &&
                Stone[0].mapimages[2]?.alt && (
                  <>
                    <Regular_image_component
                      src={Stone[0].mapimages[0]?.url}
                      alt={Stone[0].mapimages[0]?.alt}
                    />
                    <Regular_image_component
                      src={Stone[0].mapimages[1]?.url}
                      alt={Stone[0].mapimages[1]?.alt}
                    />
                    <Regular_image_component
                      src={Stone[0].mapimages[2]?.url}
                      alt={Stone[0].mapimages[2]?.alt}
                    />
                  </>
                )}
            </div>
          </div>
        )}
      </div>
      <div className="main-map-layout">
        {/* Map layout section container */}

        <div className="layout-top">
          {/* Map button container */}

          {/* Map button for Iran */}
          <div
            onClick={() => set_active(1)}
            className={active === 1 ? "map-btn-active" : "map-btn"}
          >
            نقشه ایران
          </div>

          {/* Map button for the world */}
          <div
            onClick={() => set_active(2)}
            className={active === 2 ? "map-btn-active" : "map-btn"}
          >
            نقشه جهان
          </div>
        </div>

        {/* this section is for images of mine in iran and world */}
        <div className="layout-bottom">
          {/* this map images of search input  */}
          {find_map
            ? find_map?.irimage.alt &&
              find_map?.woimage.alt && (
                <>
                  {active === 1 && (
                    <Regular_image_component
                      src={find_map?.irimage.url}
                      alt={find_map?.irimage.alt}
                    />
                  )}
                  {active === 2 && (
                    <Regular_image_component
                      src={find_map?.woimage.url}
                      alt={find_map?.woimage.alt}
                    />
                  )}
                </>
              )
            : find_default_map?.irimage.alt &&
              find_default_map?.woimage.alt && (
                // this map images of default value
                <>
                  {active === 1 && (
                    <Regular_image_component
                      src={find_default_map?.irimage.url}
                      alt={find_default_map?.irimage.alt}
                    />
                  )}
                  {active === 2 && (
                    <Regular_image_component
                      src={find_default_map?.woimage.url}
                      alt={find_default_map?.woimage.alt}
                    />
                  )}
                </>
              )}
        </div>
      </div>
    </div>
  );
}

export default Main_search_filter;
