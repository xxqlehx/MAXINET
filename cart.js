let carts = document.querySelectorAll('.buy-product');
let products = [
    {
        name:'MaxiNet Mobile – Samsung Galaxy A5',
        price: 15,
        tag:'samsung mobile',
        inCart:0
    },
    {
        name:'MaxiNet Mobile – Samsung Galaxy A5',
        price: 15,
        tag:'samsung mobile',
        inCart:0
    }
]

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart-store p').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart-store p').textContent = productNumbers;
    }

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1)
        document.querySelector('.cart-store p').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers',1)
        document.querySelector('.cart-store p').textContent = 1;

    }
    setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) 
    {
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product  
            }
        }
        cartItems[product.tag].inCart += 1; 
    }else{
        product.inCart = 1 ;
        cartItems = {
            [product.tag]:product
         }
    }
    
    
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);

    }else{
        localStorage.setItem("totalCost",product.price);

    }

}

function displayCart(){
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");

    console.log(cartItems);
    if(cartItems && productContainer ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=`<div class="product"><ion-icon name = "close-circle"></ion-icon><img src = "./images/${item.tag}.jpg"></img><span>${item.name}</span></div>`
            
        });
    }


}
onLoadCartNumbers();
displayCart();