
const slider = document.querySelector("#price");
const activeSlider = document.querySelector(".active");
const views = document.querySelector(".views");
const price = document.querySelector('.price')
const bill = document.querySelector("#billing-type")
const badget = document.querySelector('.badget');


const veiwPerprice = {
    0: "0",
    16: "100K",
    32: "200K",
    48: "400K",
    64: "700K",
    80: "900k",
    96: "1.5M",
};



window.addEventListener('load', ()=>{
    if (window.innerWidth > 600) {
        badget.innerHTML = "25% discount"
    } else {
        badget.innerHTML = "-25%"
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        badget.innerHTML = "25% discount"
    } else {
        badget.innerHTML = "-25%"
    }
})

slider.addEventListener("input", () => {
    activeSlider.style.width = `${slider.value}%`;
    views.textContent = veiwPerprice[slider.value];
    console.log(Number(slider.value).toFixed(2))
    let discounted = (slider.value) - (slider.value * 0.25)
    if (bill.checked) {
        price.innerHTML = `$${Number(discounted).toFixed(2)}<span>/month</span>`
    } else {
        price.innerHTML = `$${Number(slider.value).toFixed(2)}<span>/month</span>`
    }
});


bill.addEventListener('input', () => {
    let discounted = (slider.value) - (slider.value * 0.25)
    if (bill.checked) {
        price.innerHTML = `$${Number(discounted).toFixed(2)}<span>/month</span>`
    } else {
        price.innerHTML = `$${Number(slider.value).toFixed(2)}<span>/month</span>`
    }
})

