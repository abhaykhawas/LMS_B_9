import { useContext, useState } from "react";
import { loginStudent } from "../services/studentServices";
import { loginTeacher } from "../services/teacherServices";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

    const { login } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let res;

        if(role== 'student') {
            res = await loginStudent({email, password})
        }
        else{
            res = await loginTeacher({email, password})
        }

        login(res.data.token, role, res.data.name, role==='student' ? res.data.age : 0)

        navigate('/dashboard')
    }

    return (
        <form onSubmit={handleSubmit}> 
            <h2>Login</h2>

            <input type="email" placeholder="Enter Email..." onChange={(e) => setEmail(e.target.value)}/>

            <input type="password" placeholder="Enter password..." onChange={(e) => setPassword(e.target.value)}/>

            <select onChange={(e) => setRole(e.target.value)}>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
            </select>

            <button>Login</button>

            <p>Don't have an account? <Link to={"/signup"}>Signup</Link>
            </p>
        </form>
    )
}

export default Login;