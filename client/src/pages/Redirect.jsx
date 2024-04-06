import LoginRefused from "@/shared/components/LoginRefused";
import LoginSuccess from "@/shared/components/LoginSuccess";
import { authUserCode } from "@/shared/services/internalApi/auth";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function Redirect() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");

    useEffect(() => {
        authUserCode(code, dispatch, navigate);
    }, [code, dispatch, navigate]);

    return (
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
            }}
        >
            {code ? <LoginSuccess /> : <LoginRefused />}
        </Box>
    );
}
