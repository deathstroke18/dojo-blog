import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>can't find what you're lookin for!</p>
            <Link to= "/">back to the home page we go.....</Link>
        </div>
     );
}
 
export default NotFound;