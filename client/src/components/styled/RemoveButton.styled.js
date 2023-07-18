import styled from 'styled-components';

const RemoveButton = styled.a`
    background-color: ${props => props.theme.colors.cost};
    color: ${props => props.theme.fontColors.white};
    padding:  ${props => props.isActive ? '0' : '10px 14px'};
    margin: 0 10px ;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    cursor: pointer;

`;

export default RemoveButton;