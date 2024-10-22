const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipInputs = document.querySelectorAll('input[name="tip"], #tip');
const tipAmountDisplay = document.getElementById("tipAmount");
const totalAmountDisplay = document.getElementById("totalAmount");
const resetButton = document.getElementById("reset");
const customTipInput = document.getElementById("tip");

function calculateTip() {
    billInput.setAttribute("required", "");
    peopleInput.setAttribute("required", "");
    customTipInput.setAttribute("required", "");

    const bill = parseFloat(billInput.value);
    const people = parseInt(peopleInput.value);
    let tipPercentage = 0;

    tipInputs.forEach((input) => {
        if (input === customTipInput) {
            if (!input.validity.valueMissing) {
                tipPercentage = parseFloat(input.value) || 0;
            }
        } else if (input.checked) {
            tipPercentage = parseFloat(input.value);
        }
    });

    

    if (isNaN(bill) || bill <= 0 || isNaN(people) || people <= 0) {
        tipAmountDisplay.textContent = "$0.00";
        totalAmountDisplay.textContent = "$0.00";
        return;
    }

    const tipAmount = (bill * (tipPercentage / 100)) / people;
    const totalAmount = bill / people + tipAmount;

    tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
    totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
}

billInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

tipInputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.type === "radio") {
            customTipInput.value = "";
        } else if (input === customTipInput) {
            tipInputs.forEach((radio) => {
                if (radio.type === "radio") {
                    radio.checked = false;
                }
            });
        }
        calculateTip();
    });
});

resetButton.addEventListener("click", () => {
    billInput.removeAttribute("required");
    peopleInput.removeAttribute("required");
    customTipInput.removeAttribute("required");

    billInput.value = "";
    peopleInput.value = "";
    tipInputs.forEach((input) => {
        input.checked = false;
        if (input.id === "five") input.checked = true;
    });
    customTipInput.value = "";
    tipAmountDisplay.textContent = "$0.00";
    totalAmountDisplay.textContent = "$0.00";

    setTimeout(() => { }, 500);
});