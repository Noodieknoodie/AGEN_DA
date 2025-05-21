export async function generateAgenda(data:FormData,token:string){
  const res=await fetch(import.meta.env.VITE_API_URL??"/api/generateAgenda",{
    method:"POST",
    headers:{ Authorization:Bearer ${token} },
    body:data
  });
  if(!res.ok)throw new Error(await res.text());
  return res.blob();
}