import axios from 'axios';

const base = axios.create({
    baseURL:'https://forhomework-c9acf-default-rtdb.firebaseio.com/'
});

export default base;