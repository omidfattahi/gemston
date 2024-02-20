import "../../public/styles/404.scss";
import Regular_image_component from "@/component/images";
import { Regular_div_title_component } from "@/component/titles";
import Link from "../../node_modules/next/link";

// error 404 page

export default function NotFoundPage() {
  return (
    // whole page layout
    <section className="main-page_404">
      {/* text error  */}
      <Regular_div_title_component title="خطای 404 " class="text" />
      {/* git for not found page  */}
      <Regular_image_component
        src="/assets/photo/404.gif"
        alt="gif"
        class="gif_404"
      />
      <Regular_div_title_component
        title="به نظر میاد یکی سیم رو خورده ! "
        class="eat"
      />
      <Link href="/"> صحفه اصلی</Link>
    </section>
  );
}
