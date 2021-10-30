import SessionManager from './sessionManager';

export function authHeader() {
    // return authorization header with jwt token
    let user = SessionManager.getSession();

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}