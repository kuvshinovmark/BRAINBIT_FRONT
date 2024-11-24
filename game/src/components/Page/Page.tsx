import { IAction, IPage } from "@/types";
import Actions from "./Actions";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

interface IProps {
  page: IPage
  isStack?: boolean
  isMain?: boolean
  goto?: string | null
  addClass?: string
  load?: boolean
  click: (action: IAction) => void
  m?: number
}

export default function Page ({page, isStack = false, isMain = false, goto = null, addClass, m, load = false, click}: IProps) {
  const router = useRouter()
  let stackStyle = isStack && 'rotate-12 absolute left-[-400px]';
  let mainStyle = isMain && 'absolute right-[-400px] top-[calc(50%-45vh)]';
  
  const changePage = () => {
    if (goto) {
      router.push(goto) ;
    }
  }

  useEffect(() => {
    console.log("render");
    
  })
   
  return (
      <div onClick={changePage} className={
        `w-[600px] h-[90vh] bg-[#fef3e2] border border-[#d6c4a8] shadow-lg rounded-xl p-8 m-auto old-text
        ${stackStyle} ${mainStyle} ${goto && 'cursor-pointer'} ${addClass}
        `
        } style={m ? {marginLeft: -m+'px', marginTop: -m+'px'} : {}}>
      
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold">{page.title}</p>
          <p>{page.time}</p>
          <p className="font-semibold uppercase">{page.role}</p>
          <p className=" w-8/12">{page.description}</p>
        </div>
        {/* <div className="w-60 min-w-60 h-60 border-2 border-[#d6c4a8] rounded-xl text-center"> */}
          <img src={page.image} alt="" className="w-60 h-60 rounded-xl border-2 border-[#d6c4a8] min-w-60"/>
        {/* <pre className="text-[5.2px] ">
        {`
....................  ....   ...........                    
..................:-==+++===+++++==--====::                 
..............:-++*##***+++++*##**+==----+=-.               
............::=+*+**###*+++*+*#####**+++=-=+:.              
............:-=*#***######*#*########*+====+=:              
............:=##########****+++++*###*+*==++++-:.           
...........::*#%%#%%##*+==--:::::-=**##***+++**+:           
..........:.-*#%%%%##*+==--:::.:.:=+*#####**++++-.  .       
...........:*##%%%%#**+==--:::::::=++=**#**++++*-.         .
...........-#%%%%%##**+=-:::-:--::::..::-=**#**+..         .
...........-*%%%%#*#*++=--:.----:........:-*#**:... ..    ..
............:+%%%#######**+--+-++***+==--::+##+........   ..
..............=%%*#####%%###+=-++*##*++=-::=#*:.............
.............:##%###%###*##%+::--*+*+===-:.-*-+:............
..............*###%%##*++*##+:.::-++=-:...:-=:=.............
..............-#%*%##****###=:::::.::-::.::-=-:.............
.......:::.:...+######***#%#=-:::-:...:-----::..............
.......:::::::::*%#######%#%#*+*+:==:::-=-+-::..............
......::::::::::::*%####%%%%##*=---==:--=-+:................
......::::::::::::*%%##%%%%%*+*====+=---==+.................
:.....::::::::::::+%%##%%%%#*++=====+--==+=..::::::::.......
::....::::::::::::-#%%#%%######*+=----=+++::::::::::........
::....:::::::::--=+*%%%%%%%%#*+=----==+*=-:::::::::::::.....
::::::::::::-=*###%%#%%%%%%#*+*+===+**+-:-==+++=-::::::.....
::::::::--=**###%%%%%%%%%%%%%#%###**+=--:=#+==*#+--:::::....
:::::::-=*#####%%%%%%%%%%%%%%%##+=-==----=-#*=++=-==-:::...:
::::::=+*#%###%%%%%%%%##%%%%%#**+=-=-----==*#*+=--===-::...:
:::::-=*#%#####%%%#%%%#########*++==-==--=+##*+=-==+++=-..::
:::::-=*##########**#%###***###**+=-==---=*#*++*##+=*==-::::


`}
        </pre> */}
        {/* </div> */}
      </div>


      <div className="border-2 h-[calc(90vh-25rem)] border-[#d6c4a8] mt-4 rounded-xl p-2 overflow-y-scroll">
        <p>{page.text}</p>
      </div>

      <Actions click={(e) => click(e)} actions={page.actions} exam={page.exam} load={load}/>      
    </div>
  );
}