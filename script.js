document.getElementById('btn').addEventListener('click', function (e) {
  e.preventDefault();
  let number =parseInt('12345678910');
  let password = 1234;
  let mbNum = parseInt(document.getElementById('mb-num').value);
  let pin = parseInt(document.getElementById('pin').value);
  if (number === mbNum && password === pin) {
    window.location.href = './home.html';
  }
  else {
    alert('Invalid please try again')
  }

})