import { IAction, IExam } from "@/types";

interface IProps {
  actions?: IAction[] | null
  exam?: IExam | null
}

export default function Actions ({actions = null, exam}: IProps) {

  let buttons = actions?.map((e, index) => 
    <button key={"btn"+index} className={`w-full text-sm relative border-2 border-[#d6c4a8] ${!e.isLocked ? 'hover:bg-[#ffefd6]' : 'bg-[#fbf6ee] text-gray-500'}`} disabled={e.isLocked} onClick={() => console.log("test")}>
      {e.title}
      {e.isLocked && <img src="/lock.png" alt="" className="absolute w-12 left-[calc(50%-1.5rem)] top-[calc(50%-1.5rem)] bg-[#fbf6ee] rounded-full"/>}
    </button>
  )

  let action = [
    <p className="text-center m-auto">{exam?.title}</p>, 
    <button className="border-2 border-[#d6c4a8] m-2 rounded-xl p-1 px-2 hover:bg-[#ffefd6] cursor-pointer">Продолжить</button>
  ]

  return (
    <div className="border-2 h-16 border-[#d6c4a8] mt-4 rounded-xl flex truncate">
      {buttons}
      {exam?.title && action}
    </div>
  );
}