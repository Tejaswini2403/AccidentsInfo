import React from 'react';
import './App.css';
import MainPage from './MainPage';
import ExcelData from "./BackEndConn/ExcelData";
import DataEntry from "./DataEntryForm/DataEntry";
import DisplayMap from "./GoogleMaps/DisplayMap";
import DataQuery from './DataQueryTool/DataQuery';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import DataQueryBody from './DataQueryTool/DataQueryBody';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route exact path='/ Dataquery' component={DataQuery} />
            </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;