import Layout from "@/app/layout"
import Page from "@/components/Page/Page";
import { IPage } from "@/types";
import { useState } from "react";

export default function History ()  {
  const [list, setList] = useState([
    {
      number: 2,
      swap: 20
    },
    {
      number: 3,
      swap: 10
    },
    {
      number: 4,
      swap: 0
    }
  ])


  const [pageList, setPageList] = useState<IPage[]>([
    {
      title: "ДЕЛО №1",
      number: 1,
      date: "21.10.2024 16:34",
      role: "Жертва",
      description: "Темный переулок города Нью-Йорк. Заброшенный склад портового района.",
      text: "В темном переулке города, где свет фонарей едва пробивался сквозь густую тьму, мужчина по имени Алекс спешил домой после долгого рабочего дня. Он чувствовал, что за ним кто-то следит, но каждый раз, обернувшись, не замечал никого. Страх сжимал его сердце, и он ускорил шаг. Внезапно он услышал шаги позади себя — быстрые и ритмичные. Алекс резко повернулся и увидел силуэт в капюшоне, который приближался к нему. Внутри него зашевелилось предчувствие беды. Он бросился в сторону, вглубь переулка, стараясь не издавать ни звука. Алекс знал, что нужно найти укрытие. Он заметил открытую дверь старого склада и, не раздумывая, забежал внутрь. Внутри было темно и тихо. Он затаился за кучей ящиков, стараясь не дышать. Сердце колотилось в груди, и он прислушивался к звукам снаружи. Скоро он услышал шаги. Они приближались к складу. Алекс сжимал кулаки, пытаясь успокоить себя. Внезапно дверь скрипнула, и в проем вошел маньяк. Его лицо скрывал капюшон, но глаза сверкали жадностью и ненавистью. Алекс замер. Он знал, что если его поймают, это будет конец. Он медленно отодвинулся к задней стене склада, стараясь остаться незамеченным. Маньяк начал осматриваться, его шаги были уверенными и жестокими. В этот момент Алекс заметил окно на противоположной стороне. Это был его единственный шанс. Он осторожно поднялся на ноги и, стараясь сделать как можно меньше шума, направился к окну. Но вдруг пол под ним треснул от тяжести его шагов. Маньяк обернулся. Алекс бросился к окну, разбив стекло локтем. Он выскочил наружу и побежал по узкой улочке, не оглядываясь назад. Страх придавал ему сил, и вскоре он оказался на главной улице, где люди беззаботно проходили мимо. Пока он бежал в сторону освещенных витрин магазинов, Алекс понимал одно: он выживет. В этот вечер он оставил позади не только маньяка, но и страх, который долго мучил его.",
      exam: {
        title: "Проверка - Необходимо затаиться!"
      }
    },
    {
      title: "ДЕЛО №2",
      number: 2,
      date: "21.10.2024 16:34",
      role: "Жертва",
      description: "Темный переулок города Нью-Йорк. Заброшенный склад портового района.",
      text: "В темном переулке города, где свет фонарей едва пробивался сквозь густую тьму, мужчина по имени Алекс спешил домой после долгого рабочего дня. Он чувствовал, что за ним кто-то следит, но каждый раз, обернувшись, не замечал никого. Страх сжимал его сердце, и он ускорил шаг. Внезапно он услышал шаги позади себя — быстрые и ритмичные. Алекс резко повернулся и увидел силуэт в капюшоне, который приближался к нему. Внутри него зашевелилось предчувствие беды. Он бросился в сторону, вглубь переулка, стараясь не издавать ни звука. Алекс знал, что нужно найти укрытие. Он заметил открытую дверь старого склада и, не раздумывая, забежал внутрь. Внутри было темно и тихо. Он затаился за кучей ящиков, стараясь не дышать. Сердце колотилось в груди, и он прислушивался к звукам снаружи. Скоро он услышал шаги. Они приближались к складу. Алекс сжимал кулаки, пытаясь успокоить себя. Внезапно дверь скрипнула, и в проем вошел маньяк. Его лицо скрывал капюшон, но глаза сверкали жадностью и ненавистью. Алекс замер. Он знал, что если его поймают, это будет конец. Он медленно отодвинулся к задней стене склада, стараясь остаться незамеченным. Маньяк начал осматриваться, его шаги были уверенными и жестокими. В этот момент Алекс заметил окно на противоположной стороне. Это был его единственный шанс. Он осторожно поднялся на ноги и, стараясь сделать как можно меньше шума, направился к окну. Но вдруг пол под ним треснул от тяжести его шагов. Маньяк обернулся. Алекс бросился к окну, разбив стекло локтем. Он выскочил наружу и побежал по узкой улочке, не оглядываясь назад. Страх придавал ему сил, и вскоре он оказался на главной улице, где люди беззаботно проходили мимо. Пока он бежал в сторону освещенных витрин магазинов, Алекс понимал одно: он выживет. В этот вечер он оставил позади не только маньяка, но и страх, который долго мучил его.",
      exam: {
        title: "Проверка - Необходимо затаиться!"
      }
    },
    {
      title: "ДЕЛО №3",
      number: 3,
      date: "21.10.2024 16:34",
      role: "Жертва",
      description: "Темный переулок города Нью-Йорк. Заброшенный склад портового района.",
      text: "В темном переулке города, где свет фонарей едва пробивался сквозь густую тьму, мужчина по имени Алекс спешил домой после долгого рабочего дня. Он чувствовал, что за ним кто-то следит, но каждый раз, обернувшись, не замечал никого. Страх сжимал его сердце, и он ускорил шаг. Внезапно он услышал шаги позади себя — быстрые и ритмичные. Алекс резко повернулся и увидел силуэт в капюшоне, который приближался к нему. Внутри него зашевелилось предчувствие беды. Он бросился в сторону, вглубь переулка, стараясь не издавать ни звука. Алекс знал, что нужно найти укрытие. Он заметил открытую дверь старого склада и, не раздумывая, забежал внутрь. Внутри было темно и тихо. Он затаился за кучей ящиков, стараясь не дышать. Сердце колотилось в груди, и он прислушивался к звукам снаружи. Скоро он услышал шаги. Они приближались к складу. Алекс сжимал кулаки, пытаясь успокоить себя. Внезапно дверь скрипнула, и в проем вошел маньяк. Его лицо скрывал капюшон, но глаза сверкали жадностью и ненавистью. Алекс замер. Он знал, что если его поймают, это будет конец. Он медленно отодвинулся к задней стене склада, стараясь остаться незамеченным. Маньяк начал осматриваться, его шаги были уверенными и жестокими. В этот момент Алекс заметил окно на противоположной стороне. Это был его единственный шанс. Он осторожно поднялся на ноги и, стараясь сделать как можно меньше шума, направился к окну. Но вдруг пол под ним треснул от тяжести его шагов. Маньяк обернулся. Алекс бросился к окну, разбив стекло локтем. Он выскочил наружу и побежал по узкой улочке, не оглядываясь назад. Страх придавал ему сил, и вскоре он оказался на главной улице, где люди беззаботно проходили мимо. Пока он бежал в сторону освещенных витрин магазинов, Алекс понимал одно: он выживет. В этот вечер он оставил позади не только маньяка, но и страх, который долго мучил его.",
      exam: {
        title: "Проверка - Необходимо затаиться!"
      }
    },
    {
      title: "ДЕЛО №4",
      number: 4,
      date: "21.10.2024 16:34",
      role: "Жертва",
      description: "Темный переулок города Нью-Йорк. Заброшенный склад портового района.",
      text: "В темном переулке города, где свет фонарей едва пробивался сквозь густую тьму, мужчина по имени Алекс спешил домой после долгого рабочего дня. Он чувствовал, что за ним кто-то следит, но каждый раз, обернувшись, не замечал никого. Страх сжимал его сердце, и он ускорил шаг. Внезапно он услышал шаги позади себя — быстрые и ритмичные. Алекс резко повернулся и увидел силуэт в капюшоне, который приближался к нему. Внутри него зашевелилось предчувствие беды. Он бросился в сторону, вглубь переулка, стараясь не издавать ни звука. Алекс знал, что нужно найти укрытие. Он заметил открытую дверь старого склада и, не раздумывая, забежал внутрь. Внутри было темно и тихо. Он затаился за кучей ящиков, стараясь не дышать. Сердце колотилось в груди, и он прислушивался к звукам снаружи. Скоро он услышал шаги. Они приближались к складу. Алекс сжимал кулаки, пытаясь успокоить себя. Внезапно дверь скрипнула, и в проем вошел маньяк. Его лицо скрывал капюшон, но глаза сверкали жадностью и ненавистью. Алекс замер. Он знал, что если его поймают, это будет конец. Он медленно отодвинулся к задней стене склада, стараясь остаться незамеченным. Маньяк начал осматриваться, его шаги были уверенными и жестокими. В этот момент Алекс заметил окно на противоположной стороне. Это был его единственный шанс. Он осторожно поднялся на ноги и, стараясь сделать как можно меньше шума, направился к окну. Но вдруг пол под ним треснул от тяжести его шагов. Маньяк обернулся. Алекс бросился к окну, разбив стекло локтем. Он выскочил наружу и побежал по узкой улочке, не оглядываясь назад. Страх придавал ему сил, и вскоре он оказался на главной улице, где люди беззаботно проходили мимо. Пока он бежал в сторону освещенных витрин магазинов, Алекс понимал одно: он выживет. В этот вечер он оставил позади не только маньяка, но и страх, который долго мучил его.",
      exam: {
        title: "Проверка - Необходимо затаиться!"
      }
    },
    {
      title: "ДЕЛО №5",
      number: 5,
      date: "21.10.2024 16:34",
      role: "Жертва",
      description: "Темный переулок города Нью-Йорк. Заброшенный склад портового района.",
      text: "В темном переулке города, где свет фонарей едва пробивался сквозь густую тьму, мужчина по имени Алекс спешил домой после долгого рабочего дня. Он чувствовал, что за ним кто-то следит, но каждый раз, обернувшись, не замечал никого. Страх сжимал его сердце, и он ускорил шаг. Внезапно он услышал шаги позади себя — быстрые и ритмичные. Алекс резко повернулся и увидел силуэт в капюшоне, который приближался к нему. Внутри него зашевелилось предчувствие беды. Он бросился в сторону, вглубь переулка, стараясь не издавать ни звука. Алекс знал, что нужно найти укрытие. Он заметил открытую дверь старого склада и, не раздумывая, забежал внутрь. Внутри было темно и тихо. Он затаился за кучей ящиков, стараясь не дышать. Сердце колотилось в груди, и он прислушивался к звукам снаружи. Скоро он услышал шаги. Они приближались к складу. Алекс сжимал кулаки, пытаясь успокоить себя. Внезапно дверь скрипнула, и в проем вошел маньяк. Его лицо скрывал капюшон, но глаза сверкали жадностью и ненавистью. Алекс замер. Он знал, что если его поймают, это будет конец. Он медленно отодвинулся к задней стене склада, стараясь остаться незамеченным. Маньяк начал осматриваться, его шаги были уверенными и жестокими. В этот момент Алекс заметил окно на противоположной стороне. Это был его единственный шанс. Он осторожно поднялся на ноги и, стараясь сделать как можно меньше шума, направился к окну. Но вдруг пол под ним треснул от тяжести его шагов. Маньяк обернулся. Алекс бросился к окну, разбив стекло локтем. Он выскочил наружу и побежал по узкой улочке, не оглядываясь назад. Страх придавал ему сил, и вскоре он оказался на главной улице, где люди беззаботно проходили мимо. Пока он бежал в сторону освещенных витрин магазинов, Алекс понимал одно: он выживет. В этот вечер он оставил позади не только маньяка, но и страх, который долго мучил его.",
      actions: [
        {
          title: "Открыть дверь",
          isLocked: true
        },
        {
          title: "Подождать",
          isLocked: false
        },
        {
          title: "Убежать",
          isLocked: false
        },
        {
          title: "Ударить кочергой",
          isLocked: true
        },
      ]
    }
  ]);

  const [animationState, setAnimationState] = useState(false);
  const selectPage = (number: number) => {
    setAnimationState(true);
    let newItem = pageList[number];
    let newList: any[] = [...pageList.slice(0, number), ...pageList.slice(number+1, pageList.length-1), newItem, pageList.at(-1)]; // IPage

    setPageList([...newList]);
    setTimeout(() => setAnimationState(false), 1000);
  }

  const selectList = pageList.map((e, index) => 
    (index < pageList.length-1) &&
    <button key={index+"history"} className="flex flex-col w-16 h-16 border-2 border-[#d6c4a8]" onClick={() => selectPage(index)}>
      {e.number}
    </button>
  )

  return (
    <Layout>
      <div className="bg-[#fef3e2] h-min  my-auto border-2 border-[#d6c4a8] rounded-r-xl truncate">
        {selectList}
      </div>

      <div className={animationState ? "animation" : ""}>
        {pageList.map((page, index) =>
          (index < pageList.length-1) && 
          <Page page={page} key={"page"+index} m={-(index*10)} addClass={`absolute top-[calc(50%-45vh)] left-[calc(50%-300px)]`}/>
        )}
      </div>

      <Page page={pageList[pageList.length-1]} isMain goto={"/story"}/>
    </Layout>
  );
}