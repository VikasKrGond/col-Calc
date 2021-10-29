let wt = document.getElementById('wt');
let ht = document.getElementById('ht');
let inr = document.getElementById('inr');
let usd = document.getElementById('usd');
let tx = document.getElementById('tx');

function bmiCal() {
    let x = wt.value;
    let y = ht.value;
    let bm = x / (y * y);
    document.getElementById('bmi-val').innerHTML = "Your BMI is : " + bm;
}

function inrUSD() {
    let x = inr.value;
    let us = x * 0.013;
    document.getElementById('usd-val').innerHTML = "In USD $ you have  : " + us;
}

function usdInr() {
    let x = usd.value;
    let inr1 = x * 75;
    document.getElementById('inr-val').innerHTML = "In INR you have  : " + inr1;
}

function incomeTax() {
    let x = tx.value;
    if (x <= 250000) {
        document.getElementById('tax-val').innerHTML = "Sir you don't have to Pay any Tax enjoy"
    }
    if (x > 250000 && x <= 500000) {
        let txamt = (x - 250000);
        let tax = txamt / 10;
        document.getElementById('tax-val').innerHTML = "Sir you have INR " + txamt + " as taxable range and you have to pay INR " + tax + " as income  tax at 10% !!!"
    }
    if (x > 500000 && x <= 1000000) {
        let txamt = x - 500000;
        let tax = txamt / 20;
        document.getElementById('tax-val').innerHTML = "Sir you have INR " + txamt + " as taxable range and you have to pay INR " + tax + " as income  tax  at 20%!!!"
    }
    if (x > 1000000) {
        let txamt = x - 1000000;
        let tax = txamt / 30;
        document.getElementById('tax-val').innerHTML = "Sir you have INR " + txamt + " as taxable range and you have to pay INR " + tax + " as income  tax  at 30%!!!"
    }
}