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


function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  subTotal();
}