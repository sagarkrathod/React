import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';
import uuid from 'uuid/v4';

export const EmpContext = createContext();


const EmployeeContext = (props) => {
    const [empList,setEmpList] = useState([]);


    const addEmployee = (name) => {
        setEmpList([...empList,{name,id:uuid()}])
    }

    const initialValue = {
        employee:empList,
        addEmployee
    }

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response => setEmpList(response.data) )
    },[])
    return(
        <EmpContext.Provider value={initialValue}>
            {props.children}
        </EmpContext.Provider>    
    )
}

export default EmployeeContext;
