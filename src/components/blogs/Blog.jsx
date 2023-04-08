import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Error from "../error/Error";
import Loader from "../loader/Loader";
import "./Blog.css"

const Blog = () => {
    const {id} = useParams();
    const url = `http://localhost:3000/blogs/${id}`;
    const {data: blog, isLoading, error} = useFetch(url);

    return (
        <div className="blog-details">
            {error && <Error />}
            {isLoading && <Loader />}
            {blog && (
                <div className="blog-content">
                    <h1>{blog.title}</h1>
                    <p className="author">Written by <strong>{blog.author}</strong></p>
                    <article className="article">{blog.body}</article>
                </div>
            )}
        </div>
    );
}
 
export default Blog;