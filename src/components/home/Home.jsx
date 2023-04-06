import { useState } from "react";
import BlogList from "../blogList/BlogList";
import "./Home.css"

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Title A", author: "Author A", id: 1},
        {title: "Title B", author: "Author B", id: 2},
        {title: "Title C", author: "Author c", id: 3},
    ]);

    const handleDelete = (blogId) => {
        const filteredBlogs = blogs.filter((blog) => blog.id !== blogId);
        setBlogs(filteredBlogs);
    }

    return (
        <div className="home">
            <h1>List of blogs!</h1>
            <BlogList blogs={blogs} handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;