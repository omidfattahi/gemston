"use client";
import { ReactNode, useEffect, useState } from "react";
import { State_component_value } from "./Context";
import {
  Blog_type,
  Q_A,
  ContactUs_type,
  Contact_Us,
  Get_Search_filter_sidebar_color,
  Get_blog,
  Get_stone,
  Get_stone_table,
  Question_type,
  Search_filter_sidebar_color_type,
  Stone_table_type,
  Stone_type,
  Video_type,
  Get_Video,
  Index_type,
  Get_Index,
  Map_type,
  Get_Map,
  Get_User,
  Users_type
} from "@/api/api";

function Data(p: { children: ReactNode }) {
  // usestate for blog data
  const [Blog, Setblog] = useState<Blog_type[]>([]);

  // usestate for stone data
  const [Stone, Setstone] = useState<Stone_type[]>([]);

  // usestate for stone_table data
  const [Stone_table, Setstone_table] = useState<Stone_table_type[]>([]);

  //usestate for contactus
  const [contactus, Setcontactus] = useState<ContactUs_type[]>([]);

  //usestate for FAQ
  const [Faq, Setfaq] = useState<Question_type[]>([]);

  //usestate for map
  const [Map, Set_map] = useState<Map_type[]>([]);

  // usestate for Search_filter data
  const [Search_filter, Set_search_filter] = useState<
    Search_filter_sidebar_color_type[]
  >([]);

  // usestate for video data
  const [video, Set_video] = useState<Video_type[]>([]);

  // usestate for index data
  const [Index, Set_Index] = useState<Index_type[]>([]);

  //usestate for users
  const [User, Set_user] = useState<Users_type[]>([]);

  // this context is for store all data to prevent from using more context
  const total = [
    Blog,
    Stone,
    Stone_table,
    Search_filter,
    contactus,
    Faq,
    video,
    Index,
    Map,
    User,
  ];



  // get value of Get_User function and store it in its related usestate
  useEffect(() => {
    (async () => {
      const res: Blog_type[] = await Get_blog();
      Setblog(res);
    })();
    return () => {
      Setblog([]);
    };
  }, []);

  // get value of Get_stone function and store it in its related usestate
  useEffect(() => {
    (async () => {
      const res: Stone_type[] = await Get_stone();
      Setstone(res);
    })();
    return () => {
      Setstone([]);
    };
  }, []);

  // get value of Get_stone_table function and store it in its related usestate
  useEffect(() => {
    (async () => {
      const res: Stone_table_type[] = await Get_stone_table();
      Setstone_table(res);
    })();
    return () => {
      Setstone_table([]);
    };
  }, []);

  // get value of Search_filter function and store it in its related usestate
  useEffect(() => {
    (async () => {
      const res: Search_filter_sidebar_color_type[] =
        await Get_Search_filter_sidebar_color();
      Set_search_filter(res);
    })();
    return () => {
      Set_search_filter([]);
    };
  }, []);

  // get value of Contact_us function and store it in its related usestate
  useEffect(() => {
    (async () => {
      const res: ContactUs_type[] = await Contact_Us();
      Setcontactus(res);
    })();
    return () => {
      Setcontactus([]);
    };
  }, []);

  // get value of FAQ function and store it in its related usestate
  useEffect(() => {
    (async () => {
      const res: Question_type[] = await Q_A();
      Setfaq(res);
    })();
    return () => {
      Setfaq([]);
    };
  }, []);

  // get value of Get_video function and store it in its related usestate
  useEffect(() => {
    (async () => {
      const res: Video_type[] = await Get_Video();
      Set_video(res);
    })();
    return () => {
      Set_video([]);
    };
  }, []);

  // get value of Get_Index function and store it in its related usestate
  useEffect(() => {
    (async () => {
      const res: Index_type[] = await Get_Index();
      Set_Index(res);
    })();
    return () => {
      Set_Index([]);
    };
  }, []);

  // get value of Get_Map function and store it in its related usestate
  useEffect(() => {
    (async () => {
      const res: Map_type[] = await Get_Map();
      Set_map(res);
    })();
    return () => {
      Set_map([]);
    };
  }, []);

    // get value of Get_user function and store it in its related usestate
    useEffect(() => {
      (async () => {
        const res: Users_type[] = await Get_User();
        Set_user(res);
      })();
      return () => {
        Set_user([]);
      };
    }, []);

  return (
    <>
      {/* send value to the context */}
      <State_component_value total={total}>{p.children}</State_component_value>
    </>
  );
}

export default Data;
