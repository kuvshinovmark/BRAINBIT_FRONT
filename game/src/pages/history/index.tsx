import Layout from "@/app/layout"
import Page from "@/components/Page/Page";
import { useState } from "react";

export default function History ()  {
  const [list, setList] = useState([
    {
      number: 2,
      swap: 20
    },
    {
      number: 3,
      swap: 10
    },
    {
      number: 4,
      swap: 0
    }
  ])


  const [animationState, setAnimationState] = useState(false);
  const selectPage = (number: number) => {
    setAnimationState(true);
    let newItem = list[number];
    list.push(newItem);
    list.splice(number, 1);
    list.forEach((e, index) => {
      e.swap = 10*(list.length-(index+1));
    });
    setList([...list]);
    setTimeout(() => setAnimationState(false), 1000);
  }

  const selectList = list.map((e, index) => 
    <button key={index+"history"} className="flex flex-col w-16 h-16 border-2 border-[#d6c4a8]" onClick={() => selectPage(index)}>
      {e.number}
    </button>
  )

  return (
    <Layout>
      <div className="bg-[#fef3e2] h-min  my-auto border-2 border-[#d6c4a8] rounded-r-xl truncate">
        {selectList}
      </div>

      <div className={animationState ? "animation" : ""}>
        {list.map((e, index) => 
          <Page key={"page"+index} m={e.swap} addClass={`absolute top-[calc(50%-45vh)] left-[calc(50%-300px)]`} number={e.number}/>
        )}
      </div>

      <Page isMain goto={"/"} number={5}/>
    </Layout>
  );
}