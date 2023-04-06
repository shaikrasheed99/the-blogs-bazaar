import { useEffect, useState } from "react";
import BlogList from "../blogList/BlogList";
import Loader from "../loader/Loader";
import Error from "../error/Error";
import "./Home.css"

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [shouldLoad, setShouldLoad] = useState(true);
    const [error, setError] = useState(null);
    const blogsApiLink = "http://localhost:3000/blogs";

    useEffect(() => {
        fetch(blogsApiLink)
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                setShouldLoad(false);
                setError(null);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
                setShouldLoad(false);
            })
    }, []);

    const handleDelete = (blogId) => {
        const filteredBlogs = blogs.filter((blog) => blog.id !== blogId);
        setBlogs(filteredBlogs);
    }

    return (
        <div className="home">
            {error && <Error />}
            {shouldLoad &&
                <div>
                    <h1>List of blogs!</h1> 
                    <Loader />
                </div>
            }
            {blogs && 
                <div>
                    <h1>List of blogs!</h1>
                    <BlogList blogs={blogs} handleDelete={handleDelete}/>
                </div>
            }
        </div>
    );
}

export default Home;