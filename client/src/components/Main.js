import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAmountsById, removeAmount } from "../slices/amountSlice";
import styled from 'styled-components'
import ActionButton from "./styled/ActionButton.styled";
import Modal from "./styled/Modal.styled";
import AmountForm from "./forms/AmountForm";
import Card from "./styled/Card.styled";
import RemoveButton from "./styled/RemoveButton.styled";
import { RxMinusCircled } from "react-icons/rx";
import SelectComponent from "./Select";

const options = [
    {value: '' ,label: 'Todos'},
    {value: 'income' ,label: 'Créditos'},
    {value: 'cost' ,label: 'Débitos'}
]

const Component = styled.div`
    background-color: ${props => props.theme.colors.primary};
    height: 93vh;
    color: black;
    padding: 1rem;
    >div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
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
    }, [dispatch, props.group._id])
    // console.log(amounts);

    async function handleRemove(e) {
        const id = e.target.id
        console.log(id);
        try {
            await dispatch(removeAmount(id));
            dispatch(fetchAmountsById(props.group._id))
            console.log('Amount removido com sucesso');
        } catch (error) {
            console.error('Erro ao remover amount:', error.message);
        }
    }

    return (
        <Component>
            <div>
                <h2>{props.group.name}</h2>
                <ActionButton onClick={handleModal} bgcolor={'grey'}>Adicionar</ActionButton>
            </div>
            <SelectComponent options={options} initial={''}/>
            {amounts.data.map(amount =>
                <Card type={amount.type}>
                    <h6>{amount.name}</h6>
                    <p>{amount.value}</p>
                    <RemoveButton onClick={handleRemove} id={amount._id}>
                        <RxMinusCircled />
                    </RemoveButton>
                </Card>)}
            {modal ?
                <Modal onCloseModal={handleModal}>
                    <AmountForm groupid={props.group._id} />
                </Modal> : ''}
        </Component>
    )
}

export default Main;