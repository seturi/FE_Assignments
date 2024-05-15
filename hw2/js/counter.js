var ctr = document.getElementById("number");
var inc = document.getElementById("inc");
var dec = document.getElementById("dec");
var res = document.getElementById("reset");

inc.onclick = () => {
    const current = parseInt(ctr.innerText, 10)
    ctr.innerText = current + 1;
    ctr.classList.add("change");
    setTimeout(() => {
        ctr.classList.remove("change");
    }, 300)
};
dec.onclick = () => {
    const current = parseInt(ctr.innerText, 10)
    ctr.innerText = current - 1;
    ctr.classList.add("change");
    setTimeout(() => {
        ctr.classList.remove("change");
    }, 300)
};
res.onclick = () => {
    ctr.innerText = 0
    ctr.classList.add("change");
    setTimeout(() => {
        ctr.classList.remove("change");
    }, 300)
};
