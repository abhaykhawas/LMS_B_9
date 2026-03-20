import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";


function Dasboard() {
    const { user } = useContext(AuthContext);

   return(
    <div>
         { user?.role === 'teacher' && (
        <div className="card">
            <h2>Teacher Panel</h2>
            <ul>
                <li>
                    <Link to={"/courses"}>View Courses</Link>
                </li>
                <li>
                    <Link to={"/create-course"}>Create Course</Link>
                </li>
                <li>
                    <Link to={"/students"}>View Students</Link>
                </li>
            </ul>
        </div>
    ) }

    { user?.role === 'student' && (
        <div className="card">
            <h2>Student Panel</h2>

            <ul>
                <li>
                    <Link to={"/courses"}>View Courses</Link>
                </li>
                <li>
                    <Link to={"/profile"}>Update Profile</Link>
                </li>
            </ul>
        </div>
    ) }
    </div>
   )
}


export default Dasboard;