// variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')
const AlertError = document.querySelector('.alert-error')

inputWeight.oninput = () => AlertError.classList.remove("open")
inputHeight.oninput = () => AlertError.classList.remove("open")

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value 
  const height = inputHeight.value

  const ShowAlertError = notANumber(weight) || notANumber(height)

  if (ShowAlertError) {
    AlertError.classList.add('open')
    return;
  }

  AlertError.classList.remove('open')

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  modalMessage.innerText = message
  modalWrapper.classList.add('open')
}

modalBtnClose.onclick = () => {
  modalWrapper.classList.remove('open')
}

function notANumber(value) {
  return isNaN(value) || value == ""
}

  function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }

  window.addEventListener('keydown', handleKeydown)

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      modalWrapper.classList.remove('open')
    }
  }
