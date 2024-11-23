import { getGame, getRoles } from "@/api";
import { IGame, IRole } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IProps {
  game: IGame
  back: () => void
  update: (game: IGame, index: number) => void
}

export default function SelectGame ({game, back, update}: IProps) {
  const router = useRouter()
  const [roles, setRoles] = useState<IRole[]>([]);

  const selectRole = (role: IRole, index: number) => {
    game.clients.push({
      name: "User (Я)",
      role: role.name
    });
    roles.splice(index, 1);
    setRoles([...roles]);
  }

  const updatePage = async () => {
    console.log("Update");
    
    let roleList = await getRoles();
    console.log(roleList);

    // let game = await getGame(game = 1)
    
    setRoles(roleList);
  }


  useEffect(() => {
    updatePage();
    setInterval(() => updatePage(), 1000);
  }, [])

  return (
    <>
      <div className="border-2 border-[#d6c4a8] m-2 rounded-xl p-2 px-4 flex flex-col">
        <p className="font-semibold">{game.name}</p>
        <p>Игроков: {game.clients.length}</p>
        <p className="italic">{game.description}</p>
      </div>

      {game.clients.map((clients, index) => 
      <div key={index+"user"} className="border-2 border-[#d6c4a8] m-2 rounded-xl p-2 px-4 flex flex-col">
        <p><b>{clients.name}</b> -  {clients.role}</p>
      </div>)}

      {roles.length !== 0 && <p className="ml-2 mt-6">Доступен выбор роли:</p>}
      {roles.map((role, index) => 
        <button key={index+"role"} onClick={() => selectRole(role, index)} className="btn">{role.name}</button>
      )}

      <div className="flex justify-center mt-2">
        <button onClick={back} className="btn w-20">Назад</button>
        <button onClick={() => router.push("/story")} className={`btn w-20 ${game.clients.length < 2 && "!cursor-default hover:bg-[#f0e8dd] bg-[#f0e8dd] text-gray-400"}`} disabled={game.clients.length < 2}>Старт</button>
      </div>
    </>
  );
}