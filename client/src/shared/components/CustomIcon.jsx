import { Icon } from "@iconify/react";
import { Box, Button, ButtonGroup, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchColorMode } from "@/store/slices/userSlice";

export default function CustomIcon({ children, label, isSwitch }) {
    const theme = useTheme();
    const [isHover, setIsHover] = useState(false);
    const icon = children.props.icon;

    const dispatch = useDispatch();
    const currentColorMode = useSelector(
        (state) => state.user.config.color_mode
    );
    function switchMode() {
        if (isSwitch) {
            let newColorMode = "";
            switch (currentColorMode) {
                case "light":
                    newColorMode = "dark";
                    break;
                case "dark":
                    newColorMode = "light";
                    break;
            }
            dispatch(switchColorMode(newColorMode));
        }
    }

    return (
        <Tooltip title={label} arrow>
            <button
                aria-label={label}
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                }}
                onMouseEnter={() => {
                    setIsHover(true);
                }}
                onMouseLeave={() => {
                    setIsHover(false);
                }}
                onClick={isSwitch ? switchMode : null}
            >
                <Icon
                    icon={icon}
                    color={
                        isHover
                            ? theme.palette.text.primary
                            : theme.palette.text.secondary
                    }
                    height="1.6rem"
                />
            </button>
        </Tooltip>
    );
}
