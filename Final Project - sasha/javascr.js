const balance = document.getElementById('balance'),
      deposit = document.getElementById('deposit'),
      withdraw = document.getElementById('withdraw'),
      depositInput = document.getElementById('deposit-input'),
      withdrawInput = document.getElementById('withdraw-input'),
      depositBtn = document.getElementById('deposit-btn'),
      withdrawBtn = document.getElementById('withdraw-btn'),
      date1 = document.getElementById('date1'),
      username1 = document.getElementById('user1'),
      from1 = document.getElementById('from-input1'),
      deposit1 = document.getElementById('deposit-input'),
      date2 = document.getElementById('date2'),
      username2 = document.getElementById('user2'),
      from2 = document.getElementById('from-input2'),
      withdraw2 = document.getElementById('withdraw-input');    

var row = 1;


depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    const depositValue = Number(deposit.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) + Number(value);
    deposit.innerText = depositValue;
    balance.innerText = balanceValue;

    if(!date1.value || !username1.value || !from1.value || !depositInput.value) {
        alert("Please fill all the boxes");
        return;
    }
    
    var display = document.getElementById("display");

    var newRow1 = display.insertRow(row);

    var cell1 = newRow1.insertCell(0);
    var cell2 = newRow1.insertCell(1);
    var cell3 = newRow1.insertCell(2);
    var cell4 = newRow1.insertCell(3);

    cell1.innerHTML = date1.value;
    cell2.innerHTML = username1.value;
    cell3.innerHTML = from1.value;
    cell4.innerHTML = depositInput.value;

    row++;

    date1.value = '';
    username1.value = '';
    from1.value = '';
    depositInput.value = '';
})

withdrawBtn.addEventListener('click', () => {
    const value = withdrawInput.value; 
    if (!date2.value || !username2.value || !from2.value || !withdrawInput.value) {
        alert("Please fill all boxes");
        return;
    }
    else if (Number(value) > Number(balance.innerText)) {
        alert("Not enough balance to accept withdrawal");
        return;
    }
    else {
        const balanceValue = Number(balance.innerText) - Number(value);
        const withdrawValue = Number(withdraw.innerText) + Number(value);
        withdraw.innerText = withdrawValue;
        balance.innerText = balanceValue;
    }

    var display = document.getElementById("display");

    var newRow2 = display.insertRow(row);

    var cell5 = newRow2.insertCell(0);
    var cell6 = newRow2.insertCell(1);
    var cell7 = newRow2.insertCell(2);
    var cell8 = newRow2.insertCell(3);

    cell5.innerHTML = date2.value;
    cell6.innerHTML = username2.value;
    cell7.innerHTML = from2.value;
    cell8.innerHTML = withdrawInput.value;

    row++;

    withdrawInput.value = '';
    date2.value = '';
    username2.value = '';
    from2.value = '';

})


