import Actions from "./Actions";
import { useRouter } from 'next/navigation'

interface IProps {
  number: number
  isStack?: boolean
  isMain?: boolean
  goto?: string | null
  addClass?: string

  m?: number
}

export default function Page ({isStack = false, isMain = false, goto = null, addClass, number, m}: IProps) {
  const router = useRouter()
  let stackStyle = isStack && 'rotate-12 absolute left-[-400px]';
  let mainStyle = isMain && 'absolute right-[-400px] top-[calc(50%-45vh)]';
  
  const changePage = () => {
    if (goto) {
      router.push(goto);
    }
  }

  return (
      <div onClick={changePage} className={
        `w-[600px] h-[90vh] bg-[#fef3e2] border border-[#d6c4a8] shadow-lg rounded-xl p-8 m-auto old-text
        ${stackStyle} ${mainStyle} ${goto && 'cursor-pointer'} ${addClass}
        `
        } style={m ? {marginLeft: -m+'px', marginTop: -m+'px'} : {}}>
      
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold">ДЕЛО №{number}</p>
          <p>21.10.2024</p>
          <p className="font-semibold">ЖЕРТВА</p>
          <p className=" w-8/12">Темный переулок города Нью-Йорк. Заброшенный склад портового района.</p>
        </div>
        <div className="w-60 h-60 border-2 border-[#d6c4a8] rounded-xl text-center">
        <pre className="text-[5.2px] ">
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
        </pre>
        </div>
      </div>


      <div className="border-2 h-[calc(90vh-24rem)] border-[#d6c4a8] mt-4 rounded-xl p-2 overflow-y-scroll">
        <p>В темном переулке города, где свет фонарей едва пробивался сквозь густую тьму, мужчина по имени Алекс спешил домой после долгого рабочего дня. Он чувствовал, что за ним кто-то следит, но каждый раз, обернувшись, не замечал никого. Страх сжимал его сердце, и он ускорил шаг.

Внезапно он услышал шаги позади себя — быстрые и ритмичные. Алекс резко повернулся и увидел силуэт в капюшоне, который приближался к нему. Внутри него зашевелилось предчувствие беды. Он бросился в сторону, вглубь переулка, стараясь не издавать ни звука.

Алекс знал, что нужно найти укрытие. Он заметил открытую дверь старого склада и, не раздумывая, забежал внутрь. Внутри было темно и тихо. Он затаился за кучей ящиков, стараясь не дышать. Сердце колотилось в груди, и он прислушивался к звукам снаружи.

Скоро он услышал шаги. Они приближались к складу. Алекс сжимал кулаки, пытаясь успокоить себя. Внезапно дверь скрипнула, и в проем вошел маньяк. Его лицо скрывал капюшон, но глаза сверкали жадностью и ненавистью.

Алекс замер. Он знал, что если его поймают, это будет конец. Он медленно отодвинулся к задней стене склада, стараясь остаться незамеченным. Маньяк начал осматриваться, его шаги были уверенными и жестокими.

В этот момент Алекс заметил окно на противоположной стороне. Это был его единственный шанс. Он осторожно поднялся на ноги и, стараясь сделать как можно меньше шума, направился к окну. Но вдруг пол под ним треснул от тяжести его шагов. Маньяк обернулся.

Алекс бросился к окну, разбив стекло локтем. Он выскочил наружу и побежал по узкой улочке, не оглядываясь назад. Страх придавал ему сил, и вскоре он оказался на главной улице, где люди беззаботно проходили мимо.

Пока он бежал в сторону освещенных витрин магазинов, Алекс понимал одно: он выживет. В этот вечер он оставил позади не только маньяка, но и страх, который долго мучил его.</p>
      </div>

    <Actions actions={[{text: "Действие 1"}, {text: "Действие 2"}, {text: "Действие 3"}, {text: "Действие 4", lock: true}]}/>
    {/* <Actions text={"Проверка - Необходимо затаиться!"}/> */}
      
    </div>
  );
}