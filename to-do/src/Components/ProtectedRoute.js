import { Navigate } from "react-router-dom";

// use of imported Navigate function
// created a protected route component for private to route users who haven't authenticated to the home page

export const ProtectedRoute = ({children, activeUser}) => {

    
    return activeUser ? children : <Navigate to="/" />;
    
};