import Link from "next/link"

export default function Menu () {
  return (
    <div className="bg-[#fef3e2] h-min  my-auto border-2 border-[#d6c4a8] rounded-l-xl truncate absolute right-0 flex flex-col old-text">
      <Link href="/">
        <button className="w-20 h-20">
          MAIN
        </button>
      </Link>
      <Link href="/story">
        <button className="w-20 h-20">
          STORY 
        </button>
      </Link>
      <Link href="/story/history">
        <button className="w-20 h-20">
          HISTORY 
        </button>
      </Link>
    </div>
  );
}