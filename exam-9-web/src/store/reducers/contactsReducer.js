import { GET_CONTACT_FAILURE, GET_CONTACT_REQUEST, GET_CONTACT_SUCCESS } from "../actions/contactAction";

const initialState = {
    loading:false,
    value:{},
    error:null
};

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACT_REQUEST:
            return {...state, loading:true};
        case GET_CONTACT_SUCCESS:
            return {...state, value:action.value, loading:false};
        case GET_CONTACT_FAILURE:
            return {...state, error:action.error}
        default:
            return state;
    };
};