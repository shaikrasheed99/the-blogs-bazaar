import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Error from "../../layouts/error/Error";
import Loader from "../../layouts/loader/Loader";
import "./Blog.css"

const Blog = () => {
    const {id} = useParams();
    const url = `http://localhost:3001/blogs/${id}`;
    const {data: blog, isLoading, error} = useFetch(url);
    const navigate = useNavigate();

    const handleDelete = (blogId) => {
        fetch(url, {
            method: "DELETE"
        }).then(() => {
            console.log("Deleted!!");
            navigate("/");
        })
    }

    return (
        <div className="blog-details">
            {error && <Error />}
            {isLoading && <Loader />}
            {blog && (
                <div className="blog-content">
                    <h1>{blog.title}</h1>
                    <p className="author">Written by <strong>{blog.author}</strong></p>
                    <article className="article">{blog.body}</article>
                    <div className="btn">
                        <button onClick={() => handleDelete(blog.id)}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default Blog;