import * as React from "react";
import Login from '../pages/admin/common/Login';
import Hello from "@/pages/Hello";
import Demo from "@/pages/demo";
import Data from "@/pages/data";
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
    },
    {
        path: '/demo',
        component: Demo
    },
    {
        path: '/data',
        component: Data
    }
]

export default path2components;