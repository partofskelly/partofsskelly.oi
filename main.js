const cartCountElem = document.getElementById('cart-count');
    let cartCount = 0;

    document.querySelectorAll('.add-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        cartCount++;
        cartCountElem.textContent = cartCount;
      });
    });