import { DELETE_CONTACT_FAILURE, DELETE_CONTACT_REQUEST, DELETE_CONTACT_SUCCESS, EDIT_CONTACT_FAILURE, EDIT_CONTACT_REQUEST, EDIT_CONTACT_SUCCESS, GET_CONTACT_FAILURE, GET_CONTACT_REQUEST, GET_CONTACT_SUCCESS } from "../actions/contactAction";

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
            return {...state, error:action.error};
        case DELETE_CONTACT_REQUEST:
            return {...state, loading:true};
        case DELETE_CONTACT_SUCCESS:
            return {...state, value:action.value, loading:false};
        case DELETE_CONTACT_FAILURE:
            return {...state, error:action.error, loading:false};
        case EDIT_CONTACT_REQUEST:
            return {...state, loading:true};
        case EDIT_CONTACT_SUCCESS:
            return {...state, value:action.value, loading:false};
        case EDIT_CONTACT_FAILURE:
            return {...state, error: action.error, loading:false};
        default:
            return state;
    };
};