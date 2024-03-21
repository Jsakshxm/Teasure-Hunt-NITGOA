import Link from "next/link";

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 text-white bg-black'>
      <h1 className='text-2xl font-extrabold text-center md:text-4xl'>Canary-1961</h1>
      <Link href="Trial"><button className='p-2 mt-4 font-semibold transition duration-300 ease-out border border-purple-700 w-44 sm:w-auto sm:px-10 hover:bg-purple-700 hover:text-white'> 
        Unlock
      </button> </Link>
      <p className='pt-6 text-xl font-normal text-center'>
        "Code is like humor. When you have to explain it, it’s bad."
      </p>
      <p className='text-xl font-normal text-center'>
        – Cory House
      </p>
    </div>
  );
}

export default Page;
