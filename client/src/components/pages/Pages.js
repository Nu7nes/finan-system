import React from "react";
import Dashboard from "./dashboard/Dashboard";
import Main from "../Main";
import { useSelector } from "react-redux";

function Pages() {

    const groups = useSelector((state) => state.groups);
    const pages = useSelector((state) => state.pages);
    

    return (
        <main>
            {pages.current === 'dashboard' ? <Dashboard /> : ''}
            {groups.data.map(group => group._id === pages.current ? <Main group={group} /> : '')}
        </main>

    )
}

export default Pages;