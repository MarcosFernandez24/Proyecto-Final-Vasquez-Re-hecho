const clickButton = document.querySelectorAll('.button')
let carrito = []
let juegosOption = []
const tbody = document.querySelector('.tbody')

       /*  JUEGOS  */

 /* JUEGO 1 */      
let juego1Imagen = document.querySelector("#juego1img")
let juego1Titulo = document.querySelector("#nombreJuego1")
let juego1Precio = document.querySelector("#precioJuego1")

/* JUEGO 2 */  

let juego2Imagen = document.querySelector("#juego2img")
let juego2Titulo = document.querySelector("#nombreJuego2")
let juego2Precio = document.querySelector("#precioJuego2")

/* JUEGO 3 */  

let juego3Imagen = document.querySelector("#juego3img")
let juego3Titulo = document.querySelector("#nombreJuego3")
let juego3Precio = document.querySelector("#precioJuego3")

/* JUEGO 4 */  

let juego4Imagen = document.querySelector("#juego4img")
let juego4Titulo = document.querySelector("#nombreJuego4")
let juego4Precio = document.querySelector("#precioJuego4")

/* JUEGO 5 */  

let juego5Imagen = document.querySelector("#juego5img")
let juego5Titulo = document.querySelector("#nombreJuego5")
let juego5Precio = document.querySelector("#precioJuego5")

/* JUEGO 6 */  

let juego6Imagen = document.querySelector("#juego6img")
let juego6Titulo = document.querySelector("#nombreJuego6")
let juego6Precio = document.querySelector("#precioJuego6")

/* JUEGO 7 */  

let juego7Imagen = document.querySelector("#juego7img")
let juego7Titulo = document.querySelector("#nombreJuego7")
let juego7Precio = document.querySelector("#precioJuego7")

/* JUEGO 8 */  

let juego8Imagen = document.querySelector("#juego8img")
let juego8Titulo = document.querySelector("#nombreJuego8")
let juego8Precio = document.querySelector("#precioJuego8")

/* JUEGO 9 */  

let juego9Imagen = document.querySelector("#juego9img")
let juego9Titulo = document.querySelector("#nombreJuego9")
let juego9Precio = document.querySelector("#precioJuego9")

/* JUEGO 10 */  

let juego10Imagen = document.querySelector("#juego10img")
let juego10Titulo = document.querySelector("#nombreJuego10")
let juego10Precio = document.querySelector("#precioJuego10")

/* JUEGO 11 */  

let juego11Imagen = document.querySelector("#juego11img")
let juego11Titulo = document.querySelector("#nombreJuego11")
let juego11Precio = document.querySelector("#precioJuego11")

/* JUEGO 12 */

let juego12Imagen = document.querySelector("#juego12img")
let juego12Titulo = document.querySelector("#nombreJuego12")
let juego12Precio = document.querySelector("#precioJuego12")

/* JUEGO 13 */  

let juego13Imagen = document.querySelector("#juego13img")
let juego13Titulo = document.querySelector("#nombreJuego13")
let juego13Precio = document.querySelector("#precioJuego13")

/* JUEGO 14 */  

let juego14Imagen = document.querySelector("#juego14img")
let juego14Titulo = document.querySelector("#nombreJuego14")
let juego14Precio = document.querySelector("#precioJuego14")

/* JUEGO 15 */  

let juego15Imagen = document.querySelector("#juego15img")
let juego15Titulo = document.querySelector("#nombreJuego15")
let juego15Precio = document.querySelector("#precioJuego15")



