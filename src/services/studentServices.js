import API from "../api/axios";

export const signupStudent = (data) => {
    return API.post("/student/signup", data)
}

export const loginStudent = (data) => {
    return API.post("/student/login", data)
}

export const getStudents = () => {
    return API.get("/student")
}

export const createStudent = (data) => {
    return API.post("/student", data)
}

export const searchStudents = (query) => {
    return API.get(`/student/search?${query}`)
}

export const updateStudentProfile = (data) => {
    return API.put("/student", data)
}