import { useEffect, useState } from 'react'
import { signupStudent } from '../services/studentServices'
import { getCourse } from '../services/courseServices'
import { useNavigate } from 'react-router-dom'

function Register() {

    const navigate = useNavigate();

    const [courses, setCourses] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        password: "",
        course: ""
    })

    useEffect(() => {
        fetchCourses()
    }, [])

    const fetchCourses = async () => {
        try{
            const res = await getCourse();
            setCourses(res.data)
        }
        catch(err){
            console.log(err)
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            await signupStudent(formData)

            alert("Signup successful")

            navigate("/")
        }
        catch(err) {
            console.log(err.message)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Student Signup</h2>

                <input 
                    type="text"
                    name='name'
                    placeholder='Enter your name....'
                    onChange={handleChange} 
                />

                <input 
                    type="number"
                    name='age'
                    placeholder='Enter your age...'
                    onChange={handleChange} 
                />

                <input 
                    type="email"
                    name='email'
                    placeholder='Enter your email...'
                    onChange={handleChange}
                />

                <input 
                    type="password"
                    name='password'
                    placeholder='Enter your password'
                    onChange={handleChange}
                />

                {/* course dropdown */}
                <select name="course" onChange={handleChange}>
                    <option value="">Select Course</option>

                    {courses.map(course => (
                        <option key={course._id} value={course._id}>
                            {course.title}
                        </option>
                    ))}
                </select>
                <button>Signup</button>
            </form>
        </div>
)
}

export default Register