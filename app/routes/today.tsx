import WeatherCard from "~/components/WeatherIcon";

import { useWeather } from "~/hooks/useWeather";


export default function Today() {
  const { data, loading, error } =
  useWeather("/weather?q=London&units=metric");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading weather</p>;
 
  return (
    <div className="flex flex-col bg-gray-200 h-screen m-3 rounded-lg ">
      <div className="border-b-[1px] border-gray-400 mb-19">
        <h1 className="font-bold text-3xl p-5">Live Weather</h1>
      </div>
      
      <div className=" flex-1">
        <WeatherCard  weather={data}/>

      </div>
    </div>
  )
}