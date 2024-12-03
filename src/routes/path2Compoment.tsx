import * as React from "react";
import Login from '../pages/admin/common/Login';
import Hello from "@/pages/Hello";
const path2components = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/hello',
        component: Hello
    }
]

export default path2components;