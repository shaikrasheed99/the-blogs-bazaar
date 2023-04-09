import BlogList from "../blogList/BlogList";
import Loader from "../loader/Loader";
import Error from "../error/Error";
import useFetch from "../../hooks/useFetch";
import "./Home.css"

const Home = () => {
    const blogsApiLink = "http://localhost:3001/blogs";
    const {data: blogs, isLoading, error} = useFetch(blogsApiLink);

    return (
        <div className="home">
            {error && <Error />}
            {isLoading &&
                <>
                    <h1>List of blogs!</h1> 
                    <Loader />
                </>
            }
            {blogs && 
                <>
                    <h1>List of blogs!</h1>
                    <BlogList blogs={blogs} />
                </>
            }
        </div>
    );
}

export default Home;