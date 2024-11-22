import Layout from "@/app/layout"
import Page from "@/components/Page/Page";

export default function Main ()  {
  return (
    <Layout>
      <Page isStack goto={"/history"} number={4}/>
      <Page number={5}/>
    </Layout>
  );
}