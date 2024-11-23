import { postGame } from "@/api";
import { IGame } from "@/types";
import { useState } from "react";

interface IProps {
  createGame: () => void
  clearGame: () => void
}

export default function CreatingGame ({createGame, clearGame}: IProps) {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const create = async () => {
    // let newGame: IGame = {
    //   name: newName,
    //   description: newDescription,
    //   users: []
    // }
    let x = await postGame(newName, newDescription);
    console.log(x);
    createGame();
  }
  
  const clear = () => {
    setNewName("");
    setNewDescription("");
    clearGame();
  }
  
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <p className="text-lg font-semibold text-center mb-2">Создание новой игры</p>
        
        <input type="text" placeholder="name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
        <input type="text" placeholder="description" className="my-6" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}/>

        <p className="text-center">Создать игру?</p>
        <div className="flex justify-center mt-2">
          <button onClick={create} className="btn w-20">Да</button>
          <button onClick={clear} className="btn w-20">Нет</button>
        </div>
      </div>
    </div>
  );
}