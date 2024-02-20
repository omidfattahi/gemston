export interface Assets_type {
  id: string | null;
  url: string;
  alt?: string;
  name: string | null;
  order?: number | null;
  link: string | null;
  urlImg: string | null;
}

export interface Map_type {
  irimage: Assets_type;
  woimage: Assets_type;
  title: string;
}

export interface why_type {
  image: Assets_type;
  text: string;
}

export interface Video_type {
  video: Assets_type;
  view: number;
  category: string[] | string;
}

export interface Search_filter_sidebar_color_type {
  name: string;
  code: string | null;
}

export interface Boresh_type {
  order: number;
  boreshImg: Assets_type[];
}

export interface content_type {
  order: number;
  text: string;
}

export interface Blog_type {
  id: string | number;
  title: string;
  content: content_type[];
  metaDescription: string;
  images: Assets_type[];
  video: Assets_type;
  categories: string[];
  createdArt: string;
  views: number;
  url: string;
}

export interface Stone_table_type {
  id: string | number;
  color: string[];
  dustColor: string;
  opacity: string;
  kelivazh: string;
  jala: string;
  zaribshekast: string;
  hardness: number;
  weigth: string;
  system: string;
  price: number;
  rare: boolean;
  order: number;
}

export interface Stone_type {
  GemTable: Stone_table_type[];
  id: string | number;
  title: string;
  content: content_type[];
  metaDescription: string;
  images: Assets_type[];
  mapimages: Assets_type[];
  video: Assets_type;
  categories: string[];
  sound: Assets_type;
  createdArt: string;
  views: number;
  url: string;
  podcast: Assets_type;
  boresh: Boresh_type;
  popularity: number;
  updatedAt: string;
}

export interface Socialmedia {
  url: string;
  alt: string;
  link: string;
}

export interface ContactUs_type {
  title: string;
  metaDescription: string;
  content: string;
  socialmedia: Socialmedia[];
  mapaddress: string;
  person: Person_type[];
  contactinfo: any;
}

export interface Person_type {
  id: string;
  url: string;
  alt: string;
  name: string;
  link: string;
  text: string;
  order: number | null;
}

export interface Qa_type {
  id: string;
  question: string;
  answer: string;
}

export interface Question_type {
  title: string;
  QA: Qa_type[];
  form: string[];
  sendFormDate: number;
}

export interface Index_type {
  slider: Assets_type[];
  why: why_type[];
  expert: {
    image: Assets_type;
    text: string;
    socialmedia: {
      url: string;
      alt: string;
      link: string;
    }[];
  };
  booresh: {
    title: string;
    image: Assets_type;
  }[];
}

export interface Users_type {
  id: number;
  name: string;
  email: string;
  role: string;
  password: string | number;
}

