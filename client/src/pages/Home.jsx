import { useHasUser } from "@/routes/PrivateRoutes";
import { createLoginLink } from "@/shared/vendor/mercadoLivreAPI";
import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    function redirectToLogin() {
        window.location.href = createLoginLink();
    }

    useEffect(()=>{
        const isLoggedIn = useHasUser()
        if(isLoggedIn) navigate('/painel/dashboard/inicial')
    }, [])
    return (
        <Container>
            <Button variant="contained" color="success" onClick={redirectToLogin}>Entrar</Button>
        </Container>
    );
}
