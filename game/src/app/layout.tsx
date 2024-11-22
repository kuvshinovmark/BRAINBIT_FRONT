import "./globals.css";
import Menu from "@/components/Menu";

export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="flex bg-[#7e4226ad] h-screen">
      {/* <Menu /> */}
      {children}
    </div>
  )
}