import React from "react";
import Dashboard from "./Dashboard";
import Main from "../Main";
import { useSelector } from "react-redux";

function Content() {

    const groups = useSelector((state) => state.groups);
    const pages = useSelector((state) => state.pages);
    

    return (
        <div>
            <Dashboard></Dashboard>
            {groups.data.map(group => group._id === pages.current ? <Main group={group} /> : '')}
        </div>

    )
}

export default Content;