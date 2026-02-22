export default function WeatherIcon({ icon }: { icon: string }) {
    if (!icon) {
        return <p>🌤</p>;
      }
      
    return (
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
        className="w-16 h-16"
      />
    );
  }