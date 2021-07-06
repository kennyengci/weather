interface APIResult {
    observations: {
      data: WeatherData[]
    }
  }
  
  interface WeatherData {
    sort_order: number,
    air_temp: number
  }