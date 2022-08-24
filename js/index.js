let form = document.querySelector('.form')
let cpf = document.querySelector('.cpf')
let page = 1
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


//api
fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1`, {
  method: 'GET'
})
.then( (response) => response.json())
.then(productsApi)


function productsApi(objeto){
let boxProduct = document.querySelector('.container-products')
  let products = objeto.products.length

   for( let c = 0; c < products  ; c++){
     boxProduct.innerHTML += `
     <div class="box">

     <div class="img-product">
           <img src="https://${objeto.products[c].image}" alt="img-product">
     </div>

     <div class="details">
         <h2 class="title-product">${objeto.products[c].name}</h2>
          <p>
            ${objeto.products[c].description}
          </p>

          <div class="prices">
            <span class="old-price">De: R$${objeto.products[c].oldPrice}</span>
            <span class="price">Por: R$${objeto.products[c].price}</span>
            <span class="count-value">ou: ${objeto.products[c].installments.count}x de  R$${objeto.products[c].installments.value}</span>
          </div>

          <div class="button">
            <button>Comprar</button>
          </div>
     </div>`
   }
}

function mostProducts(){
  page++
  fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
  .then((response) => response.json())
  .then(productsApi)
}

