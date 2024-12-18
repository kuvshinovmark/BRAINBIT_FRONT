import { getGames, postJoinToGame } from "@/api";
import Layout from "@/app/layout";
import CreatingGame from "@/components/Games/CreatingGame";
import MainList from "@/components/Games/MainList";
import SelectGame from "@/components/Games/SelectGame";
import Menu from "@/components/Menu";
import { IGame } from "@/types";
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { use, useEffect, useState } from "react";

export default function Main () {
  // let gameList: IGame[] = 
  const [gameList, setGameList] = useState<IGame[]>([]);
  const router = useRouter()

  //menu state
  // 0 - общий список
  // 1 - Выбранная игра 
  // const [selectGame, setSelectGame] = useState<IGame | null>(null);
  const [creatingState, setCreatingState] = useState(false);

  const createGame = async () => {
    // gameList.push(game);
    // setGameList([...gameList]);
    await updatePage();
    setCreatingState(false);
  }

  const clearGame = () => {
    setCreatingState(false);
  }

  const updateGame = (newData: IGame, index: number) => {
    gameList[index] = newData;
    setGameList([...gameList]);
  }

  const updatePage = async () => {
    try {
      let list = await getGames();
      console.log(list);
      setGameList(list);
    } catch {
      console.log("Error getGameList");
    }
  }

  const setSelectGame = async (game: IGame) => {
    const id = sessionStorage.getItem("ID");
    if (id) {
      console.log("id - " + sessionStorage.getItem("ID"));
      console.log(id);
      console.log(game.id);
      let x = await postJoinToGame(Number(id), game.id);
      console.log(x);
      
      router.push("/lobby/"+game.id)
    } else {
      alert("нет ID");
    }

  }

  useEffect(() => {
    updatePage();
  }, [])

  return (
    <Layout>
      <div className={`bg-[#fef3e2] border border-[#d6c4a8] shadow-lg rounded-xl p-8 m-auto old-text w-[36rem]`}>
        
            {!creatingState ? 
            // setSelectGame={(e) => setSelectGame(e)}
              <MainList gameList={gameList} setSelectGame={(e) => setSelectGame(e)} setCreatingState={() => setCreatingState(true)}/> : 
              <CreatingGame clearGame={clearGame} createGame={createGame}/>
            }

          {/* <button onClick={updatePage}>updatePage</button> */}
      </div>
    </Layout>
  );
}