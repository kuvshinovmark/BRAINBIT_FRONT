const backUrl = 'http://localhost:3001';
async function Request (link: string, type = "GET") {
  const response = await fetch(
    backUrl + link,
    { 
      method: type,
      headers: { 
        Accept: "application/json",
        "Content-Type": "application/json" 
      },
    }
  );
  const out = await response.json();
  return out;
}

export async function getGames () {
  return await Request('/games');
}

export async function getGame (id: number) {
  return await Request('/games/'+id);
}


export async function getRoles () {
  return await Request('/roles');
} 

export async function getClients () {
  return await Request('/clients');
} 

export async function postGame(name: string, description: string) {
  const response = await fetch(
    backUrl + '/games',
    { 
      method: 'POST',
      headers: { 
        Accept: "application/json",
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        name: name,
        description: description
      })
    }
  );
  const out = await response.json();
  return out;
}

export async function postJoinToGame(idClient: number, idGame: number) {
  const response = await fetch(
    backUrl + '/games/'+idGame+'/join',
    { 
      method: 'POST',
      headers: { 
        Accept: "application/json",
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        clientId: idClient
      })
    }
  );
  const out = await response.json();
  return out;
}