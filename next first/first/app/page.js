"use client"
import React from 'react'
import {useState} from "react";
import fs from "fs/promises"

const page = () => {
  const [count, setcount] = useState(100)
  const submitAction= async (e)=>{
     "use server"
    let a=await fs.writeFile("mak.txt","name is mayank & address is dehi")
    console.log(a);
  }
  return (
   
 <div>
  <div>
      home page  {count}
    </div>
     <br />
    <form action={submitAction}>
      <label htmlFor="name">enter name</label>
      <input type="text" id='name' />
      <br />
      <br />
      <label htmlFor="add">enter address</label>
      <input type="text" id='add'/>
      <br />
      <br />
      <button>submit</button>
    </form>
 </div>
   
      
    
  )
}

export default page
// export const metadata = {
//   title: "home page",
//   description: "ths is a home page",
// };

