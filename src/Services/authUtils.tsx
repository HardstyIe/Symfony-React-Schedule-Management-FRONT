import jwt_decode from 'jwt-decode';
import { useAuth } from './authContext';

function role(role: string) {
    const { token } = useAuth();
    if (token) {
        const decodedToken = jwt_decode(token);
        return decodedToken.roles.includes(role);
    }
    return false;
}

export const checkIsAdmin = () => {

    return role('ROLE_ADMIN');
};

export const checkIsTeacher = () => {
    return role('ROLE_TEACHER');
};

export const chechIsStudent = () => {
    return role('ROLE_USER');
}