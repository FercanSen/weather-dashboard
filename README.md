# 🌤️ Weather Dashboard

A sleek and responsive weather dashboard built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Zustand**, and **React Query**. It fetches real-time weather data and 5-day forecasts using the OpenWeatherMap API, supporting both metric and imperial units.

---

## 🚀 Features

- 🌍 Search for weather by city name  
- 📅 5-day weather forecast  
- 🌡️ Toggle between metric and imperial units  
- 🕒 Forecast caching with React Query for faster loading  
- 🧠 Zustand for global state management (units, history, etc.)  
- 💾 Search history persisted with `localStorage`  
- ⚡ Dynamic components with lazy loading for performance  
- 🌘 Manual dark/light theme support (optional)

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **State Management:** Zustand  
- **Data Fetching:** React Query (SWR also compatible)  
- **API:** OpenWeatherMap (via custom `/api/weather` and `/api/forecast` routes)  
- **Icons:** [Lucide](https://lucide.dev)

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 2. Set up environment variables

```end
WEATHER_API_KEY=your_openweathermap_api_key
```

### 4. Run the development server
```bash
npm run dev
# or
yarn dev
```
