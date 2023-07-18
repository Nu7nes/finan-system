import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../slices/sidebarSlice';
import styled from 'styled-components'
import { RxHamburgerMenu, RxCross1, RxPerson } from "react-icons/rx";


const Component = styled.div`
    /* background-color: ${props => props.theme.colors.white}; */
    color: ${props => props.theme.fontColors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
    height: 7vh;
    position: sticky;
    top: 0;

    >svg {
        /* margin-left: 1rem; */
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    >button {
        color: ${props => props.theme.fontColors.black};
        display: grid;
        place-content: center;
        border: none;
        /* padding: 1rem; */
        background-color: transparent;
        font-size: 1.5em;
    }
`

function Header(props) {
    const sideBar = useSelector((state) => state.sidebar.open)
    const dispatch = useDispatch();

    function handleSideBar() {
        dispatch(changePage())
    }

    return (
        <Component>
            <RxPerson />
            <button onClick={handleSideBar}>
                {sideBar ? <RxCross1 /> : <RxHamburgerMenu />}
            </button>
        </Component>
    )
}

export default Header;