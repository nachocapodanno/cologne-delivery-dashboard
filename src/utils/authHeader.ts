import SessionManager from './sessionManager';

export const authHeader = () => {
    // return authorization header with jwt token
    let user = SessionManager.getSession();

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}