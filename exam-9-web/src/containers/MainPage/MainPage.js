import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../../store/actions/contactAction';
import ContactView from '../ContactView/ContactView';


const MainPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const store = useSelector(state=>state.contacts);

    useEffect(()=>{
        dispatch(getContact());
    },[dispatch])

    const addBtnHandler = () => history.push('/addNew');

    let contactList = '';

    if(store.value) {
        contactList = (
            Object.keys(store.value).map(key=>(
                <ContactView key={key}
                id={key}
                image={store.value[key]['photo']}
                name={store.value[key]['name']}
                />
            ))
        );
    };

    return(
        <div className='container'>
            <div>
                <div className='d-flex justify-content-around p-2'>
                    <h3>
                        Contacts
                    </h3>
                    <button className='bg-secondary text-white' 
                    onClick={()=>addBtnHandler()}>
                        <strong>
                            Add new Contact
                        </strong>
                    </button>
                </div>
                <div>
                    {contactList}
                </div>
            </div>
        </div>
    );
};

export default MainPage;