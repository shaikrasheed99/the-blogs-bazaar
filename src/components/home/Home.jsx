import { useEffect, useState } from "react";
import BlogList from "../blogList/BlogList";
import Loader from "../loader/Loader";
import "./Home.css"

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [areBlogsEmpty, setAreBlogsEmpty] = useState(true);
    const blogsApiLink = "http://localhost:3000/blogs";

    useEffect(() => {
        fetch(blogsApiLink)
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                setAreBlogsEmpty(false);
            })
            .catch((error) => console.log(error))
    }, []);

    const handleDelete = (blogId) => {
        const filteredBlogs = blogs.filter((blog) => blog.id !== blogId);
        setBlogs(filteredBlogs);
    }

    return (
        <div className="home">
            <h1>List of blogs!</h1>
            {areBlogsEmpty && <Loader />}
            {blogs && <BlogList blogs={blogs} handleDelete={handleDelete}/>}
        </div>
    );
}

export default Home;