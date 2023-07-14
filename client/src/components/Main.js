import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAmountsById } from "../slices/amountSlice";
import styled from 'styled-components'
import Button from "./styled/Button.styled";
import Modal from "./styled/Modal.styled";
import AmountForm from "./styled/AmountForm.styled copy";

const Component = styled.div`
    color: black;
`

function Main(props) {

    const [modal, setModal] = useState(false)
    function handleModal() {
        setModal(!modal)
    }

    const amounts = useSelector((state) => state.amounts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAmountsById(props.group._id))
    }, [dispatch])
    console.log(amounts);

    return (
        <Component>
            {props.group.name}
            <Button onClick={handleModal} bgcolor={'grey'}>Adicionar</Button>
            <div>
                <h3>CREDITOS</h3>
                {amounts.data.map(amount => amount.type === 'income' ? <div>{amount.name} {amount.price}</div> : '')}
            </div>
            <div>
                <h3>DEBITOS</h3>
                {amounts.data.map(amount => amount.type === 'cost' ? <div>{amount.name} {amount.price}</div> : '')}
            </div>
            {modal ?
                <Modal onCloseModal={handleModal}>
                    <AmountForm />
                </Modal> : ''}
        </Component>
    )
}

export default Main;