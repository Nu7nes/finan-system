import styled from 'styled-components'

const Link = styled.a`
    width: 100%;
    color: black;
    padding: 1em 0;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1em;
    padding-left: ${props => props.id === 'dashboard' ? '1em' : '2em'};
    cursor: pointer;
`

export default Link;