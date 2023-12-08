
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux/Hooks';
import { useSelector } from 'react-redux';
import { selectUser, selectIsAuthenticated } from '../../redux/User/userSlice';

interface IProps {
    children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
    const isAuthenticated = useAppSelector(selectIsAuthenticated);


    if (isAuthenticated) {
        return <p>Loading...</p>;
    }


    return children;
}