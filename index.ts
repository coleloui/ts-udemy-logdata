import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(URL).then((response) => {
    const post = response.data
    
    const id = post.userId
    const header = post.title
    const content = post.body

    console.log(`
        User ID is ${id}
        Title of post: ${header}
        Post Content: ${content}
    `);
    
})