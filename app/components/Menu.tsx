

import { Link } from "react-router";

export default function Menu() {
    return (
        <div className="bg-gray-200 h-screen w-[10%] rounded-r-xl  mr-2  border-r-1">
            <div className="flex flex-col justify-center items-center pt-5 text-center">
                <div className='flex items-center  mb-5 flex-col justify-center   w-full border-b-2  '>
                    <h1 className='text-xl font-bold m-5'>Weather</h1>


                </div>

                <nav className=" flex flex-col items-start text-black gap-5">
                    <Link  className=" block w-full pl-9 pr-9  py-2 px-4 hover:bg-green-400 rounded-lg" to="/"> Home</Link>
                    <Link className="block  w-full pl-9 pr-9 py-2 px-4  hover:bg-green-400 rounded-lg "  to="/today.tsx"> Today</Link>

                </nav>

            </div>

        </div>
    )
}