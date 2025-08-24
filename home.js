//transition data
let transactionData=[];
//js resuse
function numberConvert(id) {
  const numberId = document.getElementById(id);
  const numberValue = numberId.value;
  const numberconver = parseInt(numberValue);
  return numberconver;
}

//main balance
function mainBalan(value) {
  let mainBala = document.getElementById('main-balance');
  mainBala.innerText = value;

  return mainBala;
}
function setValue() {
  let mainBala = parseInt(document.getElementById('main-balance').innerText);
  
  return mainBala;
}



//add money
let validPin = 1234;
document.getElementById('add-money').addEventListener('click', function (e) {
  e.preventDefault();
  let mainBalance =setValue();
  let ammountAdd = numberConvert('amountAdd');
  let acNum = document.getElementById('acnum').value;
  if (acNum.length < 11) {
    alert('Account Number Incorrect')
    return;
  }
  let pin = numberConvert('pin');
  if (pin !== validPin) {
    alert('Wrong Password');
    return;
  }
  let currentBalance = mainBalance + ammountAdd;
  mainBalan(currentBalance)
    let data = {
      name: 'Add Money',
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
})

//cash out
document.getElementById('out-money').addEventListener('click', function (e) {
  e.preventDefault();
  let mainBalance = setValue();
  let amountOut = numberConvert('amountOut');
  let agentN =(document.getElementById('agent').value);
  if (agentN.length < 11) {
    alert('number Incorrect');
    return
  }
  
  let cashout = mainBalance - amountOut;
  mainBalan(cashout)
  let data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString()
  }
  transactionData.push(data)
 
})

//transfer money
document
  .getElementById('transferMoney')
  .addEventListener('click', function (e) {
    e.preventDefault();
    let availableBalance = setValue();
    let transfer = numberConvert('trans-amount');
    let currentBalance = availableBalance - transfer;
    mainBalan(currentBalance);
      let data = {
        name: 'Transfer Money',
        date: new Date().toLocaleTimeString(),
      };
      transactionData.push(data);
  });
//get bouns
document.getElementById('get-bouns').addEventListener('click', function (e) {
  e.preventDefault();
  let bounsValue = numberConvert('bonus-value');
  if (bounsValue===1234) {
    let randomNum = Math.round(Math.random() * 1000);
  alert(`you got ${randomNum} TK Bonus`);
  let currentBalance = randomNum + setValue();
  mainBalan(currentBalance);
  }
  else {
    alert('Please try again')
  }
    let data = {
      name: 'Get Bounus',
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);

});

//pay money
document.getElementById('pay-money').addEventListener('click', function (e) {
  e.preventDefault();
  let currentBalance = setValue() - numberConvert('pay');
  mainBalan(currentBalance);
    let data = {
      name: 'Pay Bill',
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
})

//transaction
document.getElementById('tran-btn').addEventListener('click', function (e) {
  e.preventDefault()
  const tranContainer = document.getElementById('tran-container');
  tranContainer.innerText = '';
  for (let data of transactionData) {
    const div = document.createElement('div');
    div.innerHTML = ` <div class="flex justify-between items-center bg-white p-3 rounded-xl">
   <div class="flex items-center">
    <img src="./assets/wallet1.png" alt="">
    <div class="ml-4 text-[#080808b3]">
      <h2 class="font-bold text-xl">${data.name}</h2>
      <p>${data.date}</p>
    </div>
   </div>
    <div>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
  </div>`;
    tranContainer.appendChild(div);
  }
})

//toggle
function display(id) {
  let items = document.getElementsByClassName('item');
  for (let item of items) {
    item.style.display = 'none';
  }
  document.getElementById(id).style.display = 'block';
}
function butns(id) {
  let butns = document.getElementsByClassName('form-btn');
  for (let btn of butns) {
    btn.classList.add('border-[#0808081a]');
    btn.classList.remove('bg-[#0874f20d]');
  }
  document.getElementById(id).classList.remove('border-[#0808081a]');
  document.getElementById(id).classList.add('border-[#0874f2]');
  document.getElementById(id).classList.add('bg-[#0874f20d]');
}

document.getElementById('add-1').addEventListener('click', function () {
  display('moneyAdd');
  butns('add-1');
});
document.getElementById('out-1').addEventListener('click', function () {
  display('moneyOut')
  butns('out-1');
});

document.getElementById('tran-Money').addEventListener('click', function () {
  display('transfer');
  butns('tran-Money');
})
document.getElementById('bonus-btn').addEventListener('click', function () {
  display('bouns');
  butns('bonus-btn');
})

document.getElementById('pay-Money').addEventListener('click', function () {
  display('payMoney');
  butns('pay-Money');
})
document.getElementById('tran-btn').addEventListener('click', function () {
  display('transactions');
  butns('tran-btn');
})