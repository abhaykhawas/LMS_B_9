import { useEffect, useState } from "react";
import { getCourse } from "../services/courseServices";



function Courses() {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetchCourses()
    }, [])

    const fetchCourses = async () => {
        const res = await getCourse();
        setCourses(res.data)
    }

    return (
        <div>
            <h2>Courses</h2>

            {
                courses.map(course => (
                    <div className="card">
                        <h3>{course.title}</h3>
                        <p>Teacher: { course.teacher?.name }</p>
                        <p>Duration : {course.duration} hours</p>
                        <p>Capacity : {course.capacity}</p>
                    </div>
                ))
            }
        </div>
    )
     
}

export default Courses;
