import React from 'react';
import './App.css';
import EmployeeList from './Components/EmployeeList'
import EmployeeContext from './Context/EmployeeContext';
import {BrowserRouter, Route} from 'react-router-dom'
function App() {
  return (
    <EmployeeContext>
      <BrowserRouter>
        <div className="App">
          <Route path='/list/:empId' component={EmployeeList}/>
          <EmployeeList/>
        </div>
      </BrowserRouter>
    </EmployeeContext>
  );
}

export default App;