class Juegos
{
     constructor  (nombreJuego, precioJuego, imagenJuego)
      {
           this.nombreJuego = nombreJuego
           this.precioJuego = precioJuego
           this.imagenJuego = imagenJuego
     }
    }

    async function fetchJuegos(){

      const response = await fetch ('./app.json')
      return await response.json()
      
      
      }
      
    
      fetchJuegos().then(productos => {
    
        juegosOption = productos
        transformarCards()
        

        
        
        
      })

  
     function transformarCards(){

      /* CARD JUEGO 1 */
      juego1Imagen.setAttribute('src', juegosOption[0].imagenJuego)
      
      juego1Titulo.innerHTML = juegosOption[0].nombreJuego
      
      juego1Precio.innerHTML = `$${juegosOption[0].precioJuego} USD`
      

      /* CARD JUEGO 2 */

      juego2Imagen.setAttribute('src', juegosOption[1].imagenJuego)
      
      juego2Titulo.innerHTML = juegosOption[1].nombreJuego
      
      juego2Precio.innerHTML = `$${juegosOption[1].precioJuego} USD`
      

      /* CARD JUEGO 3 */

      juego3Imagen.setAttribute('src', juegosOption[2].imagenJuego)
      
      juego3Titulo.innerHTML = juegosOption[2].nombreJuego
      
      juego3Precio.innerHTML = `$${juegosOption[2].precioJuego} USD`
      

      /* CARD JUEGO 4 */

      juego4Imagen.setAttribute('src', juegosOption[3].imagenJuego)
      
      juego4Titulo.innerHTML = juegosOption[3].nombreJuego
      
      juego4Precio.innerHTML = `$${juegosOption[3].precioJuego} USD`
      

      /* CARD JUEGO 5 */

      juego5Imagen.setAttribute('src', juegosOption[4].imagenJuego)
      
      juego5Titulo.innerHTML = juegosOption[4].nombreJuego
      
      juego5Precio.innerHTML = `$${juegosOption[4].precioJuego} USD`
      

      /* CARD JUEGO 6 */

      juego6Imagen.setAttribute('src', juegosOption[5].imagenJuego)
      
      juego6Titulo.innerHTML = juegosOption[5].nombreJuego
      
      juego6Precio.innerHTML = `$${juegosOption[5].precioJuego} USD`
      

      /* CARD JUEGO 7 */

      juego7Imagen.setAttribute('src', juegosOption[6].imagenJuego)
      
      juego7Titulo.innerHTML = juegosOption[6].nombreJuego
      
      juego7Precio.innerHTML = `$${juegosOption[6].precioJuego} USD`
      

      /* CARD JUEGO 8 */

      juego8Imagen.setAttribute('src', juegosOption[7].imagenJuego)
      
      juego8Titulo.innerHTML = juegosOption[7].nombreJuego
      
      juego8Precio.innerHTML = `$${juegosOption[7].precioJuego} USD`
      

      /* CARD JUEGO 9 */

      juego9Imagen.setAttribute('src', juegosOption[8].imagenJuego)
      
      juego9Titulo.innerHTML = juegosOption[8].nombreJuego
      
      juego9Precio.innerHTML = `$${juegosOption[8].precioJuego} USD`
      

      /* CARD JUEGO 10 */

      juego10Imagen.setAttribute('src', juegosOption[9].imagenJuego)
      
      juego10Titulo.innerHTML = juegosOption[9].nombreJuego
      
      juego10Precio.innerHTML = `$${juegosOption[9].precioJuego} USD`
      

      /* CARD JUEGO 11 */

      juego11Imagen.setAttribute('src', juegosOption[10].imagenJuego)
      
      juego11Titulo.innerHTML = juegosOption[10].nombreJuego
      
      juego11Precio.innerHTML = `$${juegosOption[10].precioJuego} USD`
      

      /* CARD JUEGO 12 */

      juego12Imagen.setAttribute('src', juegosOption[1].imagenJuego)
      
      juego12Titulo.innerHTML = juegosOption[11].nombreJuego
      
      juego12Precio.innerHTML = `$${juegosOption[11].precioJuego} USD`
      

      /* CARD JUEGO 13 */

      juego13Imagen.setAttribute('src', juegosOption[12].imagenJuego)
      
      juego13Titulo.innerHTML = juegosOption[12].nombreJuego
      
      juego13Precio.innerHTML = `$${juegosOption[12].precioJuego} USD`
      

      /* CARD JUEGO 14 */

      juego14Imagen.setAttribute('src', juegosOption[13].imagenJuego)
      
      juego14Titulo.innerHTML = juegosOption[13].nombreJuego
      
      juego14Precio.innerHTML = `$${juegosOption[13].precioJuego} USD`
      

      /* CARD JUEGO 15 */

      juego15Imagen.setAttribute('src', juegosOption[14].imagenJuego)
      
      juego15Titulo.innerHTML = juegosOption[14].nombreJuego
      
      juego15Precio.innerHTML = `$${juegosOption[14].precioJuego} USD`
      


     } 
      
      

      /* AGREGAR JUEGOS AL CARRITO */

      
const button = document.querySelectorAll('.button')
console.log(button)

button.forEach(btn => {

  btn.addEventListener('click', addCarritoItem)



})


function addCarritoItem(e){

const button = e.target
const item = button.closest('.card')
const itemTitle = item.querySelector('.card-title').textContent
const itemPrice = item.querySelector('.precio').textContent
const itemImg = item.querySelector('.card-img-top').src

const newItem = {

  title: itemTitle,
  precio: itemPrice,
  img: itemImg,
  cantidad: 1

}

addItemCarrito(newItem)

}

function addItemCarrito(newItem){
const inputElement = tbody.getElementsByClassName('input___elemento')
  for(let i =0; i < carrito.length ; i++){
     if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = inputElement[i]
      inputValue.value++;
      totalCarrito()
      return null;
     }

  }

  carrito.push(newItem)
renderCarrito()

}

function renderCarrito(){
tbody.innerHTML = ''
carrito.map(item => {
const tr = document.createElement('tr')
tr.classList.add('itemCarrito')
const content = `

<th scope="row">1</th>
          <td class="table___productos">
          <img src=${item.img}>
            <h6 class="title">${item.title}</h6>
            </td>
          <td class="table___precios"><p>${item.precio}</p></td>
          <td class="table___cantidad">
          <input type="number" min="1" value=${item.cantidad} class="input___elemento">
          <button class="delete btn btn-danger button">X</button>
          </td>

`
tr.innerHTML = content
tbody.append(tr)

tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
})
totalCarrito()

}
function totalCarrito(){

  let total = 0;
  const totalEnCarrito = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const totalPrecio = Number(item.precio.replace("$", ''))
    total = total + totalPrecio*item.cantidad
  })

  totalEnCarrito.innerHTML = `Total $${total}`
}

function removeItemCarrito(e){
  const deleteButton = e.target
  const tr = deleteButton.closest(".itemCarrito")
  const titleCont = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].titleCont.trim() === titleCont.trim()){

    carrito.splice(i, 1)
    console.log("Hola")

    }
  }
  tr.remove()
  
}