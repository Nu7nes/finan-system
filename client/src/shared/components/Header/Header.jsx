import {
    Drawer,
    Grid,
    IconButton,
    Paper,
    TextField,
    useMediaQuery,
} from "@mui/material";
import ShortCut from "./ShortCuts";
import AnimatedLogo from "../AnimatedLogo";
import UserShortCuts from "./UserShortCuts";
import { Icon } from "@iconify/react";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import SearchField from "../SearchField";

export default function Header() {
    const matches = useMediaQuery("(max-width:600px)");
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const toggleSearch = (newOpen) => () => {
        setSearch(newOpen);
    };

    return (
        <Paper
            elevation={0}
            sx={{
                borderRadius: 0,
                zIndex: "1200",
                position: matches ? "sticky" : "inherit",
                top: "0",
            }}
        >
            <Grid
                container
                justifyContent={"space-between"}
                justifyItems="center"
                px={1}
                // py={1}
                height="90px"
            >
                {matches && (
                    <Grid item md={"auto"} alignSelf="center">
                        <IconButton onClick={toggleDrawer(true)}>
                            <Icon
                                icon="gg:menu-left"
                                color={theme.palette.primary.main}
                            />
                        </IconButton>
                    </Grid>
                )}
                {!matches && (
                    <Grid item pt={1} md={"auto"} alignSelf="center">
                        {/* <ShortCut /> */}
                    </Grid>
                )}
                {/* {!matches && (
                    <Grid item md="auto" justifyContent="center">
                        <AnimatedLogo />
                    </Grid>
                )} */}
                <Grid item md="auto" alignSelf="center">
                    <UserShortCuts />
                </Grid>
            </Grid>
            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                variant="temporary"
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <SideMenu
                    matches={matches}
                    toggleDrawer={toggleDrawer}
                    onClose={toggleDrawer}
                />
            </Drawer>
        </Paper>
    );
}
