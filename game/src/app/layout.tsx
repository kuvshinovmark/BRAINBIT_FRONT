import UserInfo from "@/components/UserInfo";
import "./globals.css";
import Menu from "@/components/Menu";

export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="flex bg-[#784922ad] h-screen">
      <UserInfo/>
      {/* <Menu/> */}
      {children}
    </div>
  )
}