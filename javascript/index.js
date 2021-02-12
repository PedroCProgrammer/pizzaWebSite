let tittle = document.querySelector('h1#pizza-sabor-type')
let ingredientes = document.querySelector('h3#ingredientes')
let price = document.querySelector('h1#price')
let bolinhas = [document.querySelector('div#one'), document.querySelector('div#two'), document.querySelector('div#three'), document.querySelector('div#four'), document.querySelector('div#five')]

function functionMenu(){
    console.log('teste')
}

function functionOne(){
    bolinhas[0].style.backgroundColor = 'green'
    bolinhas[1].style.backgroundColor = 'gray'
    bolinhas[2].style.backgroundColor = 'gray'
    bolinhas[3].style.backgroundColor = 'gray'
    bolinhas[4].style.backgroundColor = 'gray'
    tittle.innerHTML = 'Portuguesa.'
    ingredientes.innerHTML = 'Mussarela, Presunto, Ovos, Tomate, Cebola, Ervilha, Azeitona e pimentão.'
    price.innerHTML = 'R$11,99'
}

function functionTwo(){
    bolinhas[1].style.backgroundColor = 'green'
    bolinhas[0].style.backgroundColor = 'gray'
    bolinhas[2].style.backgroundColor = 'gray'
    bolinhas[3].style.backgroundColor = 'gray'
    bolinhas[4].style.backgroundColor = 'gray'
    tittle.innerHTML = 'Marguerita.'
    ingredientes.innerHTML = 'Molho de tomate, mussarela fatiada, Orégano e manjericão fresco.'
    price.innerHTML = 'R$15,99'
}

function functionThree(){
    bolinhas[2].style.backgroundColor = 'green'
    bolinhas[0].style.backgroundColor = 'gray'
    bolinhas[1].style.backgroundColor = 'gray'
    bolinhas[3].style.backgroundColor = 'gray'
    bolinhas[4].style.backgroundColor = 'gray'
    tittle.innerHTML = 'Calabresa.'
    ingredientes.innerHTML = 'Calabresa, mussarela, cebola, molho de tomate, azeitonas, azeite e orégano.'
    price.innerHTML = 'R$19,99'
}

function functionFour(){
    bolinhas[3].style.backgroundColor = 'green'
    bolinhas[0].style.backgroundColor = 'gray'
    bolinhas[1].style.backgroundColor = 'gray'
    bolinhas[2].style.backgroundColor = 'gray'
    bolinhas[4].style.backgroundColor = 'gray'
    tittle.innerHTML = 'Coração.'
    ingredientes.innerHTML = 'Coração de galinha, Pimenta, Tomate, Mussarela, azeite de oliva e cebolinha.'
    price.innerHTML = 'R$25,99'
}

function functionFive(){
    bolinhas[4].style.backgroundColor = 'green'
    bolinhas[0].style.backgroundColor = 'gray'
    bolinhas[1].style.backgroundColor = 'gray'
    bolinhas[2].style.backgroundColor = 'gray'
    bolinhas[3].style.backgroundColor = 'gray'
    tittle.innerHTML = 'Italian.'
    ingredientes.innerHTML = 'Mussarela, Cogumelo, Presunto, Alcachofra, Azeitona, Manjerona.'
    price.innerHTML = 'R$16,99'
}