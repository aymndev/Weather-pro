import NavBar from "~/components/NavBar";
import WeatherCard from "~/components/WeatherCard";

import Menu from "~/components/Menu";

export function Welcome() {
    return (
        <main className=" flex bg-white h-screen  w-full">
            <Menu />

            <div className="w-full flex flex-col items-center gap-2 p-2 overflow-auto ">
                <div className="bg-gray-200 w-full rounded-lg p-2 ">
                    <NavBar />
                </div>
                <div className="bg-gray-100 flex-1 w-full rounded-lg p-2">
                    <h1 className="font-bold text-center p-2">Weather </h1>
                    <div className=" flex-1">
                        <WeatherCard/>
                        
                    </div>

                </div>

            </div>
        </main>
    );
}
