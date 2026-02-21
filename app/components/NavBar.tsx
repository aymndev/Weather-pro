

import React from 'react'
import { useState } from 'react'
import { ImSearch } from "react-icons/im";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import Menu from "~/components/Menu";

export default  function  NavBar(){
    const [input,setInput]=useState("");
    
  return (
    <div className='flex justify-between bg-gray-200 w-full rounded-lg p-2 ml-3 pr-55'>
        
   
         
 
     
        <div className=' flex relative w-full flex flex-row mr-50 pl-80 justify-center items-center'>
            <input
            placeholder='Search for a city...'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className='w-full bg-white rounded-l-lg p-3 pr-12 focus:outline-none'
            
            />
            <button className='bg-white h-12 w-10 flex  items-center justify-center rounded-r-lg pr-5'>
                <ImSearch size={20} />
            </button>
            <div className='flex justify-center items-center gap-5 ml-5 '>
                <MdLightMode size={20} />
                <MdDarkMode size={20}  />


            </div>
            <div className='flex  justify-center items-center ml-25'>
                <TiThMenu size={20} />

            </div>
            

        </div>
        <div/>
        
        
    </div>
  )
}
