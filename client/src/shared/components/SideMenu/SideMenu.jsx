import { Icon } from "@iconify/react";
import {
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import LinkList from "./LinkList";
import Logo from "@/assets/logo.jpeg";
import { useTheme } from "@emotion/react";

export default function SideMenu({ matches, toggleDrawer }) {
    const [collapse, setCollapse] = useState(false);
    const theme = useTheme();

    
    
    return (
        <Box position="relative">
            {!matches && (
                <Paper
                    elevation={4}
                    sx={{
                        position: "absolute",
                        right: collapse ? "-50px" : "-20px",
                        top: "30px",
                        transition: "right 600ms",
                        zIndex: "1300",
                        borderRadius: 10,
                    }}
                >
                    <IconButton
                        onClick={
                            !matches
                                ? () => setCollapse(!collapse)
                                : toggleDrawer(false)
                        }
                    >
                        <Icon
                            icon="iconamoon:arrow-left-2-bold"
                            height="1.2rem"
                            style={{
                                rotate: collapse ? "-180deg" : "",
                                transition: "rotate 300ms",
                            }}
                        />
                    </IconButton>
                </Paper>
            )}
            <Paper
            variant="elevation"
                // square
                elevation={!matches ? 0 : 0}
                sx={{
                    pt: '1px',
                    overflowX: !collapse && "hidden",
                    width: collapse ? "80px" : "90vw",
                    maxWidth: matches ? "90vw" : "270px",
                    minHeight: matches ? "inherit" : "100vh",
                    transition: "width 300ms",
                    top: "inherit",
                    textWrap: "nowrap",
                    borderRadius: '0',
                }}
                role="presentation"
            >
                <Stack
                    height="90px"
                    ml={!collapse ? 2 : 2}
                    mr={!matches ? 0 : 1}
                    direction="row"
                    justifyContent={matches && "space-between"}
                    alignItems="center"
                    sx={{ transition: "all 500ms" }}
                    position="relative"
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        // ml="17px"
                    >
                        <Box
                            sx={{
                                borderRadius: "12px",
                                overflow: "hidden",
                                paddingX: "5px",
                                paddingTop: "5px",
                                bgcolor: "black",
                            }}
                        >
                            <img src={Logo} width="36px" />
                        </Box>
                        {!collapse && (
                            <Typography variant="h6" color="common.light">
                                Nexus
                            </Typography>
                        )}
                    </Stack>
                    {matches && (
                        <IconButton
                            onClick={
                                !matches
                                    ? () => setCollapse(!collapse)
                                    : toggleDrawer(false)
                            }
                        >
                            <Icon
                                icon="iconamoon:arrow-left-2-bold"
                                height={matches ? "2.2rem" : "1.8rem"}
                            />
                        </IconButton>
                    )}
                </Stack>
                <LinkList
                    toggleDrawer={toggleDrawer}
                    setCollapse={setCollapse}
                    collapse={collapse}
                />
            </Paper>
        </Box>
    );
}
