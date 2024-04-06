import { Icon } from "@iconify/react";
import { TextField } from "@mui/material";

export default function SearchField() {
    return (
        <TextField
            fullWidth
            size="small"
            label="Procurar"
            InputProps={{
                startAdornment: <Icon icon="material-symbols:search-rounded" />,
            }}
            variant="outlined"
        />
    );
}
