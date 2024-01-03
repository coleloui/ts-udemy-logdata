import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(URL).then(response => console.log(response.data))