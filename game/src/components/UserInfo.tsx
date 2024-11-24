import { getClients, getGames } from "@/api";
import { IClient } from "@/types";
import { useEffect, useState } from "react";

export default function UserInfo () {

  // вынести в env
  const userID = 2;

  let [myInfo, setMyInfo] = useState<any>(null);

  const updateClients = async () => {
    let clients: IClient[] = await getClients();
    myInfo = clients.find((e) => e.id == userID);
    setMyInfo(myInfo);
    // if (myInfo)
    // sessionStorage.setItem("ID", myInfo.id);
    // sessionStorage.setItem("role", myInfo.role.name);
    // sessionStorage.setItem("name", myInfo.name);
    console.log(clients);
  }

  useEffect(() => {
    updateClients();
  }, [])

  return (
    // {myInfo != null && 
      <div className="bg-white border border-[#d6c4a8] p-2 shadow-lg rounded-br-xl absolute flex items-center">
        {/* <p>user: {myInfo?.name} - {myInfo?.role} - ({myInfo?.id})</p> */}
        {/* <p>{sessionStorage.getItem("ID") ? sessionStorage.getItem("ID") : "?"}</p> */}
      </div>
    // }

  );
}