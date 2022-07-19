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
  const limite = 500;
  const count = textarea.value.length;
  counter.innerText = Math.abs(count - limite);
  if (count >= limite) {
    event.preventDefault();
  }
};

textarea.addEventListener('input', contador);


const mainPai = document.getElementsByClassName('main-container')[0]
const oldForm = document.getElementById('evaluation-form')
const nome = document.getElementById('input-name')
const lastname = document.getElementById('input-lastname')
const emailForm = document.getElementById('input-email')
const casa = document.getElementById('house');
const familia = document.querySelectorAll('input[name="family"]');
const materias = document.querySelectorAll('.subject')
const nota = document.querySelectorAll('[name="rate"]')
// const arrayDados = [fullName.value, email.value, casa.value, familia.value, nota.value, textarea.value]


const newForm = (event) => {
  event.preventDefault()
  const novoForm = document.getElementById('form-data')
   for(let index = 0; index < 7; index +=1){
    const paragrafo = document.createElement('p')
    oldForm.style.display = 'none'
    novoForm.appendChild(paragrafo)
   }
   inputDados()
}

const inputDados = () => {
const novoForm = document.getElementById('form-data').children
let mat = ''
novoForm[0].innerText = `Nome: ${nome.value} ${lastname.value}`
novoForm[1].innerText =  `Email: ${emailForm.value}`
novoForm[2].innerText =  `Casa: ${casa.value}`
for(let a of familia){
  if(a.checked === true) {
 novoForm[3].innerText = `Família: ${a.value}`;  
  }
}
for(index of materias){
   if(index.checked === true){
    mat += `${index.value}, `
  }
  novoForm[4].innerText = `Matérias: ${mat}`
}
for(let b of nota){
  if(b.checked === true){
    novoForm[5].innerText = `Avaliação: ${b.value}`
  }
}
novoForm[6].innerText = `Observações: ${textarea.value} `
}

botaoSubmit.addEventListener('click', newForm);
