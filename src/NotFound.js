import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Thats page cannot be found</p>
            <Link to="/">Back to the hompage...</Link>
        </div>
    );
}
 
export default NotFound;