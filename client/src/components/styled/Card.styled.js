import React from "react";
import { styled } from "styled-components";

const Component = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    padding: 5px 10px;
    background-color: ${props => eval('props.theme.colors.' + props.type)};
    color: #ffffff;
    border-radius: 1em;

`


export default Component;