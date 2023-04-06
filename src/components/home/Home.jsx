import { useState } from "react";
import BlogList from "../blogList/BlogList";
import "./Home.css"

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Title A", author: "Author A", id: 1},
        {title: "Title B", author: "Author B", id: 2},
        {title: "Title C", author: "Author c", id: 3},
    ]);

    return (
        <div className="home">
            <h1>List of blogs!</h1>
            <BlogList blogs={blogs} />
        </div>
    );
}

export default Home;