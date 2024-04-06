import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

export default function LoginSuccess() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "max-content",
            }}
        >
            <Icon icon="line-md:loading-loop" height="50px" color="red" />
            <Typography align="center" variant="h5" component="h1" m={1}>
                Aguarde!
            </Typography>
            <Typography align="center">
                Estamos acessando os dados da sua conta.
            </Typography>
            <Typography align="center">
                Você será redirecionado em instantes...
            </Typography>
        </Box>
    );
}
