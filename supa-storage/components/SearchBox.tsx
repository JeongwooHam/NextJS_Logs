"use client";

import { Input } from "@material-tailwind/react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
};

export default function SearchBox({ searchInput, setSearchInput }: Props) {
  return (
    <Input
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      label='Search Images'
      icon={<i className='fa-solid fa-magnifying-glass' />}
    />
  );
}