const Blog: Blog_type[] = [
  {
    id: "1",
    title: "امیر",
    content: [
      {
        order: 3,
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      },
      {
        order: 5,
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان ",
      },
      {
        order: 7,
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      },
    ],
    metaDescription: " metadescription for blog 1",

    images: [
      {
        id: "1",
        url: "/assets/photo/article-banner.png",
        alt: "image alt",
        name: "image name",
        order: 1,
        link: "/",
        urlImg: "/assets/photo/article-video.png",
      },
      {
        id: "2",
        url: "/assets/photo/article1.jpg",
        alt: "image alt2",
        name: "image name2",
        order: 4,
        link: "/",
        urlImg: "/assets/photo/article-video.png",
      },
    ],

    video: {
      id: "1",
      url: "/assets/video/22.mp4",
      alt: "video alt",
      name: "video name",
      order: 6,
      link: "/",
      urlImg: "/assets/photo/article-video.png",
    },
    categories: ["A", "F"],
    createdArt: " 2023/8/24 ",
    views: 100,
    url: "ArticleUrl1",
  },
  {
    id: "2",
    title: "محمد",
    content: [
      {
        order: 3,
        text: "hello world content blog text 11hello world content blog text 11hello world content blog text 11hello world content blog text 11hello world content blog text 11hello world content blog text 11hello world content blog text 11hello world content blog text 11hello world content blog text 11hello world content blog text 11hello world content blog text 11hello world content blog text 11hello world content blog text 11hello world content blog text 11 content blog text 11hello world content blog text 11 content blog text 11hello world content blog text 11 content blog text 11hello world content blog text 11 content blog text 11hello world content blog text 11 content blog text 11hello world content blog text 11 content blog text 11hello world content blog text 11",
      },
      {
        order: 5,
        text: "hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12hello world content blog text 12",
      },
      {
        order: 7,
        text: "hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13hello world content blog text 13",
      },
    ],
    metaDescription: "2145421512",

    images: [
      {
        id: "1",
        url: "/assets/photo/article-banner.png",
        alt: "image alt",
        name: "image name",
        order: 1,
        link: "/",
        urlImg: "/assets/photo/article-video.png",
      },
      {
        id: "2",
        url: "/assets/photo/article1.jpg",
        alt: "image alt2",
        name: "image name2",
        order: 4,
        link: "/",
        urlImg: "/assets/photo/article-video.png",
      },
    ],

    video: {
      id: "1",
      url: "/assets/video/22.mp4",
      alt: "video alt",
      name: "video name",
      order: 6,
      link: "/",
      urlImg: "/assets/photo/article-video.png",
    },
    categories: ["F", "C"],
    createdArt: "1998/7/21",
    views: 7623562,
    url: "ArticleUrl2",
  },
  {
    id: "3",
    title: "مولا",

    content: [
      {
        order: 3,
        text: "hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text 111hello world content blog text",
      },
      {
        order: 5,
        text: "hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112hello world content blog text 112 112hello world content blog text 112 112hello world content blog text 112",
      },
      {
        order: 7,
        text: "hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text 113hello world content blog text ",
      },
    ],
    metaDescription: "metadescription for blog 3",

    images: [
      {
        id: "1",
        url: "/assets/photo/article-banner.png",
        alt: "image alt",
        name: "image name",
        order: 1,
        link: "/",
        urlImg: "/assets/photo/article-video.png",
      },
      {
        id: "2",
        url: "/assets/photo/article1.jpg",
        alt: "image alt2",
        name: "image name2",
        order: 4,
        link: "/",
        urlImg: "/assets/photo/article-video.png",
      },
    ],

    video: {
      id: "1",
      url: "/assets/video/22.mp4",
      name: "video name",
      order: 6,
      link: "/",
      urlImg: "/assets/photo/article-video.png",
    },
    categories: ["B", "C"],
    createdArt: "1789/09/6",
    views: 178,
    url: "ArticleUrl3",
  },
  {
    id: "4",
    title: "کوروش",
    content: [
      {
        order: 3,
        text: "hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1",
      },
      {
        order: 5,
        text: "hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text",
      },
      {
        order: 7,
        text: "hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3",
      },
    ],
    metaDescription: " metadescription for blog 4",

    images: [
      {
        id: "1",
        url: "/assets/photo/article-banner.png",
        alt: "image alt",
        name: "image name",
        order: 1,
        link: "/",
        urlImg: "/assets/photo/article-video.png",
      },
      {
        id: "2",
        url: "/assets/photo/article1.jpg",
        alt: "image alt2",
        name: "image name2",
        order: 4,
        link: "/",
        urlImg: "/assets/photo/article-video.png",
      },
    ],

    video: {
      id: "1",
      url: "/assets/video/22.mp4",
      alt: "video alt",
      name: "video name",
      order: 6,
      link: "/",
      urlImg: "/assets/photo/article-video.png",
    },
    categories: ["A"],
    createdArt: "1567/8/9",
    views: 989,
    url: "ArticleUrl4",
  },
  {
    id: "5",
    title: "کیهان",
    content: [
      {
        order: 3,
        text: "hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1",
      },
      {
        order: 5,
        text: "hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text",
      },
      {
        order: 7,
        text: "hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3",
      },
    ],
    metaDescription: " metadescription for blog 5",

    images: [
      {
        id: "1",
        url: "/assets/photo/article-banner.png",
        alt: "image alt",
        name: "image name",
        order: 1,
        link: "/",
        urlImg: "/assets/photo/article-video.png",
      },
      {
        id: "2",
        url: "/assets/photo/article1.jpg",
        alt: "image alt2",
        name: "image name2",
        order: 4,
        link: "/",
        urlImg: "/assets/photo/article-video.png",
      },
    ],

    video: {
      id: "1",
      url: "/assets/video/22.mp4",
      alt: "video alt",
      name: "video name",
      order: 6,
      link: "/",
      urlImg: "/assets/photo/article-video.png",
    },
    categories: ["C"],
    createdArt: "1898/6/4",
    views: 155,
    url: "ArticleUrl5",
  },
  {
    id: "6",
    title: "کفتار",
    content: [
      {
        order: 3,
        text: "hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1hello world content blog text 1",
      },
      {
        order: 5,
        text: "hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text 2hello world content blog text",
      },
      {
        order: 7,
        text: "hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3hello world content blog text 3",
      },
    ],
    metaDescription: " metadescription for blog 6",

    images: [
      {
        id: "1",
        url: "/assets/photo/article-banner.png",
        alt: "image alt",
        name: "image name",
        order: 1,
        link: "/",
        urlImg: "/assets/photo/article-video.png",
      },
      {
        id: "2",
        url: "/assets/photo/article1.jpg",
        alt: "image alt2",
        name: "image name2",
        order: 4,
        link: "/",
        urlImg: "/assets/photo/article-video.png",
      },
    ],

    video: {
      id: "1",
      url: "/assets/video/22.mp4",
      alt: "video alt",
      name: "video name",
      order: 6,
      link: "/",
      urlImg: "/assets/photo/article-video.png",
    },
    categories: ["A"],
    createdArt: "2005/5/5",
    views: 144541,
    url: "ArticleUrl6",
  },
];

const ContactUs: ContactUs_type[] = [
  {
    title: "درباره ما",
    metaDescription: "metaDescription for contact us",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    socialmedia: [
      {
        url: "/assets/photo/facebook.svg",
        alt: "social media alt 1",
        link: "https://www.facebook.com/",
      },
      {
        url: "/assets/photo/youtube.svg",
        alt: "social media alt 2",
        link: "https://www.youtube.com/",
      },
      {
        url: "/assets/photo/whatsapp.svg",
        alt: "social media alt 3",
        link: "https://web.whatsapp.com/",
      },
      {
        url: "/assets/photo/instagram.svg",
        alt: "social media alt 4",
        link: "https://instagram.com/",
      },
    ],
    mapaddress:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13863.164937211051!2d52.46385809071678!3d29.6968317411399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb210e9383585bf%3A0xe09bd490e17f0415!2sTejarat%20Bank!5e0!3m2!1sen!2s!4v1702361145340!5m2!1sen!2s",

    contactinfo: [
      {
        addresstext: "شیراز خیابان معالی آباد ساختمان پارسا طبقه 3 واحد 5 ",
        emailtext: "lithosgem@gmail.com",
        phonetext: "07131111111",
      },
    ],

    person: [
      {
        id: "1",
        url: "/assets/photo/aboutus-1.png",
        alt: "person image alt 1",
        name: "person image name1",
        link: "/",
        text: "text for person1 in contact us",
        order: 1,
      },
      {
        id: "2",
        url: "/assets/photo/aboutus-1.png",
        alt: "person image alt 2",
        name: "person image name2",
        link: "/",
        text: "text for person2 in contact us",
        order: 2,
      },
      {
        id: "3",
        url: "/assets/photo/aboutus-1.png",
        alt: "person image alt 3",
        name: "person image name3",
        link: "/",
        text: "text for person3 in contact us",
        order: 3,
      },
      {
        id: "4",
        url: "/assets/photo/aboutus-1.png",
        alt: "person image alt 4",
        name: "person image name4",
        link: "/",
        text: "text for person4 in contact us",
        order: 4,
      },
    ],
  },
];

