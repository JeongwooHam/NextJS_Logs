"use client";

import ImageDropBox from "@/components/ImageDropBox";
import ImageList from "@/components/ImageList";
import LogoBox from "@/components/LogoBox";
import SearchBox from "@/components/SearchBox";
import { useState } from "react";

export default function Client() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <main className='w-full p-2 flex flex-col gap-4'>
      <LogoBox />
      <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />
      <ImageDropBox />
      <ImageList />
    </main>
  );
}
