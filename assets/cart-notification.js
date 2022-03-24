class CartNotification extends HTMLElement {
  constructor() {
    super();

    this.notification = document.getElementById('cart');
    
    this.querySelectorAll('button[type="button"]').forEach((closeButton) =>
      closeButton.addEventListener('click', this.close.bind(this))
    );
  }


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


// open view cart
const open = document.getElementById('cart_view');
const cart_notify = document.getElementById('cart');
const close = document.getElementById('close');


let check = document.getElementById('check');

if (check.offsetParent == null) {

 open.addEventListener('click', () => {
      cart_notify.classList.add('animate');
  });
  close.addEventListener('click', () => {
      cart_notify.classList.remove('animate');
  });
	console.log("Element is hidden.");


} else {
     open.addEventListener('click', () => {
      cart_notify.classList.remove('animate');
  });
	console.log("Element is visiable.");

}