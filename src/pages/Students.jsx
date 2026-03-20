import { useEffect, useState, useContext } from "react";
import { getStudents } from "../services/studentServices";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Students() {
    const [students, setStudents] = useState([])
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(user.role === "student") {
            navigate('/dashboard')
        }
        fetchStudents()
    }, [])

    const fetchStudents = async () => {
        const res = await getStudents()
        setStudents(res.data)
        console.log(res)
    }

    return (
        <div>
            <h2>Students</h2>

            {students.map(student => (
                <div key={student._id} className="card">
                    <h3>{student.name}</h3>

                    <p>Age : {student.age}</p>

                    <p>Course : {student.course?.title}</p>

                    <p>Teacher : {student.course?.teacher?.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Students