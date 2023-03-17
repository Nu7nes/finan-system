const ADDRESS = "http://192.168.1.69:3000";
let GROUPS = [];
let AMOUNTS = [];


getGroups();



async function getGroups() {
    GROUPS = [];
    fetch(ADDRESS + "/groups")
        .then(res => {
            return res.json();
        }).then(json => {
            let groups = JSON.parse(json);

            groups.forEach(post => {
                GROUPS.push(post);
            })
            renderGroups(GROUPS)
            getAmounts();
        })
}

async function deleteGroup(id) {
    let objID = { id };

    const options = {
        method: "DELETE",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(objID)
    }

    fetch(ADDRESS + "/delete", options)
        .then(res => {
            if(res.status == 200) {
                alert("Grupo removido!")
                getGroups();
                renderGroups();
            }
        }).catch(err=>{console.log(err)})
}


async function getAmounts() {
    GROUPS = [];
    fetch(ADDRESS + "/amounts")
        .then(res => {
            return res.json();
        }).then(json => {
            let amounts = JSON.parse(json);

            amounts.forEach(post => {
                AMOUNTS.push(post);
            })
            renderAmounts(AMOUNTS);
            
        })
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
