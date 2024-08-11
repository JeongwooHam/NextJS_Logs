"use client";

import OneImage from "./OneImage";

export default function ImageList() {
  return (
    <section className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2'>
      <OneImage />
      <OneImage />
      <OneImage />
      <OneImage />
    </section>
  );
}
