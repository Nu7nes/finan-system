import React, { useState } from 'react';
import styled from 'styled-components'
import Button from '../styled/Button.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../slices/sidebarSlice';

const Component = styled.div`
    background-color: grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
    height: 7vh;
    position: sticky;
    top: 0;
`

function Header(props) {
    const sideBar = useSelector((state) => state.sidebar.open)
    const dispatch = useDispatch();
    
    function handleSideBar() {
        dispatch(changePage())
    }

    return (
        <Component>
            <h2>Nu7nes</h2>
            <Button bgcolor={'black'} onClick={handleSideBar}>
                ABRIR
            </Button>
        </Component>
    )
}

export default Header;