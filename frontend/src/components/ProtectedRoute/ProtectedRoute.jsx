import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const ProtectedRoute = ({ children }) => {
    const { authStatus } = useContext(UserContext);

    if (!authStatus) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
