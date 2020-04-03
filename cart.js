let carts = document.querySelectorAll('.buy-product');

for(i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        console.log("add to cart");
    })
}