"use client";
import Regular_image_component from "@/component/images";
import "./../../../public/styles/All-stone.scss";
import { useContext, useEffect, useState } from "react";
import { State_context } from "@/hooks/Context";
import Main_accordion from "@/component/accordion";
import Main_price_aside from "@/component/price-aside";
import Related_stone from "@/component/relatedstone";
import { FilterSquare } from "../../../node_modules/react-bootstrap-icons/dist/index";
import {
  Search_filter_sidebar_color_type,
  Stone_table_type,
  Stone_type,
} from "@/api/api";
import Main_header from "@/component/header";
import Main_footer from "@/component/footer";

function All_stone() {
  // we use this usestate for hydration
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // with const te.altotal we get whole data from api
  const total: any[] = useContext(State_context);

  // by total we get the data of Stone
  const Stone: Stone_type[] = total[1];

  // by total we get the data of Stone_table
  const Stone_table: Stone_table_type[] = total[2];

  // by total we get the data of Filter
  const Filter: Search_filter_sidebar_color_type[] = total[3];

  // this usestate is use for price input define default check for input
  const [selectedOption, setSelectedOption] = useState<number>(1);

  // this usestate use for check input of color_input
  const [color_filter, Set_color_filter] = useState<string>("همه");

  // this usestate use for show the number of hardness range
  const [count, Setcount] = useState<number>(3);

  // this usestate use for  filter our stone base on thier price
  const [sort_filter, set_sort_filter] = useState<number>(1);

  // this usestate is use to filter stone base on price
  const [price_filter, set_price_filter] = useState<null | number>(null);

  // this usestate is use to show harness or hide it
  const [hardness, set_hardness] = useState<boolean>(false);

  // this function is use for change the check input base on our click
  const handle_option = (e: number) => {
    setSelectedOption(e);
  };

  // this function is use to change check of input base on click
  const handle_filter_color = (e: string) => {
    Set_color_filter(e);
  };

  // with this function we change the display of hardness part
  const handle_hardness = () => {
    set_hardness((prevState: boolean) => !prevState);
  };

  // this function use to store new data in our count usestate
  const handlecount = (e: any) => {
    Setcount(e.target.value);
  };

  // this function is use to change the filter between prices
  const handle_sort_filter = (e: number) => {
    set_sort_filter(e);
  };

  // this function is use to change the filter of price  base on user click
  const hanle_price_filter = (e: number | null) => {
    set_price_filter(e);
  };

  // with this variable we can get our stones after multiple filtering
  let filteredStones: Stone_type[] = [];

  // this function has some inputes
  // stones is the whole data of our stones
  // mainfilter is top four button to change the order of our stones
  // secondaryFilter is for price filter of our stones
  //count is use for filter stones base on range input
  // color_filter is use for filter stones base on color of input
  const filterData = (
    stones: Stone_type[],
    mainFilter: number,
    secondaryFilter: null | number,
    count: number,
    color_filter: string
  ) => {
    // stored all stones in filteredStones
    filteredStones = [...stones];

    if (mainFilter === 1) {
      // here we just reverse the stones to show stones from last to first
      filteredStones = filteredStones.reverse();
    }
    if (mainFilter === 2) {
      const sortByPopularityAndIndex: any = (a: Stone_type, b: Stone_type) => {
        // This function creates a custom comparison function that sorts the 'Stone' array by popularity and then by index.

        if (a.popularity > b.popularity) {
          return -1; // If the popularity of 'a' is greater than the popularity of 'b', return -1.
        } else if (a.popularity < b.popularity) {
          return 1; // If the popularity of 'a' is less than the popularity of 'b', return 1.
        } else {
          return -1; // If the popularity of 'a' is equal to the popularity of 'b', return -1.
        }
      };

      const sortedStonesCopy: Stone_type[] = [...Stone].sort(
        sortByPopularityAndIndex
      ); // This line creates a copy of the 'Stone' array and sorts it using the 'sortByPopularityAndIndex' function.

      filteredStones = sortedStonesCopy; // This line assigns the sorted copy of the 'Stone' array to the 'filteredStones' variable.
    }
    if (mainFilter === 3) {
      const rareStones: Stone_type[] = Stone.filter((stoneItem: Stone_type) => {
        // This line filters the 'Stone' array to only include items that are considered rare.
        // It does this by using the 'find' method of the 'Stone_table' object to check if the 'rare' property of the corresponding item in the 'Stone_table' is true.

        const aa: Stone_table_type | undefined = Stone_table.find(
          (gemTableItem: Stone_table_type) => {
            return gemTableItem.id === stoneItem.id;
          }
        );
        return aa?.rare; // This line returns true if the item is considered rare, and false otherwise.
      });

      const nonRareStones: Stone_type[] = Stone.filter(
        (stoneItem: Stone_type) => {
          // This line filters the 'Stone' array to only include items that are not considered rare.
          // It does this by using the same logic as the previous filter, but checking if the 'rare' property is false instead of true.

          const bb: Stone_table_type | undefined = Stone_table.find(
            (gemTableItem: Stone_table_type) => {
              return gemTableItem.id === stoneItem.id;
            }
          );
          return !bb?.rare;
        }
      );

      const reversedRareStones: Stone_type[] = rareStones.reverse(); // This line reverses the order of the 'rareStones' array.
      const reversedNonRareStones: Stone_type[] = nonRareStones.reverse(); // This line reverses the order of the 'nonRareStones' array.

      filteredStones = [...reversedRareStones, ...reversedNonRareStones]; // This line combines the reversed 'rareStones' and 'nonRareStones' arrays into a single array, maintaining the original order within each category.
    }
    if (mainFilter === 4) {
      const sortByPersianAlphabet: any = (a: Stone_type, b: Stone_type) => {
        // This function defines a custom comparison function that sorts the 'Stone' array based on their Persian titles.

        const persianStringA: string = a.title
          .normalize("NFD") // This method converts the title to a Unicode Normalization Form (NFD) to remove any diacritics.
          .replace(
            // This regular expression removes all characters that are not part of the Persian alphabet.
            /[\u0617-\u061A\u064A-\u064F\u0670-\u0672\u06D6-\u06DC\u06D8\u06DF-\u06E4\u06EB-\u06EF]/g,
            ""
          );

        const persianStringB: string = b.title
          .normalize("NFD")
          .replace(
            /[\u0617-\u061A\u064A-\u064F\u0670-\u0672\u06D6-\u06DC\u06D8\u06DF-\u06E4\u06EB-\u06EF]/g,
            ""
          );

        if (persianStringA < persianStringB) {
          return -1; // If the normalized Persian title of 'a' is less than the normalized Persian title of 'b', return -1.
        } else if (persianStringA > persianStringB) {
          return 1; // If the normalized Persian title of 'a' is greater than the normalized Persian title of 'b', return 1.
        } else {
          return -1; // If the normalized Persian titles of 'a' and 'b' are equal, return -1.
        }
      };

      const sortedStonesByPersianAlphabet: Stone_type[] = filteredStones.sort(
        sortByPersianAlphabet
      );
      filteredStones = sortedStonesByPersianAlphabet; // This line sorts the 'filteredStones' array using the 'sortByPersianAlphabet' function.
    }

    if (secondaryFilter) {
      filteredStones = filteredStones.filter((stone: Stone_type) => {
        // This line filters the 'filteredStones' array to only include items that match the specified secondary filter.
        // The secondary filter is represented by the 'secondaryFilter' variable, which is assumed to be a price value.

        const gemTableItem: Stone_table_type | undefined = Stone_table.find(
          (gem: Stone_table_type) => {
            return gem.id === stone.id; // This line retrieves the corresponding item from the 'Stone_table' object based on the 'stone.id'.
          }
        );

        return gemTableItem?.price === secondaryFilter; // This line checks if the price of the corresponding item in the 'Stone_table' matches the 'secondaryFilter' value.
        // If it does, the item is included in the filtered array. Otherwise, it is excluded.
      });
    }

    if (hardness === false) {
      if (count > 0) {
        // This line checks if the 'count' variable is greater than 0. If it is, it proceeds to filter the 'filteredStones' array based on the hardness property.

        filteredStones = filteredStones.filter((stone: Stone_type) => {
          const gemTableItem: Stone_table_type | undefined = Stone_table.find(
            (gem: Stone_table_type) => {
              return gem.id === stone.id; // This line retrieves the corresponding item from the 'Stone_table' object based on the 'stone.id'.
            }
          );

          return gemTableItem?.hardness ? gemTableItem?.hardness >= 0 : ""; // This line checks if the hardness of the corresponding item in the 'Stone_table' is greater than or equal to 0.
          // If it is, the item is included in the filtered array. Otherwise, it is excluded.
        });
      }
    }
    if (hardness === true) {
      if (count > 0) {
        // This line checks if the 'count' variable is greater than 0. If it is, it proceeds to filter the 'filteredStones' array based on the hardness property.

        filteredStones = filteredStones.filter((stone: Stone_type) => {
          const gemTableItem: Stone_table_type | undefined = Stone_table.find(
            (gem: Stone_table_type) => {
              // This line retrieves the corresponding item from the 'Stone_table' object based on the 'stone.id'.
              return gem.id === stone.id;
            }
          );

          return gemTableItem?.hardness ? gemTableItem?.hardness >= count : ""; // This line checks if the hardness of the corresponding item in the 'Stone_table' is greater than or equal to the 'count' value.
          // If it is, the item is included in the filtered array. Otherwise, it is excluded.
        });
      }
    }

    if (color_filter === "همه") {
      // if color_filter equal to "همه" show all stones
      return filteredStones;
    }
    if (color_filter) {
      const coloredStones: Stone_table_type[] = Stone_table.filter(
        (stone: Stone_table_type) => {
          // This line filters the 'Stone_table' array to only include stones that have a color that matches the 'color_filter' string.
          // The 'includes' method checks if the 'stone.color' string contains the 'color_filter' string.
          return stone.color.includes(color_filter);
        }
      );

      // This line creates an array of the IDs of all the colored stones.
      const coloredStonesIds: any[] = coloredStones.map(
        (stone: Stone_table_type) => stone.id
      );

      // This line filters the 'filteredStones' array to only include stones that have an ID that is also in the 'coloredStonesIds' array.
      // This ensures that the filtered array only contains stones that are both in the 'filteredStones' array and the 'coloredStones' array.
      filteredStones = filteredStones.filter((stone: any) => {
        return coloredStonesIds.some(
          (stoneId: Stone_table_type) => stoneId === stone.id
        );
      });
    }

    return filteredStones;
  };

  // this function has the filterd stones
  const filteredItems: any[] = filterData(
    Stone,
    sort_filter,
    price_filter,
    count,
    color_filter
  );

  return (
    <>
      {isClient && (
        <html dir="rtl">
          <head>
            <title> همه سنگ ها </title>
            <meta name="description" content="" />
          </head>
          <body>
            <main>
              {/* this is a header  */}
              <Main_header />

              <section>
                {/* this is banner of all stone page  */}
                <Regular_image_component
                  src="/assets/photo/all-article-banner.png"
                  alt="all-stone-page"
                />
              </section>

              <section>
                {/* this is top part of all stone page  */}
                <div className="main-layout-top">
                  {/* this is right part from top part of all stones  */}
                  <div className="main-layout-right">
                    {/* this is logo of filter  */}
                    <FilterSquare size={35} />
                    مرتب سازی
                  </div>
                  {/* this is middle part from top part of all stones  */}
                  <div className="main-layout-middle">
                    {/* this is each button of middle part they have two class base on they are active or not   */}
                    <div
                      className={
                        sort_filter === 1
                          ? "main-layout-middle-item"
                          : "main-layout-middle-item-hover"
                      }
                      onClick={() => handle_sort_filter(1)}
                    >
                      آخرین سنگ ها
                    </div>
                    <div
                      className={
                        sort_filter === 2
                          ? "main-layout-middle-item"
                          : "main-layout-middle-item-hover"
                      }
                      onClick={() => handle_sort_filter(2)}
                    >
                      محبوب ترین
                    </div>
                    <div
                      className={
                        sort_filter === 3
                          ? "main-layout-middle-item"
                          : "main-layout-middle-item-hover"
                      }
                      onClick={() => handle_sort_filter(3)}
                    >
                      کمیاب
                    </div>
                    <div
                      className={
                        sort_filter === 4
                          ? "main-layout-middle-item"
                          : "main-layout-middle-item-hover"
                      }
                      onClick={() => handle_sort_filter(4)}
                    >
                      حروف الفبا
                    </div>
                  </div>
                  {/* this is left part from top part of all stones  */}
                  <div className="main-layout-left">
                    <div className="layout-left-all-stone-number">
                      {/* this is number of all stones  */}
                      <div>{Stone.length}</div>
                      <div>سنگ</div>
                    </div>
                  </div>
                </div>
                {/* this is bottom part of all stone page  */}
                <div className="main-layout-bottom">
                  {/* this is right part of bottom part of all stones  */}
                  <div className="layout-bottom-right">
                    {/* this is title of bottom part  */}
                    <div className="bottom-right-title">فیلتر</div>
                    {/* this is content of bottom part */}
                    <div className="bottom-right-content">
                      {/* this part include three accordion for each filter */}
                      <Main_accordion text="رنگ">
                        {/* this part is for color filter */}
                        <div className="main-layout-accordion-total">
                          {/* here we mapped all color and their names  */}
                          {Filter.map(
                            (
                              e: Search_filter_sidebar_color_type,
                              index: number
                            ) => (
                              <div
                                className="main-layout-accordion-body"
                                key={index}
                              >
                                <label
                                  onClick={() => handle_filter_color(e.name)}
                                >
                                  <input
                                    type="radio"
                                    name="color-filter"
                                    checked={color_filter === e.name}
                                  />
                                  {e.name}
                                </label>
                                <div
                                  style={{
                                    backgroundColor: e.code ? e.code : "",
                                  }}
                                ></div>
                              </div>
                            )
                          )}
                        </div>
                      </Main_accordion>
                      <Main_accordion text="قیمت">
                        <div className="main-price-layout">
                          {/* here we have filter for prices  */}
                          <Main_price_aside
                            price_filter={() => hanle_price_filter(null)}
                            text=" همه "
                            handlechange={() => handle_option(1)}
                            checked={selectedOption === 1}
                          />
                          <Main_price_aside
                            price_filter={() => hanle_price_filter(3)}
                            checked={selectedOption === 2}
                            text=" قیمتی "
                            handlechange={() => handle_option(2)}
                          />
                          <Main_price_aside
                            price_filter={() => hanle_price_filter(2)}
                            checked={selectedOption === 3}
                            handlechange={() => handle_option(3)}
                            text="نیمه قیمتی"
                          />
                          <Main_price_aside
                            price_filter={() => hanle_price_filter(1)}
                            checked={selectedOption === 4}
                            handlechange={() => handle_option(4)}
                            text=" معمولی "
                          />
                        </div>
                      </Main_accordion>
                      <Main_accordion text="سختی">
                        {/* here we have filter for hardness  */}
                        <div className="main-hardness-input">
                          <div
                            className="main-hardness-text-cover"
                            onClick={handle_hardness}
                          >
                            {/* in here we show or hide range input base on input check or not   */}
                            {hardness ? (
                              <div className="main-hardness-text">
                                <div className="show"></div>مخفی کردن سختی
                              </div>
                            ) : (
                              <div className="main-hardness-text">
                                <div className="hide"></div> نمایش سختی
                              </div>
                            )}
                          </div>
                          <input
                            className={
                              hardness
                                ? "aside-range-hardness-opacity"
                                : "aside-range-hardness"
                            }
                            type="range"
                            min={0}
                            max={10}
                            step={1}
                            value={count}
                            onChange={handlecount}
                            disabled={!hardness}
                          />
                          <div
                            className={
                              hardness
                                ? "aside-range-hardness-opacity"
                                : "aside-range-hardness"
                            }
                          >
                            <div className="main-range-number">
                              <div className="range-part1">0</div>
                              <div className="range-part2">{count}</div>
                              <div className="range-part3">10</div>
                            </div>
                          </div>
                        </div>
                      </Main_accordion>
                    </div>
                  </div>
                  <div className="layout-bottom-left">
                    {/* this is left part of bottom part of all stones  */}
                    {/* we show all filtered stones here and send props for custom design  */}
                    <Related_stone
                      self_class="self-every-stone-design"
                      main_class="main-all-page-layout-stones"
                      elected_object={filteredStones}
                      itemsPerPage={21}
                      main_pagination_class="pagination-container"
                    />
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
}

export default All_stone;
