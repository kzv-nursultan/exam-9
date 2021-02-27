import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from '../../store/actions/contactAction';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import Modal from '../../components/UI/Modal/Modal';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ContactView = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const deleteBtnHandler = id => dispatch(deleteContact(id));

    const store = useSelector(state=>state.contacts.value);
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState({
        name:'',
        phone:'',
        email:'',
        photo:''
    });

    const moreBtnHandler = () => {
        setShow(true);
        setInfo(store[props.id]);
    };

    const closeModal = () => {
        setShow(false);
    };

    const editBtnHandler = id => {
        history.push('/edit/' + id);
    };

    let contactInfo = 'empty';

    if(store[props.id]) {
        contactInfo = (
            <ContactInfo
            image={store[props.id]['photo']}
            name={store[props.id]['name']}
            email={store[props.id]['email']}
            phone={store[props.id]['phone']}
            delete={()=>deleteBtnHandler(props.id)}
            edit={()=>editBtnHandler(props.id)}/>            
        );
    };

    return (
        <div className='d-flex align-items-center m-2 border border-secondary'>
            <div style={{
                width:'100px',
                height:'120px',
                backgroundImage: 'url(' + (props.image) + ')',
                backgroundSize: '100px',
                border:'1px solid grey'
            }}>
            </div>
            <div style={{fontSize:'30px'}}>
                <span>{props.name}</span>
                
                <button onClick={moreBtnHandler} style={{
                    fontSize:'20px', 
                    margin:'10px'
                    }}>
                    more info
                </button>
            </div>
            <Modal show={show} onClick={closeModal}>
                {contactInfo}
            </Modal>
        </div>
    );
};

export default ContactView;