const player = document.querySelector("#play");
const tugma1 = document.querySelector("#btn1");
const tugma2 = document.querySelector("#btn2");
const tugmaTepa = document.querySelector("#btn3");
const tugmaPast = document.querySelector("#btn4");
const tugmaOrta = document.querySelector("#btnOrta");

const BirinchiSamlyot = document.getElementById("btn-1");
const IkkinchiSamlyot = document.getElementById("btn-2");
const UchinchiSamlyot = document.getElementById("btn-3");
const TortinchiSamlyot = document.getElementById("btn-4");

tugma1.addEventListener("click", ()=> {
    player.classList.remove("chap");
    player.classList.add("ong");
    player.classList.remove("orta");
});

tugma2.addEventListener("click", ()=> {
    player.classList.remove("ong");
    player.classList.add("chap");
    player.classList.remove("orta");
});

tugmaTepa.addEventListener("click", ()=> {
    player.classList.add("tepa");
    player.classList.remove("past");
});

tugmaOrta.addEventListener("click", ()=> {
    player.classList.add("orta");
})

tugmaPast.addEventListener("click", ()=> {
    player.classList.add("past");
    player.classList.remove("tepa")
});

BirinchiSamlyot.addEventListener("click", ()=> {
    player.setAttribute("src", "/rasim/1705987.png");
    BirinchiSamlyot.classList.add("bosildi")
    IkkinchiSamlyot.classList.remove("bosildi")
    UchinchiSamlyot.classList.remove("bosildi")
    TortinchiSamlyot.classList.remove("bosildi")
});

IkkinchiSamlyot.addEventListener("click", ()=> {
    player.setAttribute("src", "/rasim/8025480.png");
    BirinchiSamlyot.classList.remove("bosildi")
    IkkinchiSamlyot.classList.add("bosildi")
    UchinchiSamlyot.classList.remove("bosildi")
    TortinchiSamlyot.classList.remove("bosildi")
});

UchinchiSamlyot.addEventListener("click", ()=> {
    player.setAttribute("src", "/rasim/gamelogo3.svg");
    BirinchiSamlyot.classList.remove("bosildi")
    IkkinchiSamlyot.classList.remove("bosildi")
    UchinchiSamlyot.classList.add("bosildi")
    TortinchiSamlyot.classList.remove("bosildi")
});

TortinchiSamlyot.addEventListener("click", ()=> {
    player.setAttribute("src", "/rasim/icon.webp");
    BirinchiSamlyot.classList.remove("bosildi")
    IkkinchiSamlyot.classList.remove("bosildi")
    UchinchiSamlyot.classList.remove("bosildi")
    TortinchiSamlyot.classList.add("bosildi")
});

// document.addEventListener("keydown", (e)=> {
//     if (e.keycode === 37) {
//         player.classList.add("ong");
//     }
// })