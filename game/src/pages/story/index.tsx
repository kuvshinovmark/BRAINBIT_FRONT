import Layout from "@/app/layout"
import Menu from "@/components/Menu";
import Page from "@/components/Page/Page";

export default function Main ()  {
  return (
    <Layout>
      <Menu />
      <Page isStack goto={"/story/history"} number={4}/>
      <Page number={5}/>
    </Layout>
  );
}