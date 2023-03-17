
document.querySelector('#deleteGroup').addEventListener('click', () => {
    let groups = document.querySelector('#navbar-groups>.active')
    console.log(groups.id);
    deleteGroup(groups.id)
})

document.querySelector('#formNewGroup').addEventListener('submit', (res)=>{
    let name = document.getElementById('inputFormGroup').value
    alert(`O grupo ${name} foi adicionado!`)
})

