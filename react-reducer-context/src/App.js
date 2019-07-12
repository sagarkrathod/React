import React, { useReducer } from 'react';
import './App.css';
import ListPerson from './Components/ListPerson';
import AddPerson from './Components/AddPerson';
import Reducer from './Context/PeopleContext/Reducer';
import PeopleContext from './Context/PeopleContext/Context';
import uuid from 'uuid/v4';

function App() {
  const initialState = [
    {fname:'sagar',lname:'rathod',id:uuid()},
    {fname:'shaurya',lname:'rathod',id:uuid()},
    {fname:'sneha',lname:'rathod',id:uuid()}
  ]
  const [state,dispatch] = useReducer(Reducer, initialState)

  const addPerson = ( person ) => {
    dispatch({
      type:'ADD_PERSON',
      payload:person
    });
  }

  const value = {
    people:state,
    addPerson,
  }
  return (
      <PeopleContext.Provider value={value}>
      <div className="App">
        <AddPerson/>
        <ListPerson/>
      </div>
      </PeopleContext.Provider>
  );
}

export default App;
