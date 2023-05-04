import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Users">Users</Link>
                    </li>
                    <li>
                        <Link to="/Albums">Albums</Link>
                    </li>
                    <li>
                        <Link to="/Comments">Comments</Link>
                    </li>
                    <li>
                        <Link to="/Photos">Photos</Link>
                    </li>
                    <li>
                        <Link to="/Posts">Posts</Link>
                    </li>
                    <li>
                        <Link to="/ToDos">ToDos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;