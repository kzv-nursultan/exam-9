import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddContact from '../AddContact/AddContact';

const EditContact = props => {
    return (
        <AddContact id={props.match.params.id}/>
    );
};

export default EditContact;