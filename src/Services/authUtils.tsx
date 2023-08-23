import jwt_decode from 'jwt-decode';
import { useAuth } from './authContext';

export const checkIsAdmin = () => {

    const { token } = useAuth();
    if (token) {
        const decodedToken = jwt_decode(token);
        return decodedToken.roles.includes('ROLE_ADMIN');
    }
    return false;
};