import styled from "styled-components"

export const StyledButton = styled.button`
    background-color: white;
    cursor: pointer;
    padding: 16px;
    border:0;
    margin: 5px;

    &:hover{
        background-color: darkgray;
    }
    &:focus{
        outline: 1px solid black;
    }
    &:disabled{
        background-color: lightgray;
        cursor:default;
    }
    ${(props) => 
    props.danger &&
    `
    background-color: red;
    color: white;

    &:hover{
        background-color: darkred;
    }
    `}

    ${(props) => 
    props.success &&
    `
    background-color: green;
    color: white;
    &:hover{
        background-color: darkgreen;
    }

    `}

    
`