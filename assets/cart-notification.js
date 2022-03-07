//add cart
const open = document.getElementById('cart_view');
const cart_notify = document.getElementById('cart');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    cart_notify.classList.add('active');
});

close.addEventListener('click', () => {
    cart_notify.classList.remove('active');
});
