document.querySelectorAll('.buy').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = btn.dataset.product;
    const confirmMsg = `You selected "${product}". Proceed to payment via bKash, USDT or LTC.`;
    if (confirm(confirmMsg)) {
      alert('Redirecting to payment gateway (integration pending).');
    }
  });
});
