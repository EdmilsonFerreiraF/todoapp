import axios from "axios"

import { BASE_URL } from "../constants/apiConstants"
import { goToTasks } from "../routes/coordinator"

export const signup = (body, router, setLogged) => {
    axios.post(`${BASE_URL}/user/signup`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        
        setLogged(true)
        goToTasks(router)
    }).catch(error => {
        console.log(error.message)
    })
}

export const login = (body, router, setLogged) => {
    axios.post(`${BASE_URL}/user/login`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        
        setLogged(true)
        goToTasks(router)
    }).catch(() => {
        alert("Email or password invalid")
    })
}
