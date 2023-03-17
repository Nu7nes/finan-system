const navBarGroups = document.querySelector('#navbar-groups')
const bodyGroups = document.querySelector('#body-groups')


function renderGroups(array) {
    let count = false
    navBarGroups.innerHTML = ''
    bodyGroups.innerHTML = ''
    array.forEach(el => {

        let newName = el.name.replace(/\s+/g, '-')


        if (!count) {
            navBarGroups.innerHTML += `<a id="${el._id}" class="nav-link btn active" id="v-pills-${newName}-tab" data-toggle="pill" href="#v-pills-${newName}"
                                        role="tab" aria-controls="v-pills-${newName}" aria-selected="true">${el.name}</a>`

            bodyGroups.innerHTML += `<div data-id="${el._id}" class="w-100 content tab-pane fade show active" id="v-pills-${newName}" role="tabpanel"
                                         aria-labelledby="v-pills-${newName}-tab">
                                            <ul class="group-list p-0" id="income-${el._id}">
                                            <h5 class="mt-2 ml-2 p-2 ">Receitas</h5>
                                                <li class="list-group-item input-group d-flex flex-row justify-content-between align-items-center">
                                                    <form class="input-group">    
                                                        <input type=" text" class="form-control w-25" placeholder="Nome"
                                                        aria-label="Nome" aria-describedby="basic-addon2">
                                                        <input type=" text" class="form-control" placeholder="R$"
                                                        aria-label="valor" aria-describedby="basic-addon2">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="basic-addon2">Adicionar</span>
                                                        </div>
                                                    </form>
                                                </li>
                                            </ul>
                                            <ul class="group-list p-0" id="cost-${el._id}">
                                            <h5 class="mt-2 ml-2 p-2 ">Despesas</h5>
                                                <li class="list-group-item input-group d-flex flex-row justify-content-between align-items-center">
                                                    <form class="input-group">    
                                                        <input type=" text" class="form-control w-25" placeholder="Nome"
                                                        aria-label="Nome" aria-describedby="basic-addon2">
                                                        <input type=" text" class="form-control" placeholder="R$"
                                                        aria-label="valor" aria-describedby="basic-addon2">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="basic-addon2">Adicionar</span>
                                                        </div>
                                                    </form>
                                                </li>
                                            </ul>
                                        </div>`

        } else {
            navBarGroups.innerHTML += `<a id="${el._id}" class="nav-link btn" id="v-pills-${newName}-tab" data-toggle="pill" href="#v-pills-${newName}"
                                        role="tab" aria-controls="v-pills-${newName}" aria-selected="true">${el.name}</a>`

            bodyGroups.innerHTML += `<div data-id="${el._id}" class="w-100 content tab-pane fade" id="v-pills-${newName}" role="tabpanel"
                                        aria-labelledby="v-pills-${newName}-tab">
                                        <ul class="group-list p-0" id="income-${el._id}">
                                        <h5 class="mt-2 ml-2 p-2 ">Receitas</h5>
                                            <li class="list-group-item input-group d-flex flex-row justify-content-between align-items-center">
                                                <form class="input-group">    
                                                    <input type=" text" class="form-control w-25" placeholder="Nome"
                                                    aria-label="Nome" aria-describedby="basic-addon2">
                                                    <input type=" text" class="form-control" placeholder="R$"
                                                    aria-label="valor" aria-describedby="basic-addon2">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text" id="basic-addon2">Adicionar</span>
                                                    </div>
                                                </form>
                                            </li>
                                        </ul>
                                        <ul class="group-list p-0" id="cost-${el._id}">
                                        <h5 class="mt-2 ml-2 p-2 ">Despesas</h5>
                                            <li class="list-group-item input-group d-flex flex-row justify-content-between align-items-center">
                                                <form class="input-group">    
                                                    <input type=" text" class="form-control w-25" placeholder="Nome"
                                                    aria-label="Nome" aria-describedby="basic-addon2">
                                                    <input type=" text" class="form-control" placeholder="R$"
                                                    aria-label="valor" aria-describedby="basic-addon2">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text" id="basic-addon2">Adicionar</span>
                                                    </div>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>`
        }
        count = true
    })
}

function renderAmounts(array) {
    let content = document.querySelectorAll('.content');

    content.forEach(el => {
        let pillID = el.dataset.id;
        array.forEach(amount => { 
            let idGroup = amount.group;
            let type = amount.type;

            let income = "income-" + pillID
            let cost = "cost-" + pillID
            console.log(income, cost)

            if(pillID === idGroup) {
                if(type == "income") {
                    document.getElementById(income).innerHTML += `
                    
                    <li class="list-group-item btn btn-light d-flex flex-row justify-content-between align-items-center">
                        <p class="m-0">${amount.name}</p>
                        <h6 class="m-0">R$ ${amount.value}</h6>
                        <button class="btn p-1 bg-transparent hover-effect">
                            <span class="material-symbols-outlined pt-1 pb-0">
                                delete
                                </span>
                        </button>
                    </li>`
                    
                }
                if(type == "cost"){
                    document.getElementById(cost).innerHTML += `
                    
                    <li class="list-group-item btn btn-light d-flex flex-row justify-content-between align-items-center">
                        <p class="m-0">${amount.name}</p>
                        <h6 class="m-0">R$ ${amount.value}</h6>
                        <button class="btn p-1 bg-transparent hover-effect">
                            <span class="material-symbols-outlined pt-1 pb-0">
                                delete
                                </span>
                        </button>
                    </li>`
                }

                // el.innerHTML += `<div>${amount.name}</div>`
            }
            
        })
    })
}

