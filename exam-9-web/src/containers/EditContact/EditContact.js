import React from 'react';
import AddContact from '../AddContact/AddContact';

const EditContact = props => {
    return (
        <AddContact id={props.match.params.id}/>
    );
};

export default EditContact;