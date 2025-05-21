import { useState } from "react";
interface Props{onToggle:(mode:"client"|"general")=>void}
export default function Header({onToggle}:Props){
  const[mode,setMode]=useState<"client"|"general">("client");
  const click=(m:"client"|"general")=>{setMode(m);onToggle(m);};
  return(
    <div className="flex justify-center mb-6">
      <div className="flex items-center bg-white rounded-full border shadow-sm">
        <button onClick={()=>click("client")} className={px-6 py-2 rounded-full ${mode==="client"?"bg-primary text-white":"text-gray-600"}}>Client Meeting</button>
        <button onClick={()=>click("general")} className={px-6 py-2 rounded-full ${mode==="general"?"bg-primary text-white":"text-gray-600"}}>General Meeting</button>
      </div>
    </div>
  );
}