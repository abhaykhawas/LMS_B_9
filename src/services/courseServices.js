import API from "../api/axios";

export const getCourse = () => {
    return API.get('/course')
}

export const createCourse = (data) => {
    return API.post("/course", data)
}

export const getStudentsInCourse = (id) => {
    return API.get(`/course/${id}`)
}


