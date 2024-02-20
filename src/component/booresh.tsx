import { Assets_type, Stone_type } from "@/api/api";
import Regular_image_component from "./images";

// this component has one input finded_stone with this object we can show alt booresh imjage depend of our current page

function Stone_booresh(p: { finded_stone: Stone_type }) {
  return (
    <>
      <div
        style={{ order: p.finded_stone?.boresh?.order }}
        className="main-booresh-layout"
      >
        {p.finded_stone?.boresh?.boreshImg.map(
          (e: Assets_type, index: number) => (
            <>
              <Regular_image_component
                class="self-booresh-image"
                src={e.url}
                alt={e.alt ? e.alt : ""}
              />
            </>
          )
        )}
      </div>
    </>
  );
}

export default Stone_booresh;
