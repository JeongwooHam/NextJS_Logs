export default function ImageDropBox() {
  return (
    <section className='w-full py-5 border-4 border-dotted border-indigo-700 flex flex-col items-center justify-center gap-5'>
      <input type='file' />
      <p className='text-lg'>
        파일을 여기에 끌어다 놓거나 클릭하여 업로드하세요.
      </p>
    </section>
  );
}
