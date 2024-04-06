import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";

export default function LoginRefused(){
    return(
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "max-content"
            }}
        >
            <Icon
                height="50px"
                color="red"
                icon="material-symbols:preliminary-outline"
            />
            <Typography
                variant="h5"
                component="h1"
                m={1}
                // style={{
                //     textAlign: "center",
                // }}
            >
                Acesso recusado
            </Typography>
            <Typography>
                Não obtivemos acesso aos seus dados.
            </Typography>
            <p></p>
        </Box>
    )
}