const GemTable: Stone_table_type[] = [
  {
    id: "1",
    color: ["زرد یا قهوه ای", "سرخ یا صورتی"],
    dustColor: "brown",
    opacity: ".1",
    kelivazh: "1",
    jala: "1",
    zaribshekast: "1",
    hardness: 2,
    weigth: "54",
    system: "water",
    order: 10,
    price: 3,
    rare: true,
  },
  {
    id: "2",
    color: ["سفید یا نقره ای", "آبی یا بنفش"],
    dustColor: "pink",
    opacity: ".2",
    kelivazh: "2",
    jala: "2",
    zaribshekast: "2",
    hardness: 4,
    weigth: "43",
    system: "milk",
    order: 10,
    price: 1,
    rare: false,
  },
  {
    id: "3",
    color: ["سیاه", "سبز"],
    dustColor: "maroon",
    opacity: ".3",
    kelivazh: "3",
    jala: "3",
    zaribshekast: "3",
    hardness: 3,
    weigth: "12",
    system: "coffee",
    order: 10,
    price: 2,
    rare: true,
  },
  {
    id: "4",
    color: ["سرخ یا صورتی", "بی رنگ"],
    dustColor: "skyblue",
    opacity: ".4",
    kelivazh: "4",
    jala: "4",
    zaribshekast: "4",
    hardness: 6,
    weigth: "87",
    system: "hotchocolate",
    order: 10,
    price: 3,
    rare: false,
  },
  {
    id: "5",
    color: ["آبی یا بنفش", "زرد یا قهوه ای", "سیاه"],
    dustColor: "aqua",
    opacity: ".5",
    kelivazh: "5",
    jala: "5",
    zaribshekast: "5",
    hardness: 9,
    weigth: "76",
    system: "orange",
    order: 10,
    price: 1,
    rare: true,
  },
  {
    id: "6",
    color: ["سفید یا نقره ای", "بی رنگ", "سبز"],
    dustColor: "cream",
    opacity: ".6",
    kelivazh: "6",
    jala: "6",
    zaribshekast: "6",
    hardness: 10,
    weigth: "63",
    system: "juice",
    order: 10,
    price: 3,
    rare: false,
  },
  {
    id: "7",
    color: ["سیاه"],
    dustColor: "cream",
    opacity: ".6",
    kelivazh: "6",
    jala: "6",
    zaribshekast: "6",
    hardness: 1,
    weigth: "63",
    system: "juice",
    order: 10,
    price: 2,
    rare: true,
  },
];

