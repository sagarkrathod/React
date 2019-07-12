import React, { useContext } from 'react'
import PeopleContext from '../../Context/PeopleContext/Context'
import './style.css';

const TotalPerson = (props) => {
    const { people }  = useContext(PeopleContext)
    return(
        <div className="total-people">
            <h2>  Total Person : {people.length} </h2>
        </div>
    )
}

export default TotalPerson;