const ADDRESS = "http://192.168.1.69:3000";
let GROUPS = [];
let AMOUNTS = [];

getGroups();

function getTime() {
    fetch(ADDRESS + "/time")
        .then(res => {
            return res.json();
        }).then(json => {
            let timestamp = JSON.parse(json);
            console.log(new Date(timestamp))
            // return timestamp;
        })
}

function getGroups() {
    GROUPS = [];
    AMOUNTS = [];
    fetch(ADDRESS + "/groups")
        .then(res => {
            return res.json();
        }).then(json => {
            let groups = JSON.parse(json);

            groups.forEach(post => {
                GROUPS.push(post);
            })
            if (GROUPS.length < 1) {
                notContent();
            } else {
                renderGroups(GROUPS);
                getAmounts();
            }
        })
}

function deleteGroup(id) {
    let objID = { id };

    const options = {
        method: "DELETE",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(objID)
    }

    fetch(ADDRESS + "/deleteGroup", options)
        .then(res => {
            if (res.status == 200) {

                alert("Grupo removido!");
                getGroups();
            }
        }).catch(err => { console.log(err) })
}


//-------------------------------------



function getAmounts() {
    AMOUNTS = [];
    fetch(ADDRESS + "/amounts")
        .then(res => {
            return res.json();
        }).then(json => {
            let amounts = JSON.parse(json);
            amounts.forEach(post => {
                AMOUNTS.push(post);
            })
            if (AMOUNTS.length < 1) {

            } else {
                renderAmounts(AMOUNTS);
                // renderResults();
            }
        })
}

function deleteAmounts(id) {
    let objID = { id };

    const options = {
        method: "DELETE",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(objID)
    }

    fetch(ADDRESS + "/deleteAmount", options)
        .then(res => {
            if (res.status == 200) {
                alert("Quantia removido!");
                window.location.reload(true);
            }
        }).catch(err => { console.log(err) })
}
// function getALLPosts(type) {
//     let all = [];
//     if (type) {
//         fetch(ADDRESS + "/api/all/posts/" + type)
//             .then(res => {
//                 return res.json();
//             }).then(json => {
//                 let posts = JSON.parse(json);

//                 posts.forEach(post => {
//                     all.push(post)
//                     // console.log(all);
//                 })
//             })

//     } else {
//         fetch(ADDRESS + "/api/all/posts")
//             .then(res => {
//                 return res.json();
//             }).then(json => {
//                 let posts = JSON.parse(json);

//                 posts.forEach(post => {
//                     all.push(post)
//                     // console.log(all);
//                 })
//             })
//     }
//     return all
// }



// function newPost(obj) {

//     let options = {
//         method: "POST",
//         headers: new Headers({ 'content-type': 'application/json' }),
//         body: JSON.stringify(obj)
//     }
//     fetch(ADDRESS + "/api/new/post", options)
//         .then(res => {
//             console.log(res)
//         })
// }
