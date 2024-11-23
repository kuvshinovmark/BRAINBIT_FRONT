import { IGame } from "@/types"

interface IProps {
  gameList: IGame[]
  setSelectGame: (game: IGame) => void
  setCreatingState: () => void
}

export default function MainList ({gameList, setSelectGame, setCreatingState}: IProps) {


  const getGames = gameList.map((game, index) => 
    <div key={index+"game"} className="border-2 border-[#d6c4a8] m-2 rounded-xl p-2 px-4 flex justify-between">
      <div className="w-10/12 my-auto">
        <p className="font-semibold">{game.name}</p>
        <p>Игроков: {game.clients.length}</p>
        <p className="italic">{game.description}</p>
      </div>

      <button onClick={() => setSelectGame(game)} className="btn">Перейти в лобби</button>
    </div>
  )

  return (
    <div className="flex flex-col">
      {getGames}
      <button onClick={setCreatingState} className="btn mx-auto">Новая игра</button>
    </div>
  );
}