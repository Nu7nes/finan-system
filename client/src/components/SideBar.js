import React, { useState } from "react";
import styled from 'styled-components';
import Groups from './header/Groups';
import Button from "./styled/ActionButton.styled";
import Modal from "./styled/Modal.styled";
import GroupForm from './forms/GroupForm';
import { motion } from "framer-motion";
import {RxPlus} from 'react-icons/rx'

const Component = styled.div`
    width: 100%;
    height: calc(100% - 7vh);
    position: absolute !important;
    background-color: ${props => props.theme.colors.primary};
    top: 7vh;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 2em;
`
// const Menu = styled.ul`
//     width: 90%;
//     height: 100%;
//     padding: 0 !important;
//     background-color: red;
//     display: flex;
//     flex-direction: column;
//     gap: 2em;
// `
const Top = styled.ul`
    align-self: center;
    margin-top: 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    list-style: none;
`


function SideBar(props) {

    const [modal, setModal] = useState(false)

    function handleModal() {
        setModal(!modal)
    }


    // const item = {
    //     hidden: { x: 100 + '%' },
    //     show: { x: 0 }
    // }
    return (
        <Component>
            <Top>
                <li key='add' onClick={handleModal}><Button bgcolor={'blue'}>Adicionar grupo<RxPlus /></Button></li>
                
            </Top>
            <Groups />
            {modal ?
                <Modal onCloseModal={handleModal}>
                    <GroupForm
                    />

                </Modal> : ''}
        </Component>

    )
}

export default SideBar;