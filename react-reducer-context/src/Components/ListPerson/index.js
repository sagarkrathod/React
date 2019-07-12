import React, { useContext } from 'react';
import TotalPerson from '../TotalPerson';
import PeopleContext from '../../Context/PeopleContext/Context'
import './style.css';

const ListPerson = () => {
    const { people } = useContext(PeopleContext);
    return(
        <div> 
            <div className="list-person">
                {people.map( person => {
                    return(
                        <div key={person.id} ><h4>{`${person.fname} ${person.lname}`}</h4></div>
                    )
                })}
            </div>
            <TotalPerson/>
        </div>
        
    )
}

export default ListPerson;