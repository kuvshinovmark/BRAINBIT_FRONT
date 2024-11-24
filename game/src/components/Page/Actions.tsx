import { IAction, IExam } from "@/types";
import { useEffect } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
// import {Spinner} from "@nextui-org/react";
interface IProps {
  actions?: IAction[] | null
  exam?: IExam | null
  load?: boolean
  click: (action: IAction) => void
}

export default function Actions ({actions = null, exam, load = false, click}: IProps) {

  let buttons = actions?.map((e, index) => 
    <button key={"btn"+index} className={`w-3/12 text-wrap text-xs relative border-2 border-[#d6c4a8] ${!e.isLocked ? 'hover:bg-[#ffefd6]' : 'bg-[#fbf6ee] text-gray-500'}`} disabled={e.isLocked} onClick={() => click(e)}>
      <p>{e.title}</p>
      {/* {e.isLocked && <img src="/lock.png" alt="" className="absolute w-12 left-[calc(50%-1.5rem)] top-[calc(50%-1.5rem)] bg-[#fbf6ee] rounded-full"/>} */}
    </button>
  )

  let action = [
    <p key={'title'} className="text-center m-auto">{exam?.title}</p>, 
    <button key={'btn'} className="border-2 border-[#d6c4a8] m-2 rounded-xl p-1 px-2 hover:bg-[#ffefd6] cursor-pointer">Продолжить</button>
  ]

  useEffect(() => {

  }, [actions])

  return (
    <div className="border-2 h-20 border-[#d6c4a8] mt-4 rounded-xl flex truncate">
      {load ? 
      <>
        <div className="spinner h-10 w-10"/>
      </> : 
      <>
        {buttons}
        {exam?.title && action}
      </>}

    </div>
  );
}