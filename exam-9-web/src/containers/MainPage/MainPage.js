import React from 'react';
import { useHistory } from "react-router-dom";


const MainPage = () => {
    const history = useHistory();

    const addBtnHandler = () => history.push('/addNew');

    return(
        <div>
            <div>
                <button onClick={()=>addBtnHandler()}>
                    Add new Contact
                </button>
                MainPage
            </div>
        </div>
    );
};

export default MainPage;