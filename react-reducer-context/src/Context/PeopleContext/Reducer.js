import AddPerson from "../../Components/AddPerson";

const addPerson = (person,state) => {
    const newPeople = [...state,person];
    return newPeople;
}
const Reducer = (state,{type,payload}) => {
    
    switch(type){
        case 'ADD_PERSON':
            return addPerson(payload,state);
        default:
            return state
    }
}

export default Reducer; 