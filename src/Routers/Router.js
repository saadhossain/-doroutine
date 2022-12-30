import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import MyTasks from "../Pages/MyTasks/MyTasks";
import CompletedTasks from "../Pages/CompletedTasks/CompletedTasks";
import AllTasks from "../Pages/Dashboard/AllTasks";
import TaskCompleted from "../Pages/Dashboard/TaskCompleted";
import UpdateTask from "../Pages/UpdateTask/UpdateTask";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addtask',
                element: <PrivateRouter><AddTask></AddTask></PrivateRouter>
            },
            {
                path: '/mytask',
                element: <PrivateRouter><MyTasks></MyTasks></PrivateRouter>
            },
            {
                path: '/completedtasks',
                element: <PrivateRouter><CompletedTasks></CompletedTasks></PrivateRouter>
            },
            {
                path: '/updatetask/:id',
                loader: ({params}) => fetch(`https://doroutine.vercel.app/singletask/${params.id}`),
                element: <PrivateRouter><UpdateTask></UpdateTask></PrivateRouter>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
        children: [
            {
                path: '/dashboard',
                element: <AllTasks></AllTasks>
            },
            {
                path: '/dashboard/taskscompleted',
                element: <TaskCompleted></TaskCompleted>
            }
        ]
    }
])