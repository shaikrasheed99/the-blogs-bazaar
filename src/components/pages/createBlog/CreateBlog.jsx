import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateBlog.css";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const blog = {title, author, body};
        const url = "http://localhost:3001/blogs";

        setIsLoading(true);

        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Blog has added!!")
            setIsLoading(false);
            navigate("/");
        }).catch((error) => {
            console.log(error)
        })   
    }

    return (
        <div className="create-blog">
            <h1>Add new blog!!</h1>

            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <label>Blog Author:</label>
                <input 
                    type="text"
                    required
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />

                <label>Blog Body:</label>
                <textarea 
                    type="text"
                    required
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                />

                <div className="btn">
                    {!isLoading && <button className="active">Submit</button>}
                    {isLoading && <button className="diactive">Submit</button>}
                </div>
            </form>
        </div>
    );
}
 
export default CreateBlog;