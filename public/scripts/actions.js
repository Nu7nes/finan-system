
document.querySelector('#deleteGroup').addEventListener('click', () => {
    let groups = document.querySelector('#navbar-groups>.active');
    deleteGroup(groups.id)
})

document.querySelector('#formNewGroup').addEventListener('submit', ()=>{
    let name = document.getElementById('inputFormGroup').value
    alert(`O grupo ${name} foi adicionado!`)
})

function amountForm (){
    let name = document.getElementById('inputForm').value
    alert(`${name} foi adicionado!`)
}

function deleteThis(btn) {
    deleteAmounts(btn.id);
}