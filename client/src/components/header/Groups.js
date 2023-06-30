
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups } from '../../slices/groupSlice';
import { useEffect } from 'react';


// function handleGroups(req) {
//   const dispatch = useDispatch;
//   req ? store.dispatch("add") : store.dispatch("remove")
// }

function Groups(props) {
  const groups = useSelector((state) => state.groups.groups);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroups())
  }, [])

  console.log(groups)

  return (
    <Nav className="justify-content-end flex-grow-1 pe-3">
      <Nav.Link href="#action4">Dash</Nav.Link>
      <Nav.Link href="#action1" >Criar</Nav.Link>
      {groups.map(item => <Nav.Link href={`#${item.name}`}>{item.name}</Nav.Link>
      )}
    </Nav>
  )
}

export default Groups;