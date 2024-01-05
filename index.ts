import axios from 'axios';

interface IPost {
  userId: number;
  title: string;
  body: string;
}

const URL = 'https://jsonplaceholder.typicode.com/posts/1';

axios.get(URL).then((response) => {
  const post = response.data as IPost;

  const userId = post.userId;
  const title = post.title;
  const body = post.body;

  printPost({ userId, title, body });
  printPost2( userId, title, body );
});

const printPost = (data: IPost): void =>
  console.log(`
    User ID is ${data.userId}
    Title of post: ${data.title}
    Post Content: ${data.body}
`);

const printPost2 = (userId: number, title:string, body: string): void =>
  console.log(`
    User ID is ${userId}
    Title of post: ${title}
    Post Content: ${body}
`);
