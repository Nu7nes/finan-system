const navBarGroups = document.querySelector('#navbar-groups');
const bodyGroups = document.querySelector('#body-groups');

let values = { income: [], cost: [] };

function notContent() {
    navBarGroups.innerHTML = `<h6>Crie um grupo</h6>`;
    bodyGroups.innerHTML = `<h2>Nenhum grupo selecionado!</h2>`;
}

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
                                                    <li class="list-group-item py-2 input-group d-flex flex-row justify-content-between align-items-center">
                                                        <form class="input-group" id="formNewAmount" action="/new/amount" method="POST" onsubmit="amountForm">    
                                                        
                                                            <input name="type" type="text" value="income" hidden>
                                                            <input name="group" type="text" value="${el._id}" hidden>

                                                            <input name="name" id="inputFormAmoutn" type="text" class="form-control w-25" placeholder="Nome"
                                                            aria-label="Nome" aria-describedby="basic-addon2" required>
                                                            <input name="value" type="text" class="form-control" placeholder="R$"
                                                            aria-label="valor" aria-describedby="basic-addon2" required>
                                                            <div class="input-group-append">
                                                                <button type="submit" class="btn btn-success" id="basic-addon2">Adicionar</button>
                                                            </div>
                                                        </form>
                                                    </li>
                                            </ul>
                                            <ul class="group-list p-0" id="cost-${el._id}">
                                                <h5 class="mt-2 ml-2 p-2 ">Despesas</h5>
                                                    <li class="list-group-item py-2 input-group d-flex flex-row justify-content-between align-items-center">
                                                        <form class="input-group" id="formNewAmount" action="/new/amount" method="POST" onsubmit="amountForm">    
                                                        
                                                            <input name="type" type="text" value="cost" hidden>
                                                            <input name="group" type="text" value="${el._id}" hidden>

                                                            <input name="name" id="inputFormAmoutn" type="text" class="form-control w-25" placeholder="Nome"
                                                            aria-label="Nome" aria-describedby="basic-addon2" required>
                                                            <input name="value" type="text" class="form-control" placeholder="R$"
                                                            aria-label="valor" aria-describedby="basic-addon2" required>
                                                            <div class="input-group-append">
                                                                <button type="submit" class="btn btn-success" id="basic-addon2">Adicionar</button>
                                                            </div>
                                                        </form>
                                                    </li>
                                            </ul>
                                            <ul id="results-${el._id}" class="list-group"></ul>
                                        </div>`

        } else {
            navBarGroups.innerHTML += `<a id="${el._id}" class="nav-link btn" id="v-pills-${newName}-tab" data-toggle="pill" href="#v-pills-${newName}"
                                        role="tab" aria-controls="v-pills-${newName}" aria-selected="true">${el.name}</a>`

            bodyGroups.innerHTML += `<div data-id="${el._id}" class="w-100 content tab-pane fade" id="v-pills-${newName}" role="tabpanel"
                                        aria-labelledby="v-pills-${newName}-tab">
                                        <ul class="group-list p-0" id="income-${el._id}">
                                        <h5 class="mt-2 ml-2 p-2 ">Receitas</h5>
                                            <li class="list-group-item py-2 py-y input-group d-flex flex-row justify-content-between align-items-center">
                                                <form class="input-group" id="formNewAmount" action="/new/amount" method="POST" onsubmit="amountForm">    
                                                
                                                    <input name="type" type="text" value="income" hidden>
                                                    <input name="group" type="text" value="${el._id}" hidden>

                                                    <input name="name" id="inputFormAmoutn" type="text" class="form-control w-25" placeholder="Nome"
                                                    aria-label="Nome" aria-describedby="basic-addon2" required>
                                                    <input name="value" type="text" class="form-control" placeholder="R$"
                                                    aria-label="valor" aria-describedby="basic-addon2" required>
                                                    <div class="input-group-append">
                                                       <button type="submit" class="btn btn-success" id="basic-addon2">Adicionar</button>
                                                    </div>
                                                </form>
                                            </li>
                                        </ul>
                                        <ul class="group-list p-0" id="cost-${el._id}">
                                        <h5 class="mt-2 ml-2 p-2 ">Despesas</h5>
                                            <li class="list-group-item py-2 input-group d-flex flex-row justify-content-between align-items-center">
                                                <form class="input-group" id="formNewAmount" action="/new/amount" method="POST" onsubmit="amountForm">    
                                                
                                                    <input name="type" type="text" value="cost" hidden>
                                                    <input name="group" type="text" value="${el._id}" hidden>

                                                    <input name="name" id="inputFormAmoutn" type="text" class="form-control w-25" placeholder="Nome"
                                                    aria-label="Nome" aria-describedby="basic-addon2" required>
                                                    <input name="value" type="text" class="form-control" placeholder="R$"
                                                    aria-label="valor" aria-describedby="basic-addon2" required>
                                                    <div class="input-group-append">
                                                        <button type="submit" class="btn btn-success" id="basic-addon2">Adicionar</button>
                                                    </div>
                                                </form>
                                                </form>
                                            </li>
                                        </ul>
                                        <ul id="results-${el._id}" class="list-group"></ul>
                                    </div>`
        }
        count = true
    })
}

function renderDashboard() {
    navBarGroups.innerHTML += `<a id="dashboard" class="nav-link m-0 p-0 ml-sm-2" data-toggle="pill" href="#v-pills-dashboard"
                                    role="tab" aria-controls="v-pills-dashboard" aria-selected="false">
                                    <span class="material-symbols-outlined px-3 nav-link btn btn-secondary text-light">
                                        query_stats
                                    </span>
                                </a>`
    bodyGroups.innerHTML += `<div data-id="dashboard" class="w-100 tab-pane fade" id="v-pills-dashboard" role="tabpanel"
                                aria-labelledby="v-pills-dashboard-tab">
                                <h1>okok</h1>
                            </div>`
}

function renderAmounts(array) {
    let content = document.querySelectorAll('.content');
    let x = 0;
    content.forEach(el => {
        let pillID = el.dataset.id;
        let income = "income-" + pillID;
        let cost = "cost-" + pillID;
        let results = "results-" + pillID;

        array.forEach(amount => {
            let idGroup = amount.group;
            let type = amount.type;
            if (pillID === idGroup) {
                if (type == "income") {

                    document.getElementById(income).innerHTML += `
                    <li class="list-group-item py-0 btn btn-light d-flex flex-row justify-content-between align-items-center">
                        <p class="m-0 p-0 w-25 text-left">${amount.name}</p>
                        <h6 class="m-0 p-0">R$ ${amount.value}</h6>
                        <button id="${amount._id}" class="btn m-0 p-0 bg-transparent hover-effect" onclick="deleteThis(this)">
                                <span class="material-symbols-outlined pt-1 pb-0">
                                    delete
                                </span>
                        </button>
                    </li>`

                    values.income.push({
                        group: amount.group,
                        value: amount.value
                    })

                }
                if (type == "cost") {

                    document.getElementById(cost).innerHTML += `
                    <li class="list-group-item py-0 btn btn-light d-flex flex-row justify-content-between align-items-center">
                        <p class="m-0 p-0 w-25 text-left">${amount.name}</p>
                        <h6 class="m-0 p-0">R$ ${amount.value}</h6>
                        <button id="${amount._id}" class="btn p-1 bg-transparent hover-effect" onclick="deleteThis(this)">
                            <span class="material-symbols-outlined pt-1 pb-0">
                                delete
                                </span>
                        </button>
                    </li>`

                    values.cost.push({
                        group: amount.group,
                        value: amount.value
                    })
                }

                document.getElementById(results).innerHTML = renderResults(pillID);

                // el.innerHTML += `<div>${amount.name}</div>`
            }

        })
    })
    // document.getElementById(income).innerHTML += `TOTAL`
}

function renderResults(id) {
    let incomes = calcResults(values.income, id);
    let costs = calcResults(values.cost, id);
    let lucre = calcResults(incomes, costs, "quest");


    function render(msg, color, value) {
        if (value == lucre) {
            if (value < 0) {
                return `<li class="list-group-item bg-${color} text-light d-flex justify-content-between">
                    <p class="p-0 m-0">${msg}</p>
                    <h6 class="p-0 m-0 text-danger">R$ ${value}</h6>
                </li>`
            }
            if (value > 0) {
                return `<li class="list-group-item bg-${color} text-light d-flex justify-content-between">
                    <p class="p-0 m-0">${msg}</p>
                    <h6 class="p-0 m-0 text-success">R$ ${value}</h6>
                </li>`
            }
        } else {
            return `<li class="list-group-item bg-${color} text-light d-flex justify-content-between">
                    <p class="p-0 m-0">${msg}</p>
                    <h6 class="p-0 m-0">R$ ${value}</h6>
                </li>`;
        }
    }

    return render('Total de receitas', 'success', incomes) +
        render('Total de despesas', 'warning', costs) +
        render('Lucro liquido', 'secondary', lucre);

}
function calcResults(array, arrayORid, quest) {
    if (!quest) {
        let count = array.filter(obj => { return obj.group == arrayORid });
        let total = 0;
        count.forEach(obj => { total += obj.value });
        return total;
    } else {
        return array - arrayORid;
    }
}

// 64189c069142dc50f61454e7
// 64189c0e9142dc50f61454eb
