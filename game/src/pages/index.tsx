import Layout from "@/app/layout";
import CreatingGame from "@/components/Games/CreatingGame";
import MainList from "@/components/Games/MainList";
import SelectGame from "@/components/Games/SelectGame";
import Menu from "@/components/Menu";
import { IGame } from "@/types";
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { use, useState } from "react";

export default function Main () {
  // let gameList: IGame[] = 
  const [gameList, setGameList] = useState<IGame[]>([
    {
      name: "Игра 1",
      description: "Заброшенный парк атракционов, маньяк с бензопилой",
      roleList: [],
      users: [
        {
          name: "Вася Пупкин",
          role: "Маньяк",
        },
        {
          name: "Оля лукина",
          role: "Жертва",
        }
      ]
    },
    {
      name: "Любимая",
      description: "Заброшенный парк атракционов, маньяк с бензопилой",
      roleList: [],
      users: [
        {
          name: "Вася Пупкин",
          role: "Маньяк",
        },
        {
          name: "Оля лукина",
          role: "Жертва",
        }
      ]
    },
    {
      name: "Игра 3",
      description: "Заброшенный парк атракционов, маньяк с бензопилой",
      roleList: ["Жертва"],
      users: [
        {
          name: "Вася Пупкин",
          role: "Маньяк",
        }
      ]
    }
  ]);
  const router = useRouter()

  //menu state
  // 0 - общий список
  // 1 - Выбранная игра 
  const [selectGame, setSelectGame] = useState<IGame | null>(null);

  // 0 - Основной экран и создание новой игры
  // 1 - Настройка игры
  // 2 - подтверждение
  const [menuState, setMenuState] = useState(0);

  const getGames = gameList.map((e, index) => 
    <div key={index+"game"} className="border-2 border-[#d6c4a8] m-2 rounded-xl p-2 px-4 flex justify-between">
      <div className="w-10/12 my-auto">
        <p className="font-semibold">{e.name}</p>
        <p>Игроков: {e.users.length}</p>
        <p className="italic">{e.description}</p>
      </div>

      <button onClick={() => setSelectGame(e)} className="btn">Перейти в лобби</button>
    </div>
  )

  const [newName, setNewName] = useState("");
  const nameChange = (e) => setNewName(e.target.value);

  const [creatingState, setCreatingState] = useState(false);

  const [newDescription, setNewDescription] = useState("");

  const createGame = (game: IGame): void => {
    gameList.push(game);
    setGameList([...gameList]);
    setCreatingState(false);
  }

  const clearGame = () => {
    setCreatingState(false);
  }

  const updateGame = (newData: IGame, index: number) => {
    gameList[index] = newData;
    setGameList([...gameList]);
  }

  return (
    <Layout>
      <div className={`bg-[#fef3e2] border border-[#d6c4a8] shadow-lg rounded-xl p-8 m-auto old-text w-[36rem]`}>
        
          {!selectGame ? <>
            
            {!creatingState ? 
              <MainList gameList={gameList} setSelectGame={(e) => setSelectGame(e)} setCreatingState={() => setCreatingState(true)}/> : 
              <CreatingGame clearGame={clearGame} createGame={createGame}/>
            }
            
          </> : <>
            <SelectGame game={selectGame} back={() => setSelectGame(null)} update={(game, index) => {updateGame(game, index)}}/>
          </>}
      </div>
    </Layout>
  );
}