
import { useTheme } from "@mui/material";

export default function CustomTooltip({ label }) {
    const theme = useTheme();

    return(
        <div
            style={{
                backgroundColor: theme.palette.gray.main,
                color: theme.palette.text,
                fontSize: '0.8rem',
                letterSpacing: '1px',
                fontWeight: '500',
                color: 'white',
                position: 'absolute',
                left: '-5rem',
                top: '50%',
                transform: 'translateX(10rem) translateY(-50%)',
                borderRadius: '10px',
                padding: '0.4rem',
                transition: 'transform 300ms ease'
            }}
        >{label}</div>
    )
}
