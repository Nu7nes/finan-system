import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components'
import { add, addGroup } from "../../slices/groupSlice";
import { change } from "../../slices/pagesSlice";

const Form = styled.form`
    
`

function GroupForm() {

    const [group, setGroup] = useState('')

    function handleChange(e) {
        setGroup(e.target.value)
    }

    const dispatch = useDispatch()
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await dispatch(addGroup(group));
            await dispatch(change(group));
            console.log('Grupo adicionado com sucesso');
        } catch (error) {
            console.error('Erro ao adicionar grupo:', error.message);
        }
    };


    return (
        <Form onSubmit={handleSubmit}>
            {/* <form onSubmit={handleSubmit(this)}> */}
            <input type="text" onChange={handleChange} value={group} ></input>
            <input type="submit"></input>
            {/* </form> */}
        </Form>
    )
}

export default GroupForm;