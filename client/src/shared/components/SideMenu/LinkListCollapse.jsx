import { Icon } from "@iconify/react";
import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useHref, useLocation, useNavigation } from "react-router-dom";
import { Icons } from "../../literals/Icons";
import CustomTooltip from "../CustomTooltip";
import { urlSplit } from "@/shared/utils/urlSplit";

export default function LinkListCollapse({
    label,
    list,
    toggleDrawer,
    setCollapse,
    collapse,
}) {
    const [open, setOpen] = useState(false);
    const [tooltip, setTooltip] = useState(false);
    const [urlPage, setUrlpage] = useState("");
    const href = useHref();
    const theme = useTheme();

    useEffect(() => {
        if (collapse === true) setOpen(false);
    }, [collapse]);

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        if (open === true) setCollapse(false);
    }, [open]);

    useEffect(() => {
        const array = urlSplit(href);
        // console.log(array);

        // if(array.includes(label.toLowerCase()) && !collapse == true) setOpen(true)
        if (array[0] === label.toLowerCase() && !collapse == true)
            setOpen(true);
        setUrlpage(array[1].toLowerCase());
    }, [href, collapse]);

    return (
        <>
            <ListItemButton
                onClick={handleClick}
                onMouseOver={() => {
                    setTooltip(true);
                }}
                onMouseLeave={() => {
                    setTooltip(false);
                }}
                selected={false}
                sx={{
                    minHeight: "3.5rem",
                    marginX: "15px",
                    marginY: "3px",
                    borderRadius: "8px",
                    // backgroundColor: open && theme.palette.gray.light,
                }}
            >
                <ListItemIcon sx={{ minWidth: "2.2rem" }}>
                    <Icon
                        icon={Icons[label.toLowerCase().replace(/ /g, "_")]}
                        height="1.6rem"
                        color={
                            !open
                                ? theme.palette.text.secondary
                                : theme.palette.text.primary
                        }
                        style={{ marginLeft: "-3px" }}
                    />
                </ListItemIcon>
                {collapse && tooltip && <CustomTooltip label={label} />}
                {!collapse && (
                    <ListItemText>
                        <Typography
                            fontWeight={!open ? "500" : "900"}
                            color={!open ? "text.secondary" : "text.primary"}
                        >
                            {label}
                        </Typography>
                    </ListItemText>
                )}
                {!collapse && (
                    <Icon
                        icon="iconamoon:arrow-down-2"
                        height="1.8rem"
                        color={theme.palette.text.secondary}
                        style={{
                            transition: "transform 200ms",
                            transform: open ? "rotate(180deg)" : "",
                        }}
                    />
                )}
            </ListItemButton>
            {list.map((it, index) => (
                <Collapse in={open} timeout="auto" key={index}>
                    <List component="div" disablePadding>
                        <Link
                            to={`/painel/${label.toLowerCase()}/${it.toLowerCase()}`}
                            // onClick={() => toggleDrawer(false)}
                            style={{
                                color: theme.palette.text.secondary,
                                textDecoration: "none",
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    // minHeight: "3.5rem",
                                    marginLeft: "35px",
                                    marginRight: "15px",
                                    marginY: "3px",
                                    borderRadius: "8px",
                                    backgroundColor:
                                        it.toLowerCase() === urlPage &&
                                        theme.palette.gray.light,
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: "2.2rem" }}>
                                    <Icon
                                        icon={
                                            Icons[
                                                it
                                                    .toLowerCase()
                                                    .replace(/ /g, "_")
                                            ]
                                        }
                                        height="1.2rem"
                                        color={
                                            it.toLowerCase() === urlPage
                                                ? theme.palette.text.primary
                                                : theme.palette.text.secondary
                                        }
                                    />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography
                                        fontWeight="500"
                                        color={
                                            it.toLowerCase() === urlPage
                                                ? theme.palette.text.primary
                                                : theme.palette.text.secondary
                                        }
                                    >
                                        {it}
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </List>
                </Collapse>
            ))}
        </>
    );
}
