import React, { useContext } from 'react';
import './style.css';
import {InputGroup,FormControl,Button} from 'react-bootstrap';
import PeopleContext from '../../Context/PeopleContext/Context'
import uuid from 'uuid/v4';

const AddPerson = () => {
    const fnameInput = React.createRef();
    const lnameInput = React.createRef();

    const {people, addPerson } = useContext(PeopleContext);
    const addEvent = () => {
        const fname = fnameInput.current.value;
        const lname = lnameInput.current.value;

        
        addPerson({fname:fname,lname:lname,id:uuid()})
    }
    return(
        <div className='add-person-container'>
             <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl ref={fnameInput} placeholder="First Name" aria-describedby="basic-addon1" />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon2">Last Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl ref={lnameInput} placeholder="Last Name" aria-describedby="basic-addon2" />
            </InputGroup>
            <Button variant="primary" onClick={addEvent}>Add Person</Button>
        </div>
    )
}

export default AddPerson;