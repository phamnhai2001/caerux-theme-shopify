fetch(window.Shopify.routes.root + "variants/[variant-id]/?section_id=pickup-availability")
  .then(response => response.text())
  .then(text => {
    const container = document.querySelector('[data-store-availability-container]');
    const pickupAvailabilityHTML = new DOMParser()
      .parseFromString(text, 'text/html')
      .querySelector('.shopify-section');

    container.appendChild(pickupAvailabilityHTML);
  })
  .catch(e => {
    console.error(e);
  });
