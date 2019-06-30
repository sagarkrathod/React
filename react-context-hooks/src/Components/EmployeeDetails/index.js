import React, {useEffect} from 'react'

const EmployeeDetails = ({employee}) => {
    
    useEffect(() => {
        console.log('details data', employee)    
    }, [])
    return(
        <div>
            <div>{`Employee Name: ${employee.name}`}</div>
            <div>{`Employee Address: ${employee.address.street},${employee.address.city}, ${employee.address.zipcode}`}</div>
            <div>{`Employee Company: ${employee.company.name}`}</div>
            <div>{`Employee Phone: ${employee.phone}`}</div>
        </div>
    )
}

export default EmployeeDetails;