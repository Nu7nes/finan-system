
import { Box, Container, Grid, Stack, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

const boxStyle = {
    p: 1.5,
    display: "flex",
    justifyContent: "stretch",
    alignItems: "stretch",
    gap: 3,
    flexWrap: "wrap",
};

export default function Inicial() {
    const [data, setData] = useState({});
    useEffect(() => {
        // getSales().then((response) => {
        //     // setData({ ...response, ...data });
        // });
    }, []);

    useEffect(() => {
        // console.log(data);
        if (data.vendas) {
            setSales(data.vendas.total_vendas);
        }
    }, [data]);
    return (
        <Box >
           ashdbahsdbsahdbhadbsh
        </Box>
    );
}
