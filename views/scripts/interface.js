let btnNav = false;
let incomePosts = []

function rotateBtn() {
    let btn = document.getElementById("rotateBtn");
    if (btnNav) {
        btn.style.transform = "rotate(180deg)"
        btn.style.transition = "300ms ease"
        btnNav = false;
    } else {
        btn.style.transform = "rotate(90deg)"
        btn.style.transition = "300ms ease"
        btnNav = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    incomePosts = getALLPosts();
    console.log(incomePosts);
})
