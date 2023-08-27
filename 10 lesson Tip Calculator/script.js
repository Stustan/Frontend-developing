const amount = document.querySelector('#amount');
const guests = document.querySelector('#guest');
const quality = document.querySelector('#quality');
const tipAmount = document.querySelector('#tip-amount');

calculate = () =>{
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
    amount.value = '';
    guests.value = '';
    quality.value = '';
    if(tip === 'NaN'){
        tipAmount.innerHTML = '0 руб. чаевых с каждого';
        showTipAmount();
    }
    else{
        tipAmount.innerHTML = tip + 'руб. чаевых с каждого';
        showTipAmount();
    }
}

showTipAmount = () =>{
    let x = tipAmount;
    x.className = 'show';
    setTimeout(function(){x.className = x.className.replace('show', '');}, 3000);
}