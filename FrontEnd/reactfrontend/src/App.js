import React from 'react';
import './App.css';
import MainPage from './MainPage';
import ExcelData from "./BackEndConn/ExcelData";
import DataEntry from "./DataEntryForm/DataEntry";

function App() {
  return (
    <div className="App">
      <ExcelData/>
    </div>
  );
}

export default App;
