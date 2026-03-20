import API from "../api/axios";

export const signupTeacher = (data) => {
    return API.post('/teacher/signup', data)
}

export const loginTeacher = (data) => {
    return API.post("teacher/login", data)
}

export const getTeacher = () => {
    return API.get("/teacher")
}

