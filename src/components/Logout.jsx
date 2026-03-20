import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Logout() {

    const { logout, user } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleClick = () => {
        logout()
        navigate("/")
    }

    return (
        <button className='logout-btn' onClick={handleClick}>Logout : {user.name}</button>
    )
}

export default Logout