const Stone: Stone_type[] = [
  {
    GemTable,
    id: "1",
    title: "اَحمد",
    url: "stoneurl1",
    metaDescription: " metadescription for stone1",
    content: [
      {
        order: 1,
        text: "hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1",
      },
      {
        order: 3,
        text: "hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2",
      },
      {
        order: 5,
        text: "hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3",
      },
      {
        order: 7,
        text: "hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4",
      },
      {
        order: 9,
        text: "hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5hello world content stone text 5",
      },
      {
        order: 11,
        text: "hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6hello world content stone text 6",
      },
      {
        order: 13,
        text: "hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7hello world content stone text 7",
      },
    ],
    categories: ["C"],

    video: {
      id: "1",
      url: "/assets/video/22.mp4",
      alt: "video alt 1",
      name: "video name 1",
      order: 8,
      link: "/",
      urlImg: "/assets/photo/article-video.png",
    },
    createdArt: "2000/15/24",
    views: 5667,

    images: [
      {
        id: "1",
        url: "/assets/photo/article-banner.png",
        alt: "image alt 1",
        name: "image name 1",
        order: 2,
        link: "/",
        urlImg: null,
      },
      {
        id: "2",
        url: "/assets/photo/all-article-banner.png",
        alt: "image alt 2",
        name: "image name 2",
        order: 4,
        link: "/",
        urlImg: null,
      },
    ],

    boresh: {
      boreshImg: [
        {
          id: "1",
          url: "/assets/photo/stone (3).png",
          alt: "image alt 1",
          name: "image name 1",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "2",
          url: "/assets/photo/stone (1).png",
          alt: "image alt 2",
          name: "image name 2",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "3",
          url: "/assets/photo/stone (2).png",
          alt: "image alt 3",
          name: "image name 3",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "4",
          url: "/assets/photo/stone (10).png",
          alt: "image alt 4",
          name: "image name 4",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "5",
          url: "/assets/photo/stone (8).png",
          alt: "image alt 5",
          name: "image name 5",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "6",
          url: "/assets/photo/stone (9).png",
          alt: "image alt 6",
          name: "image name 6",
          order: null,
          link: null,
          urlImg: null,
        },
      ],
      order: 11,
    },

    sound: {
      id: "1",
      url: "/assets/podcast/horse.ogv",
      alt: "sound alt 1",
      name: "sound name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },

    podcast: {
      id: "1",
      url: "/assets/podcast/horse.ogv",
      alt: "podcast alt 1",
      name: "podcast name 1",
      order: 6,
      link: "/",
      urlImg: null,
    },

    mapimages: [
      {
        id: "1",
        url: "/assets/photo/stone (4).png",
        alt: "boresh alt1",
        name: "boresh name1",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "2",
        url: "/assets/photo/stone (4).png",
        alt: "boresh alt2",
        name: "boresh name2",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "3",
        url: "/assets/photo/stone (4).png",
        alt: "boresh alt3",
        name: "boresh name3",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "4",
        url: "/assets/photo/stone (4).png",
        alt: "boresh alt4",
        name: "boresh name4",
        order: null,
        link: null,
        urlImg: null,
      },
    ],

    popularity: 5,
    updatedAt: "1798/4/1",
  },
  {
    GemTable,
    id: "2",
    title: "آنا",
    url: "stoneurl2",
    metaDescription: " metadescription for stone2",
    content: [
      {
        order: 1,
        text: "hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1",
      },
      {
        order: 2,
        text: "hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2",
      },
      {
        order: 3,
        text: "hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3",
      },
      {
        order: 4,
        text: "hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4",
      },
    ],
    categories: ["a", "c"],

    video: {
      id: "1",
      url: "/assets/video/22.mp4",
      alt: "video alt 1",
      name: "video name 1",
      order: 1,
      link: "/",
      urlImg: "assetsphotoarticle-video.png",
    },
    createdArt: "1990/20/12",
    views: 23,

    images: [
      {
        id: "1",
        url: "/assets/photo/all-article-banner.png",
        alt: "image alt 1",
        name: "image name 1",
        order: 1,
        link: "/",
        urlImg: null,
      },
      {
        id: "2",
        url: "/assets/photo/article-banner.png",
        alt: "image alt 2",
        name: "image name 2",
        order: 2,
        link: "/",
        urlImg: null,
      },
    ],

    boresh: {
      order: 11,
      boreshImg: [
        {
          id: "1",
          url: "/assets/photo/stone (1).png",
          alt: "image alt 1",
          name: "image name 1",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "2",
          url: "/assets/photo/stone (3).png",
          alt: "image alt 2",
          name: "image name 2",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "3",
          url: "/assets/photo/stone (10).png",
          alt: "image alt 3",
          name: "image name 3",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "4",
          url: "/assets/photo/stone (2).png",
          alt: "image alt 4",
          name: "image name 4",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "5",
          url: "/assets/photo/stone (8).png",
          alt: "image alt 5",
          name: "image name 5",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "6",
          url: "/assets/photo/stone (9).png",
          alt: "image alt 6",
          name: "image name 6",
          order: null,
          link: null,
          urlImg: null,
        },
      ],
    },

    sound: {
      id: "1",
      url: "/assets/podcast/horse.ogv",
      alt: "sound alt 1",
      name: "sound name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },
    podcast: {
      id: "1",
      url: "/assets/podcast/horse.ogv",
      alt: "podcast alt 1",
      name: "podcast name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },

    mapimages: [
      {
        id: "1",
        url: "/assets/photo/stone (4).png",
        alt: "boresh alt1",
        name: "boresh name1",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "2",
        url: "/assets/photo/stone (5).png",
        alt: "boresh alt2",
        name: "boresh name2",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "3",
        url: "/assets/photo/stone (6).png",
        alt: "boresh alt3",
        name: "boresh name3",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "4",
        url: "/assets/photo/stone (7).png",
        alt: "boresh alt4",
        name: "boresh name4",
        order: null,
        link: null,
        urlImg: null,
      },
    ],

    popularity: 4,
    updatedAt: "2018/8/5",
  },
  {
    GemTable,
    id: "3",
    title: "اِحسان",
    url: "stoneurl3",
    metaDescription: " metadescription for stone3",
    content: [
      {
        order: 1,
        text: "hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1",
      },
      {
        order: 2,
        text: "hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2",
      },
      {
        order: 3,
        text: "hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3",
      },
      {
        order: 4,
        text: "hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4",
      },
    ],
    categories: ["a"],

    video: {
      id: "1",
      url: "/assets/video/22.mp4",
      alt: "video alt 1",
      name: "video name 1",
      order: 1,
      link: "/",
      urlImg: "assetsphotoarticle-video.png",
    },
    createdArt: "2015/6/6",
    views: 3456,

    images: [
      {
        id: "1",
        url: "/assets/photo/article-banner.png",
        alt: "image alt 1",
        name: "image name 1",
        order: 1,
        link: "/",
        urlImg: null,
      },
      {
        id: "2",
        url: "/assets/photo/all-article-banner.png",
        alt: "image alt 2",
        name: "image name 2",
        order: 2,
        link: "/",
        urlImg: null,
      },
    ],

    boresh: {
      order: 11,
      boreshImg: [
        {
          id: "1",
          url: "/assets/photo/stone (3).png",
          alt: "image alt 1",
          name: "image name 1",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "2",
          url: "/assets/photo/stone (2).png",
          alt: "image alt 2",
          name: "image name 2",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "3",
          url: "/assets/photo/stone (1).png",
          alt: "image alt 3",
          name: "image name 3",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "4",
          url: "/assets/photo/stone (10).png",
          alt: "image alt 4",
          name: "image name 4",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "5",
          url: "/assets/photo/stone (9).png",
          alt: "image alt 5",
          name: "image name 5",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "6",
          url: "/assets/photo/stone (8).png",
          alt: "image alt 6",
          name: "image name 6",
          order: null,
          link: null,
          urlImg: null,
        },
      ],
    },

    sound: {
      id: "1",
      url: "/assets/podcast/horse.ogv",
      alt: "sound alt 1",
      name: "sound name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },
    podcast: {
      id: "1",
      url: "/assets/podcast/horse.ogv",
      alt: "podcast alt 1",
      name: "podcast name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },

    mapimages: [
      {
        id: "1",
        url: "/assets/photo/stone (4).png",
        alt: "boresh alt1",
        name: "boresh name1",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "2",
        url: "/assets/photo/stone (5).png",
        alt: "boresh alt2",
        name: "boresh name2",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "3",
        url: "/assets/photo/stone (6).png",
        alt: "boresh alt3",
        name: "boresh name3",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "4",
        url: "/assets/photo/stone (7).png",
        alt: "boresh alt4",
        name: "boresh name4",
        order: null,
        link: null,
        urlImg: null,
      },
    ],

    popularity: 3,
    updatedAt: "2010/2/20",
  },
  {
    GemTable,
    id: "4",
    title: "اُردک",
    url: "stoneurl4",
    metaDescription: " metadescription for stone 4",
    content: [
      {
        order: 1,
        text: "hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1",
      },
      {
        order: 2,
        text: "hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2",
      },
      {
        order: 3,
        text: "hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3",
      },
      {
        order: 4,
        text: "hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4",
      },
    ],
    categories: ["a", "b"],

    video: {
      id: "1",
      url: "/assets/video/22.mp4",
      alt: "video alt 1",
      name: "video name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },
    createdArt: "2020/20/20",
    views: 1200,

    images: [
      {
        id: "1",
        url: "/assets/photo/all-article-banner.png",
        alt: "image alt 1",
        name: "image name 1",
        order: 1,
        link: "/",
        urlImg: null,
      },
      {
        id: "2",
        url: "/assets/photo/article-banner.png",
        alt: "image alt 2",
        name: "image name 2",
        order: 2,
        link: "/",
        urlImg: null,
      },
    ],

    boresh: {
      order: 11,
      boreshImg: [
        {
          id: "1",
          url: "/assets/photo/stone (1).png",
          alt: "image alt 1",
          name: "image name 1",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "2",
          url: "/assets/photo/stone (3).png",
          alt: "image alt 2",
          name: "image name 2",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "3",
          url: "/assets/photo/stone (10).png",
          alt: "image alt 3",
          name: "image name 3",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "4",
          url: "/assets/photo/stone (2).png",
          alt: "image alt 4",
          name: "image name 4",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "5",
          url: "/assets/photo/stone (9).png",
          alt: "image alt 5",
          name: "image name 5",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "6",
          url: "/assets/photo/stone (8).png",
          alt: "image alt 6",
          name: "image name 6",
          order: null,
          link: null,
          urlImg: null,
        },
      ],
    },

    sound: {
      id: "1",
      url: "/assets/podcast/horse.ogv",
      alt: "sound alt 1",
      name: "sound name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },
    podcast: {
      id: "1",
      url: "/assets/podcast/horse.ogv",
      alt: "podcast alt 1",
      name: "podcast name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },

    mapimages: [
      {
        id: "1",
        url: "/assets/photo/stone (4).png",
        alt: "boresh alt1",
        name: "boresh name1",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "2",
        url: "/assets/photo/stone (6).png",
        alt: "boresh alt2",
        name: "boresh name2",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "3",
        url: "/assets/photo/stone (7).png",
        alt: "boresh alt3",
        name: "boresh name3",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "4",
        url: "/assets/photo/stone (5).png",
        alt: "boresh alt4",
        name: "boresh name4",
        order: null,
        link: null,
        urlImg: null,
      },
    ],

    popularity: 2,
    updatedAt: "2019/9/1",
  },
  {
    GemTable,
    id: "5",
    title: "آدام",
    url: "stoneurl 5",
    metaDescription: " metadescription for stone 5",
    content: [
      {
        order: 1,
        text: "hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1",
      },
      {
        order: 2,
        text: "hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2",
      },
      {
        order: 3,
        text: "hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3",
      },
      {
        order: 4,
        text: "hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4",
      },
    ],
    categories: ["b", "c"],

    video: {
      id: "1",
      url: "/assets/video/22.mp4",
      alt: "video alt 1",
      name: "video name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },
    createdArt: "2002/6/12",
    views: 789,

    images: [
      {
        id: "1",
        url: "/assets/photo/article-banner.png",
        alt: "image alt 1",
        name: "image name 1",
        order: 1,
        link: "/",
        urlImg: null,
      },
      {
        id: "2",
        url: "/assets/photo/all-article-banner.png",
        alt: "image alt 2",
        name: "image name 2",
        order: 2,
        link: "/",
        urlImg: null,
      },
    ],

    boresh: {
      order: 11,
      boreshImg: [
        {
          id: "1",
          url: "/assets/photo/stone (10).png",
          alt: "image alt 1",
          name: "image name 1",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "2",
          url: "/assets/photo/stone (2).png",
          alt: "image alt 2",
          name: "image name 2",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "3",
          url: "/assets/photo/stone (1).png",
          alt: "image alt 3",
          name: "image name 3",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "4",
          url: "/assets/photo/stone (3).png",
          alt: "image alt 4",
          name: "image name 4",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "5",
          url: "/assets/photo/stone (9).png",
          alt: "image alt 5",
          name: "image name 5",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "6",
          url: "/assets/photo/stone (8).png",
          alt: "image alt 6",
          name: "image name 6",
          order: null,
          link: null,
          urlImg: null,
        },
      ],
    },

    sound: {
      id: "1",
      url: "/assets/podcast/horse.ogv",
      alt: "sound alt 1",
      name: "sound name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },
    podcast: {
      id: "1",
      url: "/assets/podcast/horse.ogv",
      alt: "podcast alt 1",
      name: "podcast name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },

    mapimages: [
      {
        id: "1",
        url: "/assets/photo/stone (4).png",
        alt: "boresh alt1",
        name: "boresh name1",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "2",
        url: "/assets/photo/stone (6).png",
        alt: "boresh alt2",
        name: "boresh name2",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "3",
        url: "/assets/photo/stone (5).png",
        alt: "boresh alt3",
        name: "boresh name3",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "4",
        url: "/assets/photo/stone (7).png",
        alt: "boresh alt4",
        name: "boresh name4",
        order: null,
        link: null,
        urlImg: null,
      },
    ],

    popularity: 1,
    updatedAt: "2023/1/3",
  },
  {
    GemTable,
    id: "6",
    title: "اَمیر",
    url: "stoneurl 6",
    metaDescription: " metadescription for stone 6",
    content: [
      {
        order: 1,
        text: "hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1",
      },
      {
        order: 2,
        text: "hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2",
      },
      {
        order: 3,
        text: "hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3",
      },
      {
        order: 4,
        text: "hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4",
      },
    ],
    categories: ["b", "c"],

    video: {
      id: "1",
      url: "/assets/video/22.mp4",
      alt: "video alt 1",
      name: "video name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },
    createdArt: "2002/6/12",
    views: 789,

    images: [
      {
        id: "1",
        url: "/assets/photo/article-banner.png",
        alt: "image alt 1",
        name: "image name 1",
        order: 1,
        link: "/",
        urlImg: null,
      },
      {
        id: "2",
        url: "/assets/photo/all-article-banner.png",
        alt: "image alt 2",
        name: "image name 2",
        order: 2,
        link: "/",
        urlImg: null,
      },
    ],

    boresh: {
      order: 11,
      boreshImg: [
        {
          id: "1",
          url: "/assets/photo/stone (10).png",
          alt: "image alt 1",
          name: "image name 1",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "2",
          url: "/assets/photo/stone (2).png",
          alt: "image alt 2",
          name: "image name 2",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "3",
          url: "/assets/photo/stone (1).png",
          alt: "image alt 3",
          name: "image name 3",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "4",
          url: "/assets/photo/stone (3).png",
          alt: "image alt 4",
          name: "image name 4",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "5",
          url: "/assets/photo/stone (9).png",
          alt: "image alt 5",
          name: "image name 5",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "6",
          url: "/assets/photo/stone (8).png",
          alt: "image alt 6",
          name: "image name 6",
          order: null,
          link: null,
          urlImg: null,
        },
      ],
    },

    sound: {
      id: "1",
      url: "/assets/podcast/horse.ogv",
      alt: "sound alt 1",
      name: "sound name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },
    podcast: {
      id: "1",
      url: "/assets/podcast/horse.ogv",
      alt: "podcast alt 1",
      name: "podcast name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },

    mapimages: [
      {
        id: "1",
        url: "/assets/photo/stone (4).png",
        alt: "boresh alt1",
        name: "boresh name1",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "2",
        url: "/assets/photo/stone (6).png",
        alt: "boresh alt2",
        name: "boresh name2",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "3",
        url: "/assets/photo/stone (5).png",
        alt: "boresh alt3",
        name: "boresh name3",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "4",
        url: "/assets/photo/stone (7).png",
        alt: "boresh alt4",
        name: "boresh name4",
        order: null,
        link: null,
        urlImg: null,
      },
    ],

    popularity: 3,
    updatedAt: "2023/1/3",
  },
  {
    GemTable,
    id: "7",
    title: "اِلمیرا",
    url: "stoneurl 7",
    metaDescription: " metadescription for stone 6",
    content: [
      {
        order: 1,
        text: "hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1hello world content stone text 1",
      },
      {
        order: 2,
        text: "hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2hello world content stone text 2",
      },
      {
        order: 3,
        text: "hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3hello world content stone text 3",
      },
      {
        order: 4,
        text: "hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4hello world content stone text 4",
      },
    ],
    categories: ["b", "c"],

    video: {
      id: "1",
      url: "/assets/video/22.mp4",
      alt: "video alt 1",
      name: "video name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },
    createdArt: "2002/6/12",
    views: 789,

    images: [
      {
        id: "1",
        url: "/assets/photo/article-banner.png",
        alt: "image alt 1",
        name: "image name 1",
        order: 1,
        link: "/",
        urlImg: null,
      },
      {
        id: "2",
        url: "/assets/photo/all-article-banner.png",
        alt: "image alt 2",
        name: "image name 2",
        order: 2,
        link: "/",
        urlImg: null,
      },
    ],

    boresh: {
      order: 11,
      boreshImg: [
        {
          id: "1",
          url: "/assets/photo/stone (10).png",
          alt: "image alt 1",
          name: "image name 1",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "2",
          url: "/assets/photo/stone (2).png",
          alt: "image alt 2",
          name: "image name 2",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "3",
          url: "/assets/photo/stone (1).png",
          alt: "image alt 3",
          name: "image name 3",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "4",
          url: "/assets/photo/stone (3).png",
          alt: "image alt 4",
          name: "image name 4",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "5",
          url: "/assets/photo/stone (9).png",
          alt: "image alt 5",
          name: "image name 5",
          order: null,
          link: null,
          urlImg: null,
        },
        {
          id: "6",
          url: "/assets/photo/stone (8).png",
          alt: "image alt 6",
          name: "image name 6",
          order: null,
          link: null,
          urlImg: null,
        },
      ],
    },

    sound: {
      id: "1",
      url: "/assets/podcast/horse.ogv",
      alt: "sound alt 1",
      name: "sound name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },
    podcast: {
      id: "1",
      url: "/assets/podcast/horse.ogv",
      alt: "podcast alt 1",
      name: "podcast name 1",
      order: 1,
      link: "/",
      urlImg: null,
    },

    mapimages: [
      {
        id: "1",
        url: "/assets/photo/stone (4).png",
        alt: "boresh alt1",
        name: "boresh name1",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "2",
        url: "/assets/photo/stone (6).png",
        alt: "boresh alt2",
        name: "boresh name2",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "3",
        url: "/assets/photo/stone (5).png",
        alt: "boresh alt3",
        name: "boresh name3",
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "4",
        url: "/assets/photo/stone (7).png",
        alt: "boresh alt4",
        name: "boresh name4",
        order: null,
        link: null,
        urlImg: null,
      },
    ],

    popularity: 5,
    updatedAt: "2023/1/3",
  },
];

const Search_filter_sidebar_color: Search_filter_sidebar_color_type[] = [
  {
    name: "همه",
    code: null,
  },
  {
    name: "سرخ یا صورتی",
    code: "#DF5B5B",
  },
  {
    name: "زرد یا قهوه ای",
    code: "#B48540",
  },
  {
    name: "سفید یا نقره ای",
    code: "#EEEEEE",
  },
  {
    name: "آبی یا بنفش",
    code: "#5F36A3",
  },
  {
    name: "سیاه",
    code: "#000000",
  },
  {
    name: "سبز",
    code: "#1C6410",
  },
  {
    name: "بی رنگ",
    code: "#FFFFFF",
  },
];

const Index: Index_type[] = [
  {
    slider: [
      {
        id: "1",
        url: "/assets/photo/index-banner.png",
        alt: "slider image alt 1",
        name: null,
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "2",
        url: "/assets/photo/index-banner.png",
        alt: "slider image alt 2",
        name: null,
        order: null,
        link: null,
        urlImg: null,
      },
      {
        id: "3",
        url: "/assets/photo/index-banner.png",
        alt: "slider image alt 3",
        name: null,
        order: null,
        link: null,
        urlImg: null,
      },
    ],
    why: [
      {
        text: "تائید صلاحیت شناسنامه سنگ",
        image: {
          id: "1",
          url: "/assets/photo/why.png",
          alt: "تائید صلاحیت  شناسنامه سنگ",
          name: null,
          order: null,
          link: null,
          urlImg: null,
        },
      },
      {
        text: "مرجع جامع  گوهر سنگ ها",
        image: {
          id: "2",
          url: "/assets/photo/why.png",
          alt: "مرجع جامع  گوهر سنگ ها",
          name: null,
          order: null,
          link: null,
          urlImg: null,
        },
      },
      {
        text: "کارشناسی اصالت انواع گوهرسنگ ها",
        image: {
          id: "3",
          url: "/assets/photo/why.png",
          alt: "کارشناسی اصالت انواع گوهرسنگ ها",
          name: null,
          order: null,
          link: null,
          urlImg: null,
        },
      },
      {
        text: "معرفی معادن  گوهر سنگ ها",
        image: {
          id: "4",
          url: "/assets/photo/why.png",
          alt: "معرفی معادن  گوهر سنگ ها",
          name: null,
          order: null,
          link: null,
          urlImg: null,
        },
      },
    ],
    expert: {
      image: {
        id: "1",
        url: "/assets/photo/expert.png",
        alt: " کارشناسی سنگ  ",
        name: null,
        order: null,
        link: null,
        urlImg: null,
      },
      text: "کارشناسی انواع گوهر سنگ جهت اطلاع از1. اصالت گوهرسنگ ها2. تایید صلاحیت شناسنامه های موجود اعم از GIA ",
      socialmedia: [
        {
          url: "/assets/photo/facebook.svg",
          alt: "social media alt 1",
          link: "https://www.facebook.com/",
        },
        {
          url: "/assets/photo/youtube.svg",
          alt: "social media alt 2",
          link: "https://www.youtube.com/",
        },
        {
          url: "/assets/photo/whatsapp.svg",
          alt: "social media alt 3",
          link: "https://web.whatsapp.com/",
        },
        {
          url: "/assets/photo/instagram.svg",
          alt: "social media alt 4",
          link: "https://instagram.com/",
        },
      ],
    },
    booresh: [
      {
        image: {
          id: "1",
          url: "/assets/photo/booresh.png",
          alt: "تائید صلاحیت  شناسنامه سنگ",
          name: null,
          order: null,
          link: null,
          urlImg: null,
        },
        title: " تراش مدور ",
      },
      {
        image: {
          id: "1",
          url: "/assets/photo/booresh.png",
          alt: "تائید صلاحیت  شناسنامه سنگ",
          name: null,
          order: null,
          link: null,
          urlImg: null,
        },
        title: " تراش تریلیون",
      },
      {
        image: {
          id: "1",
          url: "/assets/photo/booresh.png",
          alt: "تائید صلاحیت  شناسنامه سنگ",
          name: null,
          order: null,
          link: null,
          urlImg: null,
        },
        title: " تراش دامله",
      },
      {
        image: {
          id: "1",
          url: "/assets/photo/booresh.png",
          alt: "تائید صلاحیت  شناسنامه سنگ",
          name: null,
          order: null,
          link: null,
          urlImg: null,
        },
        title: " تراش پرنسس",
      },
      {
        image: {
          id: "1",
          url: "/assets/photo/booresh.png",
          alt: "تائید صلاحیت  شناسنامه سنگ",
          name: null,
          order: null,
          link: null,
          urlImg: null,
        },
        title: " تراش اشکی",
      },
      {
        image: {
          id: "1",
          url: "/assets/photo/booresh.png",
          alt: "تائید صلاحیت  شناسنامه سنگ",
          name: null,
          order: null,
          link: null,
          urlImg: null,
        },
        title: " تراش بالشی",
      },
    ],
  },
];

const FAQ: Question_type[] = [
  {
    title: "سوالات متداول",
    QA: [
      {
        id: "1",
        question:
          "چرا سنگ های قیمتی بپوشیم؟آیا سنگ های قیمتی گران قیمت واقعا کار میکند؟",
        answer:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،",
      },
      {
        id: "2",
        question: "از چه سنگ قیمتی استفاده کنیم؟",
        answer:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،",
      },
      {
        id: "3",
        question: "آیا روشی برای تشخیص اصل بودن سنگ وجود دارد؟",
        answer:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،",
      },
      {
        id: "4",
        question: "کدام  سنگ را برای مشکلات ثروتم بپوشم؟",
        answer:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،",
      },
    ],

    form: ["FORM A", "FORM B", "FORM C"],
    sendFormDate: 1998 / 12 / 1,
  },
];

const Video: Video_type[] = [
  {
    video: {
      id: "1",
      url: "/assets/video/22.mp4",
      alt: "video 1",
      name: "video 1",
      order: null,
      link: null,
      urlImg: "/assets/photo/video1 (1).png",
    },
    view: 100,
    category: "سنگ دگرگونی",
  },
  {
    video: {
      id: "2",
      url: "/assets/video/22.mp4",
      alt: "video 2",
      name: "video 2",
      order: null,
      link: null,
      urlImg: "/assets/photo/video1 (2).png",
    },
    view: 546567,
    category: "سنگ رسوبی",
  },
  {
    video: {
      id: "3",
      url: "/assets/video/22.mp4",
      alt: "video 3",
      name: "video 3",
      order: null,
      link: null,
      urlImg: "/assets/photo/video1 (3).png",
    },
    view: 4577,
    category: "سنگ آذرین",
  },
  {
    video: {
      id: "4",
      url: "/assets/video/22.mp4",
      alt: "video 4",
      name: "video 4",
      order: null,
      link: null,
      urlImg: "/assets/photo/video1 (4).png",
    },
    view: 24352,
    category: "سنگ رسوبی",
  },
  {
    video: {
      id: "5",
      url: "/assets/video/22.mp4",
      alt: "video 5",
      name: "video 5",
      order: null,
      link: null,
      urlImg: "/assets/photo/video1 (5).png",
    },
    view: 2312,
    category: "سنگ دگرگونی",
  },
  {
    video: {
      id: "6",
      url: "/assets/video/22.mp4",
      alt: "video 6",
      name: "video 6",
      order: null,
      link: null,
      urlImg: "/assets/photo/video1 (6).png",
    },
    view: 87978,
    category: "سنگ آذرین",
  },
  {
    video: {
      id: "7",
      url: "/assets/video/22.mp4",
      alt: "video 7",
      name: "video 7",
      order: null,
      link: null,
      urlImg: "/assets/photo/video1 (7).png",
    },
    view: 67556,
    category: "سنگ دگرگونی",
  },
  {
    video: {
      id: "8",
      url: "/assets/video/22.mp4",
      alt: "video 8",
      name: "video 8",
      order: null,
      link: null,
      urlImg: "/assets/photo/video1 (8).png",
    },
    view: 42363,
    category: "سنگ آذرین",
  },
  {
    video: {
      id: "9",
      url: "/assets/video/22.mp4",
      alt: "video 9",
      name: "video 9",
      order: null,
      link: null,
      urlImg: "/assets/photo/video1 (9).png",
    },
    view: 78654,
    category: "سنگ رسوبی",
  },
  {
    video: {
      id: "10",
      url: "/assets/video/22.mp4",
      alt: "video 10",
      name: "video 10",
      order: null,
      link: null,
      urlImg: "/assets/photo/video1 (10).png",
    },
    view: 874345,
    category: "سنگ دگرگونی",
  },
  {
    video: {
      id: "11",
      url: "/assets/video/22.mp4",
      alt: "video 11",
      name: "video 11",
      order: null,
      link: null,
      urlImg: "/assets/photo/video1 (11).png",
    },
    view: 12341,
    category: "سنگ رسوبی",
  },
  {
    video: {
      id: "12",
      url: "/assets/video/22.mp4",
      alt: "video 12",
      name: "video 12",
      order: null,
      link: null,
      urlImg: "/assets/photo/video1 (12).png",
    },
    view: 324324,
    category: "سنگ آذرین",
  },
  {
    video: {
      id: "13",
      url: "/assets/video/22.mp4",
      alt: "video 13",
      name: "video 13",
      order: null,
      link: null,
      urlImg: "/assets/photo/video1 (13).png",
    },
    view: 75856,
    category: "سنگ دگرگونی",
  },
  {
    video: {
      id: "14",
      url: "/assets/video/22.mp4",
      alt: "video 14",
      name: "video 14",
      order: null,
      link: null,
      urlImg: "/assets/photo/video1 (14).png",
    },
    view: 34434,
    category: "سنگ رسوبی",
  },
  {
    video: {
      id: "15",
      url: "/assets/video/22.mp4",
      alt: "video 15",
      name: "video 15",
      order: null,
      link: null,
      urlImg: "/assets/photo/video1 (15).png",
    },
    view: 5363,
    category: "سنگ رسوبی",
  },
];

const Map_image: Map_type[] = [
  {
    title: "آمیتیس",
    irimage: {
      id: null,
      url: "/assets/photo/stone (1).png",
      alt: "ir alt 1",
      name: null,
      order: null,
      link: null,
      urlImg: null,
    },
    woimage: {
      id: null,
      url: "/assets/photo/stone (2).png",
      alt: "wo alt 1",
      name: null,
      order: null,
      link: null,
      urlImg: null,
    },
  },
  {
    title: "اَحمد",
    irimage: {
      id: null,
      url: "/assets/photo/stone (3).png",
      alt: "ir alt 2",
      name: null,
      order: null,
      link: null,
      urlImg: null,
    },
    woimage: {
      id: null,
      url: "/assets/photo/stone (4).png",
      alt: "wo alt 2",
      name: null,
      order: null,
      link: null,
      urlImg: null,
    },
  },
  {
    title: "اِلمیرا",
    irimage: {
      id: null,
      url: "/assets/photo/stone (5).png",
      alt: "ir alt 3",
      name: null,
      order: null,
      link: null,
      urlImg: null,
    },
    woimage: {
      id: null,
      url: "/assets/photo/stone (6).png",
      alt: "wo alt 3",
      name: null,
      order: null,
      link: null,
      urlImg: null,
    },
  },
  {
    title: "اَمیر",
    irimage: {
      id: null,
      url: "/assets/photo/stone (7).png",
      alt: "ir alt 4",
      name: null,
      order: null,
      link: null,
      urlImg: null,
    },
    woimage: {
      id: null,
      url: "/assets/photo/stone (8).png",
      alt: "wo alt 4",
      name: null,
      order: null,
      link: null,
      urlImg: null,
    },
  },
  {
    title: "آدام",
    irimage: {
      id: null,
      url: "/assets/photo/stone (9).png",
      alt: "ir alt 5",
      name: null,
      order: null,
      link: null,
      urlImg: null,
    },
    woimage: {
      id: null,
      url: "/assets/photo/stone (10).png",
      alt: "wo alt 5",
      name: null,
      order: null,
      link: null,
      urlImg: null,
    },
  },
  {
    title: "اُردک",
    irimage: {
      id: null,
      url: "/assets/photo/stone (11).png",
      alt: "ir alt 6",
      name: null,
      order: null,
      link: null,
      urlImg: null,
    },
    woimage: {
      id: null,
      url: "/assets/photo/stone (12).png",
      alt: "wo alt 6",
      name: null,
      order: null,
      link: null,
      urlImg: null,
    },
  },
  {
    title: "اِحسان",
    irimage: {
      id: null,
      url: "/assets/photo/stone (13).png",
      alt: "ir alt 7",
      name: null,
      order: null,
      link: null,
      urlImg: null,
    },
    woimage: {
      id: null,
      url: "/assets/photo/stone (12).png",
      alt: "wo alt 7",
      name: null,
      order: null,
      link: null,
      urlImg: null,
    },
  },
];

const Users: Users_type[] = [
  {
    id: 1,
    name: "haniye1",
    email: "hawniyerz@gmail.com",
    password: "1234",
    role: "ادمین",
  },
  {
    id: 2,
    name: "haniye222",
    email: "hawniyerz22@gmail.com",
    password: 45678,
    role: "ویرایشگر",
  },
  {
    id: 3,
    name: "joseph",
    email: "josephbashiri@gmail.com",
    password: "ffkfj",
    role: "نویسنده",
  },
  {
    id: 4,
    name: "fateme",
    email: "fateme@gmail.com",
    password: 1234,
    role: "ادمین",
  },
  {
    id: 5,
    name: "amir",
    email: "amiri@gmail.com",
    password: "amiri1234",
    role: "ویرایشگر",
  },
];

export function Get_blog() {
  return Blog;
}

export function Get_stone() {
  return Stone;
}

export function Get_stone_table() {
  return GemTable;
}

export function Get_Search_filter_sidebar_color() {
  return Search_filter_sidebar_color;
}

export function Contact_Us() {
  return ContactUs;
}

export function Q_A() {
  return FAQ;
}

export function Get_Video() {
  return Video;
}

export function Get_Index() {
  return Index;
}

export function Get_Map() {
  return Map_image;
}

export function Get_User() {
  return Users;
}
