const btn = document.getElementsByClassName('add_cart');
const products = [] ;
for(var i=0; i <btn.length; i++) {
    let cartBtn = btn[i];
    cartBtn.addEventListener("click", () => {
        let product = {
            name: event.target.parentElement.parentElement.children[0].children[0].innerText,
            price: event.target.parentElement.parentElement.children[0].children[1].innerText,
            totalPrice: parseInt(event.target.parentElement.parentElement.children[0].children[1].innerText),
            quantity: 1
        }
        addItemToLacal(product);
    })
}
function addItemToLacal(product) {
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'));
    if(cartItem === null) {
        products.push(product);
        localStorage.setItem('prdInCart', JSON.stringify(products));
        console.log(cartItem);
    
    }else {
        cartItem.forEach(item => {
            if(product.name == item.name) {
                product.quantity = item.quantity += 1;
                product.totalPrice = item.totalPrice += product.totalPrice;

            }else {
                products.push(item);
            }
        });
        products.push(product);
    }
    localStorage.setItem('prdInCart', JSON.stringify(products));
    window.location.reload();
}
function cartNumberDisplay() {
    let cartNumbers = 0;
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'));

    cartItem.forEach(item => {
        cartNumbers = item.quantity += cartNumbers;
    });
    document.querySelector('.header_cart .number').innerText = cartNumbers;
}
cartNumberDisplay();

const removeItem = document.getElementsByClassName('btn_del');
for(var i=0; i <removeItem.length; i++) {
    let removeBtn = removeItem[i];
    removeBtn.addEventListener('click', () =>{
        let cartItem = JSON.parse(localStorage.getItem('prdInCart'));
        cartItem.forEach(item => {
            if(item.name != event.target.parentElement.parentElement.parentElement.parentElement.children[0].children[1].innerText){
                products.push(item);
            }
        });
        localStorage.setItem('prdInCart', JSON.stringify(products));
        window.location.reload();
    });
}
function subTotal() {
    let subTotal = 0;
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'));
    cartItem.forEach(item => {
        subTotal = item.totalPrice += subTotal;
    });
    document.querySelector('.total_price').innerText = subTotal;
}
subTotal();

 let deductBtnArr = document.getElementsByClassName('minus_btn');
let addButtonArr = document.getElementsByClassName('plus_btn');

for(let deductBtn of deductBtnArr){
    deductBtn.onclick = function(){
        let currentInputBox = deductBtn.nextElementSibling;
        currentInputBox.value =  currentInputBox.value - 1;
    }
}

for(let addButton of addButtonArr){
    addButton.onclick = () => {
        let currentInputBox = addButton.previousElementSibling;
        currentInputBox.value =  parseInt(currentInputBox.value) + 1;
    }
}
