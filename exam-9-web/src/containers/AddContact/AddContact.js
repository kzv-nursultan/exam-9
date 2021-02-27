import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from '../../axiosBase';

import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../../store/actions/contactAction';

const AddContact = props => {
    const dispatch = useDispatch()
    const history = useHistory();
    const store = useSelector(state=> state.contacts.value);

    const [inputted, setInputted] = useState({
        name:'',
        phone:'',
        email:'',
        photo:''
    });

    useEffect(()=>{
        if(props.id){
            setInputted(store[props.id]);
        };
    },[props.id]);

    const onChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setInputted(prevState=>({
            ...prevState,
            [name]:value
        }));
        console.log(inputted);
    };

    const backToBtnHandler = () => history.push('/');

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (props.id) { 
            dispatch(editContact(props.id, inputted));
        } else {
            const contact = {
                ...inputted
            };
    
            await axios.post('contacts/.json',contact);
    
            setInputted({
                name:'',
                phone:'',
                email:'',
                photo:''  
            });
        };
    };

    return (
        <div className='container border border-secondary p-2 text-center' 
        style={{margin:'10px auto'}}>
            <h3>
                Contact Info
            </h3>
            <form onSubmit={onSubmitHandler}>
                <p>
                    Name:<input name='name' value={inputted.name} 
                     onChange={onChangeHandler}/>
                </p>
                <p>
                    Phone:<input name='phone' value={inputted.phone}
                     onChange={onChangeHandler}/>
                </p>
                <p>
                    E-mail:<input name='email' value={inputted.email}
                     onChange={onChangeHandler}/>
                </p>
                <p>
                    Photo:<input name='photo' value={inputted.photo}
                     onChange={onChangeHandler}/>
                </p>
            
            <div className='text-center'>
                <p>
                    Image Preview:
                </p>
                <div style={{
                    width:'100px',
                    height:'100px',
                    backgroundImage: (inputted['photo']) ? 'url('+inputted.photo+')' : 'url(https://cdn-0.idownloadblog.com/wp-content/uploads/2018/01/Facebook-contact-icon.jpg)',
                    backgroundSize:'100px 100px',
                    border:'2px solid black',
                    margin:'0 auto'
                }}>

                </div>
            </div>
            <div className='text-center m-3'>
                <button className='bg-danger text-white m-2' type='submit'>
                    Save contact
                </button>

                <button className='bg-warning text-white'
                onClick={backToBtnHandler}>
                    Back to contacts
                </button>
            </div>
            </form>
        </div>
    );
};

export default AddContact;