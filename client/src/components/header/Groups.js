
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups, removeGroup } from '../../slices/groupSlice';
import { useEffect } from 'react';
import styled from 'styled-components'
import Link from '../styled/Link.styled';
import Button from '../styled/Button.styled';
import Modal from '../styled/Modal.styled';
import { change } from '../../slices/pagesSlice';
import { changePage } from '../../slices/sidebarSlice';

const Ul = styled.ul`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 1.5em;
    list-style: none;
    >li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      gap: 1em;
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
        <Link id={'dashboard'} onClick={handleContent}>Dashboard</Link>
      </li>
      {groups.data.map(item => <li key={item._id}>
        <Link id={item._id} onClick={handleContent}>{item.name}</Link>
        <Button id={item._id} onClick={handleRemove}>Remove</Button>

      </li>
      )}
    </Ul>
  )
}

export default Groups;