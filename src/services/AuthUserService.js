import $api from "../http/httpUsers.js";

export const login = async (email, password) => {
    return $api.post('/login-user',{email, password})
}
export const registration = async (email, password) => {
    return $api.post('/register-user',{email, password})
}
export const logout = async () => {
    return $api.post('/logout-user')
}