import SessionManager from '../utils/sessionManager';

const apiUrl = process.env.REACT_APP_COLOGNE_DELIVERY_API;

const login = (username:any, password:any) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${apiUrl}/auth/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('token', JSON.stringify(user));
            return user;
        });
}

 export const logout = () => {
    SessionManager.destroySession();
}

const handleResponse = (response:any) => {
    return response.text().then((text:any) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
const authService = {
    login,
    logout,
};
export default authService;