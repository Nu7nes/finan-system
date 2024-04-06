import { useTheme } from "@emotion/react";
import { Avatar, Box, Stack, Typography, useMediaQuery } from "@mui/material";
import CustomIcon from "../CustomIcon";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import CustomMenu from "./CustomMenu";

export default function UserShortCuts() {
    const theme = useTheme();
    const matches = useMediaQuery("(max-width:600px)");
    const currentColorMode = useSelector(
        (state) => state.user.config.color_mode
    );
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={matches ? 1 : 2}
        >
            <Stack
                direction="row"
                alignItems="center"
                spacing={matches ? 0 : 1}
            >
                <CustomIcon label="Procurar">
                    <Icon icon="material-symbols:search-rounded" />
                </CustomIcon>
                <CustomIcon label="Mudar tema" isSwitch={true}>
                    <Icon
                        icon={
                            (currentColorMode === "light" &&
                                "material-symbols:light-mode-outline-rounded") ||
                            (currentColorMode === "dark" &&
                                "material-symbols:dark-mode-outline-rounded")
                        }
                    />
                </CustomIcon>
                <CustomIcon label="Notificações">
                    <Icon icon="material-symbols:notifications-outline" />
                </CustomIcon>
            </Stack>

            <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                height="100%"
            >
                <Avatar
                    alt="profile"
                    src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
                    sx={{
                        bgcolor: theme.palette.primary.main,
                        color: theme.palette.common.white,
                        border: "1px solid",
                        borderColor: theme.palette.primary.main,
                        width: 50,
                        height: 50,
                    }}
                ></Avatar>
                {!matches && <Typography>Jeny</Typography>}
                <CustomMenu />
            </Stack>
        </Stack>
    );
}
