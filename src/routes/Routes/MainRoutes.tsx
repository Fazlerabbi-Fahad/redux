import { createBrowserRouter } from "react-router-dom";
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home/Home'));
const App = lazy(() => import('../../App'));
const Books = lazy(() => import('../../pages/Books/Books'));
const Book = lazy(() => import('../../pages/Books/Book'));
const AddBook = lazy(() => import('../../pages/Books/AddBook'));
const PrivateRoute = lazy(() => import('./PrivateRoutes'));
const UserNotFound = lazy(() => import('../../pages/UserNotFound'));

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/books',
                element: <PrivateRoute> <Books /></PrivateRoute>
                ,
            },
            {
                path: '/book/:id',
                element: <PrivateRoute><Book /></PrivateRoute>,
            },
            {
                path: '/addBook',
                element: <PrivateRoute><AddBook /></PrivateRoute>,
            },
            {
                path: '/*',
                element: <UserNotFound />,
            }
        ]
    }
])