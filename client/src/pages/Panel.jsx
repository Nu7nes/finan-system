import Header from "@/shared/components/Header/Header";
import SideMenu from "@/shared/components/SideMenu/SideMenu";
import {
    Button,
    Container,
    Box,
    Typography,
    Grid,
    useMediaQuery,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Panel({ children }) {
    const matches = useMediaQuery("(min-width:600px)");
    const [menuState, setMenuState] = useState();

    function onTogglerSide(state) {
        // setMenuState(state)
        console.log(state);
    }

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/groups")
            .then((res) => {
                console.log(res);
            })
            .catch(console.log);
    }, []);

    return (
        <Box>
            {/* <Header /> */}
            <Grid
                container
                columns={{ xs: 2 }}
                wrap="nowrap"
                // justifyContent={"space-between"}
                // justifyItems="center"
                // px={1}
                // py={1}
            >
                {matches && (
                    <Grid
                        item
                        md={"auto"}
                        alignSelf="start"
                        position="sticky"
                        top="0"
                    >
                        <SideMenu />
                    </Grid>
                )}
                <Grid item justifySelf="stretch" width="100%">
                    <Header />
                    <Box
                        mx={{ md: 0, lg: 6, xl: 10 }}
                        my={{ md: 0, lg: 2, xl: 4 }}
                    >
                        {children}
                    </Box>
                    {/* <Routes>
                        <Route
                            index
                            path="/dashboard/inicial"
                            element={<Inicial />}
                        />
                        <Route
                            index
                            path="/dashboard/financeiro"
                            element={<Financial />}
                        />
                    </Routes> */}
                </Grid>
            </Grid>
        </Box>
    );
}
