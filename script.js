const botaoHeader = document.getElementById('btn-header');
const email = document.getElementById('email-header');
const senha = document.getElementById('senha-header');
const check = document.getElementById('agreement');
const botaoSubmit = document.getElementById('submit-btn');

function validarBotao() {
  if (email.value !== 'tryber@teste.com' && senha.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

botaoHeader.addEventListener('click', validarBotao);

function enabledBtn() {
  if (botaoSubmit.disabled === true) {
    botaoSubmit.disabled = false;
  } else {
    botaoSubmit.disabled = true;
  }
}

check.addEventListener('click', enabledBtn);

const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

const contador = (event) => {
  const limit = 500;
  const count = textarea.value.length;
  counter.innerText = Math.abs(count - limit);
  if (count >= limit) {
    event.preventDefault();
  }
};

textarea.addEventListener('input', contador);
