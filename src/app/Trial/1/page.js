import Link from "next/link";
const Canary1961Page = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen font-sans text-white bg-gray-900">
        <h3 className="mb-4"></h3>
        <span className="p-4 text-center border border-white">
          Found Word<br />
          +
          <br />
          "When Yuri broke free of gravity's hold, <br />
          This number marked a story untold. <br />
          A year of firsts, a year of the brave, <br />
          Can you guess the number, be not a knave?"
          <br />
          =
          <br />
          KEY
        </span>
        <br />
        <br />
        <br />
        <span className="text-center">
          <Link
            href="https://emn178.github.io/online-tools/crc32.html"
            target="_blank"
            className="underline hover:text-gray-300"
          >
            Use this tool
          </Link>
          with the KEY (all characters should be capital) to generate the
          RESULT and then head over to
        </span>
        <span className="p-2 border border-white">www.teasurehunt.saavyas.in/RESULT</span>
      </div>
    );
  };
  
  export default Canary1961Page;
  