# Weather App - React Router Project

A modern weather application built with React Router, TypeScript, TailwindCSS and OpenWeather API.

This project demonstrates:
- File-based routing
- Custom hooks
- API integration
- Component-based architecture

---

## Features

- Server-side rendering support
- Hot Module Replacement (HMR)
- TailwindCSS styling
- Weather API integration
- Custom hooks for data fetching
- Responsive UI design

---

## Tech Stack

- React
- React Router
- TypeScript
- TailwindCSS
- Axios
- OpenWeather API

---

## Project Structure
```
├── app
│   ├── api
│   │   └── axiosClinet.ts
│   ├── app.css
│   ├── components
│   │   ├── Menu.tsx
│   │   ├── NavBar.tsx
│   │   └── WeatherCard.tsx
│   ├── hooks
│   │   └── useWeather.ts
│   ├── root.tsx
│   ├── routes
│   │   ├── home.tsx
│   │   ├── index.tsx
│   │   └── today.tsx
│   ├── routes.ts
│   └── welcome
│       └── welcome.tsx
├── Dockerfile
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── soleil.png
├── react-router.config.ts
├── README.md
├── tsconfig.json
└── vite.config.ts

```



---

## Installation

Clone the project
```
git clone <repository-url>
cd myweatherApp
```

---

## Development

Start development server
```
npm run dev
```

Application will run on:
```
npm run build
```

Then:
```
npm run start
```

---

## Environment Variables

Create `.env` file:
```
VITE_WEATHER_API_KEY=your_api_key
```





