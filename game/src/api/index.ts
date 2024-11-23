const backUrl = 'http://localhost:3001/';

export async function getGameList () {
  const response = await fetch(
    backUrl + "/games",
    { 
      method: "GET",
      headers: { 
        Accept: "application/json",
        "Content-Type": "application/json" 
      },
    }
  );
  return response;
}