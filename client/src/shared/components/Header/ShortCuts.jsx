import { Icon } from "@iconify/react";
import { Box, Button, ButtonGroup, IconButton } from "@mui/material";
import CustomIcon from "../CustomIcon";

export default function ShortCuts() {
    return (
        <Box alignItems={'center'}>
            
            <CustomIcon label="Lista">
                <Icon icon="material-symbols:select-check-box-rounded" />
            </CustomIcon>
            <CustomIcon label="Calendario">
                <Icon icon="material-symbols:calendar-today-outline" />
            </CustomIcon>
            <CustomIcon label="Favoritos">
                <Icon icon="material-symbols:kid-star-outline" />
            </CustomIcon>

        </Box>
    );
}
