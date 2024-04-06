import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components'
import { add, addGroup } from "../../slices/groupSlice";
import { change } from "../../slices/pagesSlice";

const Form = styled.form`
    
`
const CheckButton = styled.button`
    background-color: ${props => props.activate ? 'green':''};
`

function AmountForm() {
    const [type, setType] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    function handleName(e) {
        setName(e.target.value)
    }
    function handlePrice(e) {
        setPrice(e.target.value)
    }

    const dispatch = useDispatch()
    async function handleSubmit(e) {
        e.preventDefault()
        const object = {
            type: type,
            name: name,
            value: price,
            group: ''
        }
        try {
            await dispatch(addGroup({}));
            console.log('Conta adicionado com sucesso');
        } catch (error) {
            console.error('Erro ao adicionar grupo:', error.message);
        }
    };


    return (
        <Form onSubmit={handleSubmit}>
            {/* <form onSubmit={handleSubmit(this)}> */}
            <div>
                <input type="text" onChange={handleName} value={name} ></input>
                <input type="text" onChange={handlePrice} value={price} ></input>
            </div>
            <div>
                <CheckButton activate={type === 'income' ? true : false} onClick={()=>{setType('income')}}>Income</CheckButton>
                <CheckButton activate={type === 'cost' ? true : false} onClick={()=>{setType('cost')}}>Cost</CheckButton>
            </div>
            <input type="submit"></input>
            {/* </form> */}
        </Form>
    )
}

export default AmountForm;