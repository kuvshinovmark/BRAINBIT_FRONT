import Link from "next/link"

export default function Menu () {
  return (
    <div className="absolute bg-yellow-300 w-[200px] h-20 right-0 flex flex-col gap-4">
      <Link href="/">MAIN</Link>
      <Link href="/history">HISTORY</Link>
    </div>
  );
}