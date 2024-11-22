import Layout from "@/app/layout"
import Page from "@/components/Page/Page";

export default function Main ()  {
  return (
    <Layout>

      <Page isStack/>
      {/* main */}
      <Page/>
    </Layout>
  );
}