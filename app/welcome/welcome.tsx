import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import NavBar from "~/components/NavBar";
import Menu from "~/components/Menu";

export function Welcome() {
  return (
    <main className=" flex bg-white h-screen">
        <Menu/>
      
      <div className="flex-1 flex flex-col items-center gap-5 min-h-0">
        <div className="bg-gray-200 w-full rounded-lg p-2 mt-2" >
          <NavBar/>
        </div>
        <div className="bg-gray-100 h-screen w-full rounded-lg">
          <h1 className="font-bold text-center p-2">Weather </h1>

        </div>
        
    
       
      </div>
    </main>
  );
}

