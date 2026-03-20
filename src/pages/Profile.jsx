import {useState, useContext} from 'react'
import { updateStudentProfile } from '../services/studentServices';
import { AuthContext } from '../context/AuthContext';

function Profile() {
    const { user, update } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        name: user.name,
        age: user.age
    })

    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const res = await updateStudentProfile(formData)
            update({name: formData.name, age: formData.age})
            alert("Profile is updated sucessfully")
        }
        catch(err) {
            console.log(err.message)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Updated Profile</h2>

                <input 
                    type="text"
                    name='name'
                    onChange={handleChange}
                    value={formData.name} 
                />

                <input 
                    type="number"
                    name='age'
                    onChange={handleChange}
                    value={formData.age} 
                />

                <button>Update</button>
            </form>
        </div>
    )
}

export default Profile