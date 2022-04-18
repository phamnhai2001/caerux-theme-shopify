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
// const open = document.getElementById('cart_view');
// const cart_notify = document.getElementById('cart');
// const close = document.getElementById('close');


// let check = document.getElementById('check');

// // if (check.offsetParent == null) {
  
// //  open.addEventListener('click', () => {
// //       cart_notify.classList.add('animate');
// //   });
// //   close.addEventListener('click', () => {
// //       cart_notify.classList.remove('animate');
// //   });
// // 	console.log("Element is hidden.");


// // } else {
// //      open.addEventListener('click', () => {
// //       cart_notify.classList.remove('animate');
// //   });
// // 	console.log("Element is visiable.");

// // }

// let hidden = check.getAttribute("hidden");

//     if (hidden) {
//        open.addEventListener('click', () => {
//       		cart_notify.classList.remove('animate');
//   		});
// 		console.log('hidden');
      
//     } else {
      
//       open.addEventListener('click', () => {
//       cart_notify.classList.add('animate');
//       });
//       close.addEventListener('click', () => {
//           cart_notify.classList.remove('animate');
//       });
// 	console.log('visiable');
//     }
    document.querySelector('#checkout').addEventListener('click', function(event) {
      console.log('1234');
      document.getElementById("cart").submit();
    });
  
//  open.addEventListener('click', () => {
//      console.log(check.offsetParent == null);
//   	if (check.offsetParent != null) {
//       cart_notify.classList.remove('animate');
      
//      }
//      if (check.offsetParent == null) {
// cart_notify.classList.add('animate');
//       close.addEventListener('click', () => {
//          cart_notify.classList.remove('animate');
//       });
//      }
//  });
