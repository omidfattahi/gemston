"use client";
import { State_context } from "@/hooks/Context";
import { useContext, useMemo, useState } from "react";
import Regular_image_component from "./images";
import { Search } from "react-bootstrap-icons";
import { Blog_type, Stone_type } from "@/api/api";
import { useRouter } from "next/navigation";
import Link from "../../node_modules/next/link";

export interface combine_type {
  title: string;
  url: string;
  alt: string | undefined;
  id: string;
}

function Main_whole_search() {
  // Access state from context and get data that we need
  const total: any[] = useContext(State_context);
  const Blog: Blog_type[] = total[0];
  const Stone: Stone_type[] = total[1];

  // State for active map and search query
  const [search, set_search] = useState<string>("");

  // get the value of search input
  const handle_filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    set_search(e.target.value); // Update search query on input change
  };

  // we use useMemo to stop infinite rendering
  const filteredResults = useMemo(() => {
    if (!search) return [];

    // Create a combined array of results from Blog and Stone
    const combinedResults: combine_type[] = [
      ...Blog.map((blog) => ({
        title: blog.title,
        url: blog.images[0].url,
        alt: blog.images[0].alt,
        id: `/Blog/${blog.url}`,
      })),
      ...Stone.map((stone) => ({
        title: stone.title,
        url: stone.mapimages[0].url,
        alt: stone.mapimages[0].alt,
        id: `/Stone/${stone.url}`,
      })),
    ];

    // Filter results based on normalized search and titles
    return combinedResults.filter((result) => {
      const normalizedSearch: string = normalizeForEquivalents(
        search.toLowerCase()
      );
      const normalizedTitle: string = normalizeForEquivalents(
        result.title.toLowerCase()
      );
      return normalizedTitle.includes(normalizedSearch);
    });
  }, [search, Blog, Stone]);

  // Function for normalizing equivalent Arabic characters
  function normalizeForEquivalents(str: string): string {
    const equivalentChars: any = {
      آ: "ا",
      إ: "ا", // Include إ as well
      اِ: "ا",
      اُ: "ا",
      اَ: "ا",
    };

    return str.replace(/[آإاِاُاَ]/g, (char) => equivalentChars[char]);
  }

  // this help to navigate other page in function
  const router: any = useRouter();

  // this function run only when we press enter key
  const handleEnterKey = (event: any) => {
    if (event.keyCode === 13) {
      // Navigate to a search page
      router.push(`/Search/${search}`);
    }
  };

  return (
    <>
      {/* this is our input in header  */}
      <div className="search-header">
        {/* this button transfor data to search page  */}
        <Link href={`/Search/${search}`}>
          <button className="search-header-btn">
            <Search color="#bf8f46" size={20} />
          </button>
        </Link>
        {/* this is search input  */}
        <input
          onKeyDown={handleEnterKey}
          placeholder=" جستجو کنید "
          value={search}
          onChange={handle_filter}
          type="text"
          className="header-input w-100"
        />
        {/* this is dropdown seggestion for our input  */}
        <div className="dropdown">
          {/* here we map all item we need that to be shown in seggestion  */}
          {filteredResults.map((e: combine_type, index: number) => (
            <>
              {/* link for going to the destination page  */}
              <Link className="item-search" href={e.id}>
                {/* show title  */}
                <div className="title" key={index}>
                  {e.title}
                </div>
                {e.alt && (
                  // show image
                  <Regular_image_component
                    class="image"
                    src={e.url}
                    alt={e.alt}
                  />
                )}
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Main_whole_search;
