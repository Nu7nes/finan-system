
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups, removeGroup } from '../../slices/groupSlice';
import { useEffect } from 'react';
import styled from 'styled-components'
import { RxDashboard, RxMinusCircled, RxStack } from 'react-icons/rx'
import Link from '../styled/Link.styled';
import RemoveButton from '../styled/RemoveButton.styled';
import Modal from '../styled/Modal.styled';
import { change } from '../../slices/pagesSlice';
import { changePage } from '../../slices/sidebarSlice';
import { removeAmount } from '../../slices/amountSlice';

const Ul = styled.ul`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    padding: 0;
    list-style: none;
    >li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-image: linear-gradient(to right,
                                      #ffffff00,
                                      ${props => props.theme.colors.tertiary},
                                      #ffffff00) 1;
    }
    >li:last-child {
      border-bottom: none;
    }
`


function Groups(props) {
  const groups = useSelector((state) => state.groups);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroups())
  }, [dispatch])
  // console.log(groups)

  async function handleRemove(e) {
    const id = e.target.id
    // console.log(id);
    try {
      await dispatch(removeGroup(id));
      // await dispatch(removeAmount())
      dispatch(fetchGroups())

      console.log('Grupo removido com sucesso');
    } catch (error) {
      console.error('Erro ao remover grupo:', error.message);
    }
  }

  function handleContent(e) {
    const id = e.target.id
    dispatch(change(id))
    dispatch(changePage())
  }


  return (
    <Ul>
      <li key='dash'>
        <Link id={'dashboard'} onClick={handleContent}><RxDashboard /> Dashboard</Link>
      </li>
      {groups.data.map(item => <li key={item._id}>
        <Link id={item._id} onClick={handleContent}><RxStack /> {item.name}</Link>
        <RemoveButton title='Remover grupo' id={item._id} onClick={handleRemove}><RxMinusCircled /></RemoveButton>
      </li>
      )}
    </Ul>
  )
}

export default Groups;