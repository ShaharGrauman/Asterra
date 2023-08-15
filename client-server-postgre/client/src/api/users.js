
export async function getUsers(){
  const response = await fetch("/api/hobbies");
  const data = await response.json();

  if(data.message === "Success"){
    return data.users;
  }
  return data.message;
}