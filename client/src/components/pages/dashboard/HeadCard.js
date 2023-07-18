import React from "react";
import { styled } from "styled-components";

export const HeadCard = styled.div`
    width: 70vw;
    height: 70vw;
    border-radius: 50px;
    background-color: ${props => props.theme.colors.tertiary};
    position: absolute;
    top: 12vh;
    left: 50%;
    transform: translate(-50%, 0);
`

// function HeadCard(props) {
//     return(
//         <Component />
//     )
// }

// export default HeadCard;