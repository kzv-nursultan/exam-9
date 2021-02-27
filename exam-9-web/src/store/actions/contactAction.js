import axios from '../../axiosBase';

export const GET_CONTACT_REQUEST = 'GET_CONTACT_REQUEST';
export const GET_CONTACT_SUCCESS = 'GET_CONTACT_SUCCESS';
export const GET_CONTACT_FAILURE = 'GET_CONTACT_FAILURE';

export const getContactRequest = () => (
    {type: GET_CONTACT_REQUEST}
);
export const getContactSuccess = value => (
    {type: GET_CONTACT_SUCCESS, value}
);
export const getContactFailure = error => (
    {type: GET_CONTACT_FAILURE, error}
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