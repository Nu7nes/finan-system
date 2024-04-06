import React from "react";
import styled from 'styled-components';


const Component = styled.a`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    place-content: center;
    width: 90%;
    padding: 2em 0;
    border: 1px solid black;
    border-radius: 4px;
    text-decoration: none;
`;
const Close = styled.button`
    position: absolute;
    top: 0;
    right: 0;
`

function Modal(props) {
    return(
        <Component>
            {props.children}
            <Close onClick={props.onCloseModal}>X</Close>
        </Component>
    )
}

export default Modal;   