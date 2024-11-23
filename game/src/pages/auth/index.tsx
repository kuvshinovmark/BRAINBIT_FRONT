import Layout from "@/app/layout";
import Link from "next/link"

export default function Auth () {
  return (
    <Layout>
      <div className={`bg-[#fef3e2] border border-[#d6c4a8] shadow-lg rounded-xl p-8 m-auto old-text`}>
        <p className="text-center mb-2">Выберите роль</p>
        <Link href={"/"}>
          <button className="border-2 border-[#d6c4a8] m-2 rounded-xl p-2 px-4 hover:bg-[#ffefd6] cursor-pointer">Убийца</button>
          <button className="border-2 border-[#d6c4a8] m-2 rounded-xl p-2 px-4 hover:bg-[#ffefd6] cursor-pointer">Жертва</button>
        </Link>

      </div>
    </Layout>
  );
}