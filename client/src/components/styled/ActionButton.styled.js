import styled from 'styled-components';

const ActionButton = styled.button`
    background-color: ${props => props.bgcolor};
    color: ${props => props.theme.fontColors.white};
    width: fit-content;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export default ActionButton;