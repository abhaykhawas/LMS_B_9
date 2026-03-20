import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        token: localStorage.getItem('token'),
        role: localStorage.getItem('role'),
        name: localStorage.getItem('name'),
        age: localStorage.getItem('age')
    })

    const login = (token, role, name, age) => {
        localStorage.setItem('token', token)
        localStorage.setItem('role', role)
        localStorage.setItem('name', name)
        localStorage.setItem('age', age)

        setUser({token, role, name, age})
    }

    const logout = () => {
        localStorage.clear()
        setUser(null)
    }

    const update = (data) => {
        setUser({...user, ...data})
        localStorage.setItem('name', data.name)
        localStorage.setItem('age', data.age)
    } 

    
    return(
        <AuthContext.Provider value={{ user, login, logout, update }}>
            {children}
        </AuthContext.Provider>
    )
}