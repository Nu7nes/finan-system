const ADDRESS = "http://192.168.1.74:3000";

function getALLGroups() {
        fetch(ADDRESS + "/api/all/groups")
            .then(res => {
                return res.json();
            }).then(json => {
                let groups = JSON.parse(json);

                groups.forEach(post => {
                    console.log(post);
                })
            })
    
}

function getALLPosts(type) {
    let all = [];
    if (type) {
        fetch(ADDRESS + "/api/all/posts/" + type)
            .then(res => {
                return res.json();
            }).then(json => {
                let posts = JSON.parse(json);

                posts.forEach(post => {
                    all.push(post)
                    // console.log(all);
                })
            })
    
    } else {
        fetch(ADDRESS + "/api/all/posts")
            .then(res => {
                return res.json();
            }).then(json => {
                let posts = JSON.parse(json);

                posts.forEach(post => {
                    all.push(post)
                    // console.log(all);
                })
            })
    }
    return all
}

function newGroup(obj) {

    let options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(obj)
    }
    fetch(ADDRESS + "/api/new/group", options)
        .then(res => {
            console.log(res)
        })
}

function newPost(obj) {

    let options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(obj)
    }
    fetch(ADDRESS + "/api/new/post", options)
        .then(res => {
            console.log(res)
        })
}
//-------
var obj = {
    name: "Group 2",
    groupIndex: 2
}