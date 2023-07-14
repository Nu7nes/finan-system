import React, { useState } from "react";
import styled from 'styled-components';
import Groups from './header/Groups';
import Link from "./styled/Link.styled";
import Button from "./styled/Button.styled";
import Modal from "./styled/Modal.styled";
import GroupForm from './styled/GroupForm.styled';
import { motion } from "framer-motion";

const Component = styled.div`
    width: 100%;
    height: 95vh;
    position: absolute !important;
    background-color: black;
    top: 0;
    right: 0;
    display: flex;
    justify-content: end;
`
const Menu = styled.ul`
    width: 90%;
    height: 100%;
    padding: 0 !important;
    background-color: red;
    display: flex;
    flex-direction: column;
    gap: 2em;
`
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


    const item = {
        hidden: { x: 100 + '%' },
        show: { x: 0 }
    }
    return (

        <motion.div
            initial="hidden"
            animate="show"
        >

            <motion.div variants={item}>
                <Component>
                    <Menu>
                        <Top>
                            <li key='add' onClick={handleModal}><Button bgcolor={'blue'}>Add</Button></li>
                            <li key='1'><Button bgcolor={'blue'}>Test</Button></li>
                            <li key='2'><Button bgcolor={'blue'}>Test</Button></li>
                        </Top>
                        <Groups />
                        {modal ?
                            <Modal onCloseModal={handleModal}>
                                <GroupForm
                             />

                            </Modal> : ''}
                    </Menu>
                </Component>
            </motion.div>
        </motion.div>
    )
}

export default SideBar;