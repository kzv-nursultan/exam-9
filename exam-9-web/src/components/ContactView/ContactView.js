import React from 'react';

const ContactView = props => {
    return (
        <div className='d-flex align-items-center m-2 border border-secondary '>
            <div style={{
                width:'100px',
                height:'120px',
                backgroundImage: 'url(' + (props.image) + ')',
                backgroundSize: '100px',
                border:'1px solid grey'
            }}>
            </div>
            <span style={{fontSize:'30px'}}>
                {props.name}
            </span>
        </div>
    );
};

export default ContactView;