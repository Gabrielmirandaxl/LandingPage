let form = document.querySelector('.form')
let cpf = document.querySelector('.cpf')

cpf.addEventListener('keypress', function(){
  let cpfInput = cpf.value.length

  if(cpfInput === 3){
    cpf.value += '.'
  }

  if(cpfInput === 7){
    cpf.value += '.'
  }

  if(cpfInput === 11){
    cpf.value += '-'
  }
})




//validation of form
form.addEventListener('submit', function submit(e){
  e.preventDefault()



})



