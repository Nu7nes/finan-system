import styled from 'styled-components';

const Button = styled.a`
    background-color: ${props => props.bgcolor};
    height: 100%;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    display: grid;
    place-content: center;
    cursor: pointer;
`;

export default Button;