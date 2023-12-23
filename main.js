const player = document.querySelector("#play");
const tugma1 = document.querySelector("#btn1");
const tugma2 = document.querySelector("#btn2");
const tugmaTepa = document.querySelector("#btn3")
const tugmaPast = document.querySelector("#btn4")

tugma1.addEventListener("click", ()=> {
    player.classList.add("chap");
    player.classList.remove("ong");
});

tugma2.addEventListener("click", ()=> {
    player.classList.add("ong");
    player.classList.remove("chap");
});

tugmaTepa.addEventListener("click", ()=> {
    player.classList.add("tepa");
    player.classList.remove("past");
});

tugmaPast.addEventListener("click", ()=> {
    player.classList.add("past");
    player.classList.remove("tepa")
})

// document.addEventListener("keydown", (e)=> {
//     if (e.keycode === 37) {
//         player.classList.add("ong");
//     }
// })