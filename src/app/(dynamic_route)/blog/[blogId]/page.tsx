import axios from "axios";

export default async function BlogPage({params}: any) {
    const postId = (await params).blogId; // whatever is the name of the file , you need to make sure you write it over here same
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = response.data;

    return (
        <div>
            Blog Page {postId}

            <br />

            <div> Tittle : {data.title}</div>
            <div> Body : {data.body}</div>
        </div>
    )
}