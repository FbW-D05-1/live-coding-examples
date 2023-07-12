/** Get weather action variable */
export const GET_WEATHER = "GET_WEATHER";
/** Loader action variable */
export const SET_LOADING = "SET_LOADING";
/** Error action variable */
export const SET_ERROR = "SET_ERROR";
/** Alert action variable */
export const SET_ALERT = "SET_ALERT";

/** Interface for Weather*/
export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}
/** Interface for Weather Data */
export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  };
  
}

/** Interface for Weather Forecast */
export interface WeatherForecast{
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
}

/** Interface for Daily Structure */
export interface dailyStructure {
  index: number;
  clouds: number;
  dt: number;
  humidity: number;
  sunrise: number;
  sunset: number;
  wind_deg: number;
  wind_speed: number;
  weather: {
    description: string;
    main: string;
    icon: string;
  }[];
  
}

/** Interface for Weather Errors */
export interface WeatherError{
    cod: string;
    message: string;
}
/** Interface for Weather State */
export interface WeatherState{
    data : WeatherData | null;
    loading: boolean;
    error: string;
}

/** Interface for GET_Weather action from exports */
interface GetWeatherAction {
    type: typeof GET_WEATHER;
    payload: WeatherData;
}


/** Interface for SET_LOADING action from exports */
interface SetLoadingAction{
    type: typeof SET_LOADING;
}

/** Interface for SET_ERROR action from exports */
interface SetErrorAction{
    type: typeof SET_ERROR;
    payload: string;
}

/** Action export types */
export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;


/** Interface for SET_ALERT action from exports */
export interface AlertAction {
    type: typeof SET_ALERT;
    payload: string;
  }
  
  /** Interface for AlertState action from exports */
  export interface AlertState {
    message: string;
  }