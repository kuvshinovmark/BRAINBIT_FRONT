import Layout from "@/app/layout"
import Page from "@/components/Page/Page";

export default function History ()  {
  return (
    <Layout>
      <Page addClass="absolute left-[calc(50%-300px-30px)] top-[calc(50%-45vh-30px)]" number={2}/>
      <Page addClass="absolute left-[calc(50%-300px-15px)] top-[calc(50%-45vh-15px)]" number={3}/>
      <Page addClass="absolute left-[calc(50%-300px)] top-[calc(50%-45vh)]" number={4}/>

      {/* <Page isStack/> */}
      {/* <Page/> */}
      <Page isMain goto={"/"} number={5}/>
    </Layout>
  );
}