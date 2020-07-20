import axios from 'axios';

const firebase = axios.create({
    baseURL: 'https://burgerbuilder-ea72b.firebaseio.com/'
});

export default firebase;