import React, { useContext, useState, useEffect } from 'react'
import { EmpContext } from '../../Context/EmployeeContext'
import './style.css';
import EmployeeDetails from '../EmployeeDetails'
const EmployeeList = () => {
    const { employee, addEmployee } = useContext(EmpContext);
    const [showDetails,setShowDetails] = useState(true);
    const [currentEmp,setCurrentEmp] = useState();
    const inputRef = React.createRef();

    const addEvent = () => {
        const name = inputRef.current.value
        addEmployee(name)
    }

    const showEvent = (e) => {
        
        const item = employee.find(item => item.id === Number(e.target.id));
        //debugger;
        setCurrentEmp(item)
        console.log('currentEmp', currentEmp)
    }

    useEffect( () => {
        setCurrentEmp(employee[0])
    },[])

    return(
        <div>
            <div className='employee-list'>
                {employee.map( (item) => {
                    return(
                        <div key={item.id} onClick={showEvent} id={item.id} className="employee-card">{item.name}</div>
                    )
                })}
            </div>  
            Add Employee: <input type='text' ref={inputRef} placeholder='add employee'></input>
            <button onClick={addEvent}>Add Employee</button>
            {showDetails && currentEmp && (
                <EmployeeDetails employee={currentEmp}/>
            )}
        </div> 
    )
}

export default EmployeeList;