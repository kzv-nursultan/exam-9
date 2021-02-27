import React from 'react';

const ContactInfo = props => {
    return (
        <div className='d-flex'>
            <div style={{
                width:'100px',
                height:'120px',
                backgroundImage: 'url(' + (props.image) + ')',
                backgroundSize: '100px',
                border:'1px solid grey'
            }}></div>
            <div className='ml-2'>
                <h2>
                    {props.name}
                </h2>
                <p>
                    {props.phone}
                </p>
                <p>
                    {props.email}
                </p>
                <div className='m-2'>
                    <button className='m-1 bg-primary text-white'>
                        Edit
                    </button>
                    <button className='bg-secondary text-white'
                    onClick={props.delete}> 
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;