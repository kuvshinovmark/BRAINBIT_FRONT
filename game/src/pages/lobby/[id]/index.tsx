import Layout from "@/app/layout"
import { getGame, getRoles } from "@/api";
import { IGame, IRole } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Lobby() {
  
  const router = useRouter()
  const [roles, setRoles] = useState<IRole[]>([]);
  const [game, setGame] = useState<IGame>();

  const {id} = router.query;
  
  const updatePage = async () => {
    console.log("Update");
    
    let roleList = await getRoles();

    try {
      if (id)
      setGame(await getGame(Number(id)));
      // console.log(game?.clients);
      
    } catch {
      console.log("error get game");
    }
    
    setRoles(roleList);
  }

  const selectRole = (role: IRole, index: number) => {
    game?.clients.push({
      name: "User (Я)",
      role: role.name
    });
    roles.splice(index, 1);
    setRoles([...roles]);
  }


  useEffect(() => {
    updatePage();
    const intervalId = setInterval(() => updatePage(), 3000);
    return () => {
      clearInterval(intervalId); // очищаем интервал при размонтировании компонента
    };
  }, [])

  return (
    <Layout>

      {game != null && 

        <div className={`bg-[#fef3e2] border border-[#d6c4a8] shadow-lg rounded-xl p-8 m-auto old-text w-[36rem]`}>
        <div className="border-2 border-[#d6c4a8] m-2 rounded-xl p-2 px-4 flex flex-col" onClick={() => console.log(game.clients)}>
          <p className="font-semibold">{game.name}</p>
          <p>Игроков: {game.clients.length}</p>
          <p className="italic">{game.description}</p>
        </div>

        {game.clients.map((clients, index) => 
        <div key={index+"user"} className="border-2 border-[#d6c4a8] m-2 rounded-xl p-2 px-4 flex flex-col">
          <p><b>{clients.name}</b> -  {clients.role.name}</p>
        </div>)}

        {/* {roles.length !== 0 && <p className="ml-2 mt-6">Доступен выбор роли:</p>}
        {roles.map((role, index) => 
          <button key={index+"role"} onClick={() => selectRole(role, index)} className="btn">{role.name}</button>
        )} */}

        <div className="flex justify-center mt-2">
          <button onClick={() => router.push("/")} className="btn w-20">Назад</button>
          <button onClick={() => router.push("/story")} className={`btn w-20 ${game.clients.length < 2 && "!cursor-default hover:bg-[#f0e8dd] bg-[#f0e8dd] text-gray-400"}`} disabled={game.clients.length < 2}>Старт</button>
        </div>
      </div>

      }
      
    </Layout>
  );
}