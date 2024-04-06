import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function useHasUser(getToken = false){
    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;
    if(getToken) return token
    return isLoggedIn;
}

export default function PrivateRoutes({children}){
    const navigate = useNavigate()
    const isLoggedIn = useHasUser()
    useEffect(()=>{
        // if(!isLoggedIn) navigate('/');
    }, [])
    return children
}