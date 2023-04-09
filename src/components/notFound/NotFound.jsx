import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry!!</h2>
            <h3>The page cannot be found!</h3>
            <h3>
                <Link to="/">Back to home );</Link>
            </h3>
        </div>
    );
}
 
export default NotFound;