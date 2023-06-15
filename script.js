//::::::::::::::::::::::::::::::::::::://
//::: verbindung mit HTML  ::://
const verbindung = document.getElementById("mainInhalt");
//::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::://
const b =[
    {
        title: "erste",
        text:"es kommt vor",
    },
    {
        title: "zweite",
        text:"es kommt vor",
    },
    {
        title: "dritte",
        text:"es kommt vor",
    },
    {
        title: "vierte",
        text:"es kommt vor",
    },
    {
        title: "fünfte",
        text:"es kommt vor",
    }
]
//::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::://
for (let a = 0; a<b.length; a++)
title(b[a]);
//::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::://

function e(title){
return `<p>${text}</p>`;
}
//::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::://
function komponent(text){
    verbindung.innerHTML += `<div><h3>${e(title)}</h3>TEXT</div>`;
}
komponent("hallo");