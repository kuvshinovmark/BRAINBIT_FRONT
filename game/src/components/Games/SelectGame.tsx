import { IGame } from "@/types";
import { useRouter } from "next/router";

interface IProps {
  game: IGame
  back: () => void
  update: (game: IGame, index: number) => void
}

export default function SelectGame ({game, back, update}: IProps) {
  const router = useRouter()

  const selectRole = (role: string, index: number) => {
    game.users.push({
      name: "User (Я)",
      role: role
    });
    game.roleList.splice(index, 1);
    update(game, index);
  }

  return (
    <>
      <div className="border-2 border-[#d6c4a8] m-2 rounded-xl p-2 px-4 flex flex-col">
        <p className="font-semibold">{game.name}</p>
        <p>Игроков: {game.users.length}</p>
        <p className="italic">{game.description}</p>
      </div>

      {game.users.map((user, index) => 
      <div key={index+"user"} className="border-2 border-[#d6c4a8] m-2 rounded-xl p-2 px-4 flex flex-col">
        <p><b>{user.name}</b> -  {user.role}</p>
      </div>)}

      {game.roleList.length !== 0 && <p className="ml-2 mt-6">Доступен выбор роли:</p>}
      {game.roleList.map((role, index) => 
        <button key={index+"role"} onClick={() => selectRole(role, index)} className="btn">{role}</button>
      )}

      <div className="flex justify-center mt-2">
        <button onClick={back} className="btn w-20">Назад</button>
        <button onClick={() => router.push("/story")} className={`btn w-20 ${game.users.length < 2 && "!cursor-default hover:bg-[#f0e8dd] bg-[#f0e8dd] text-gray-400"}`} disabled={game.users.length < 2}>Старт</button>
      </div>
    </>
  );
}