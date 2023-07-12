/** @format */

import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { RootState } from "./store";
import Search from "./components/Search";
import Alert from "./components/Alert";
import Weather from "./components/Weather";
import {setAlert} from './store/actions/alertActions'
import {setError} from './store/actions/weatherActions'
import 'bootstrap/dist/css/bootstrap.min.css';


/** Main app tsx */
const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);

  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <div className="columns is-multiline">
    <div className="has-text-left column is-three-fifths">
      
      <Search title="Enter a City or Country name" /></div>
      {loading ? (<h2 className="is-size-3 py-2">Loading...</h2>
      )
      : (
        weatherData && <div className="column is-4">
          <Weather data={weatherData}/>
        </div>
      )}
      {alertMsg && (
        <Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />
      )}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
      
    </div>
  );
};

export default App;
