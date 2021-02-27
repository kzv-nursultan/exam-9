import axios from '../../axiosBase';

export const GET_CONTACT_REQUEST = 'GET_CONTACT_REQUEST';
export const GET_CONTACT_SUCCESS = 'GET_CONTACT_SUCCESS';
export const GET_CONTACT_FAILURE = 'GET_CONTACT_FAILURE';

export const DELETE_CONTACT_REQUEST = 'DELETE_CONTACT_REQUEST';
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';
export const DELETE_CONTACT_FAILURE = 'DELETE_CONTACT_FAILURE';

export const EDIT_CONTACT_REQUEST = 'EDIT_CONTACT_REQUEST';
export const EDIT_CONTACT_SUCCESS = 'EDIT_CONTACT_SUCCESS';
export const EDIT_CONTACT_FAILURE = 'EDIT_CONTACT_FAILURE';

export const getContactRequest = () => (
    {type: GET_CONTACT_REQUEST}
);
export const getContactSuccess = value => (
    {type: GET_CONTACT_SUCCESS, value}
);
export const getContactFailure = error => (
    {type: GET_CONTACT_FAILURE, error}
);

export const deleteContactRequest = () => (
    {type: DELETE_CONTACT_REQUEST}
);
export const deleteContactSuccess = value => (
    {type: DELETE_CONTACT_SUCCESS , value}
);
export const deleteContactFailure = error => (
    {type: DELETE_CONTACT_FAILURE, error}
);

export const editContactRequest = () => (
    {type:EDIT_CONTACT_REQUEST}
);
export const editContactSuccess = value => (
    {type:EDIT_CONTACT_SUCCESS, value}
);
export const editContactFailure = error => (
    {type:EDIT_CONTACT_FAILURE, error}
);

export const getContact = () => {
    return async (dispatch) => {
        dispatch(getContactRequest());
        try {
            const response = await axios.get('contacts/.json');
            dispatch(getContactSuccess(response.data));
        } catch (e) {
            dispatch(getContactFailure(e));
        };
    };
};

export const deleteContact = (id) => {
    return async (dispatch) => {
        dispatch(deleteContactRequest());

        try {
            await axios.delete('contacts/'+id+'/.json');
            const response = await axios.get('contacts/.json');
            dispatch(deleteContactSuccess(response.data));
        } catch (e) {
            dispatch(deleteContactFailure(e))
        };
    };
};

export const editContact = (id, editted) => {
    return async (dispatch) => {
        dispatch(editContactRequest());

        try {
            await axios.put('contacts/'+id+'/.json', editted);
            const response = await axios.get('contacts/.json');
            dispatch(editContactSuccess(response.data));
        } catch (e) {
            dispatch(editContactFailure(e));
        };
    };
};