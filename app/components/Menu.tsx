

import { Link } from "react-router";

export default function Menu() {
    return (
        <div className="bg-gray-200 h-screen w-[10%] rounded-r-xl pl-2 ">
            <div className="pt-15 pl-5">
                <h1></h1>
                <nav className=" flex flex-col items-start text-black ">
                    <Link to="/"> Home</Link>
                    <Link to="/today"> Today</Link>
                    <Link to="/today"> Today</Link>
                    <Link to="/today"> Today</Link>

                </nav>

            </div>

        </div>
    )
}