class CartNotification extends HTMLElement {
  constructor() {
    super();

    this.notification = document.getElementById('cart');
    
    this.querySelectorAll('button[type="button"]').forEach((closeButton) =>
      closeButton.addEventListener('click', this.close.bind(this))
    );
  }

//   open() {
//   	this.addCart = document.getElementById('cart_view');

//     this.addCart.addEventListener('click', () => {
//         this.notification.classList.add('active');
//     });

    
//   }

//   close(){https://nhaipt.myshopify.com/admin/themes/129173520547?key=sections%2Fcart-notification-product.liquid
//   	this.closeCart = document.getElementById('close');
// 	this.closeCart.addEventListener('click', () => {
//         this.notification.classList.remove('active');
//     });
//   }

  renderContents(parsedState) {
      this.productId = parsedState.id;
      this.getSectionsToRender().forEach((section => {
        document.getElementById(section.id).innerHTML =
          this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
      }));

      if (this.header) this.header.reveal();
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-notification-product',
        selector: `#cart-notification-product-${this.productId}`,
      },
      {
        id: 'cart-notification-button'
      },
      {
        id: 'cart-icon-bubble'
      }
    ];
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-notification', CartNotification);

const hidden = document.getElementByClassName('product-form__error-message-wrapper');
const open = document.getElementById('cart_view');
const cart_notify = document.getElementById('cart');
const close = document.getElementById('close');
if(hidden.is(':hidden')){
  open.addEventListener('click', () => {
      cart_notify.classList.add('animate');
  });
}else{
  close.addEventListener('click', () => {
      cart_notify.classList.remove('animate');
  });
}